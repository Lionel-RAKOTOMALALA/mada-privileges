<?php
/**
 * Envoi du formulaire de contact (cahier de contenu, § 6).
 *
 * Le site est exporté en fichiers statiques : il n'y a plus de serveur Node
 * pour exécuter une Server Function. Ce script prend sa place, exécuté par
 * Apache à côté des pages. Il reçoit le POST du formulaire et répond en JSON ;
 * l'interface, elle, n'a pas changé.
 *
 * Tout est revalidé ici. Un script joignable par un POST direct ne peut pas
 * faire confiance à ce qu'il reçoit : les contrôles du navigateur ne protègent
 * que le visiteur de bonne foi.
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/**
 * Destinataire. Jamais pris dans les données reçues : une adresse fournie par
 * le formulaire ferait de ce script un relais d'envoi ouvert. Doit rester
 * aligné sur `CONTACT_EMAIL` dans `lib/links.ts`.
 */
const CONTACT_EMAIL = 'contact@madaprivileges.com';

/**
 * Expéditeur technique. Il doit appartenir au domaine qui héberge ce script,
 * sans quoi SPF et DKIM feront classer le message en indésirable. Le visiteur
 * n'est donc jamais l'expéditeur — il est en « Répondre à ».
 */
const MAIL_FROM = 'contact@madaprivileges.com';
const MAIL_FROM_NAME = 'Mada Privilèges';

/** Cinq envois par heure et par adresse IP (§ 6.2). */
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 3600;

/** Bornes de longueur — un POST direct ne passe pas par les limites du DOM. */
const LIMITS = [
	'nom' => 120,
	'email' => 200,
	'telephone' => 40,
	'profil' => 80,
	'objet' => 80,
	'message' => 4000,
];

/** Listes fermées : un POST direct ne doit pas y glisser autre chose. */
const PROFILES = [
	'Un particulier',
	'Un commerçant ou une entreprise',
	'Autre',
];

const SUBJECTS = [
	'Question sur le programme',
	'Inscrire mon enseigne',
	'Support technique',
	'Presse et partenariats',
	'Autre',
];

/** Confirmation affichée en place du formulaire (§ 6.2), reprise mot pour mot. */
const SUCCESS_MESSAGE =
	'Merci, votre message est parti. Nous vous répondons sous 48 heures ouvrées.';

// ---------------------------------------------------------------------------
// Outils
// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
// La réponse dépend de ce qui est envoyé : rien à mettre en cache.
header('Cache-Control: no-store');

/** Termine la requête sur une réponse JSON. */
function respond(array $payload, int $code = 200): void
{
	http_response_code($code);
	echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	exit;
}

/**
 * Récupère un champ, coupé à sa longueur maximale.
 *
 * Les retours à la ligne sont retirés partout sauf dans le message : glissés
 * dans un nom ou une adresse, ils permettraient d'ajouter des en-têtes au mail
 * et d'en détourner la destination.
 */
function field(string $name, bool $multiline = false): string
{
	$raw = $_POST[$name] ?? '';
	if (!is_string($raw)) {
		return '';
	}
	if (!$multiline) {
		$raw = str_replace(["\r", "\n"], ' ', $raw);
	}
	return mb_substr(trim($raw), 0, LIMITS[$name]);
}

/** Adresse IP du visiteur, telle que le proxy de l'hébergeur la transmet. */
function client_ip(): string
{
	$forwarded = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
	if ($forwarded !== '') {
		$first = trim(explode(',', $forwarded)[0]);
		if ($first !== '') {
			return $first;
		}
	}
	return $_SERVER['HTTP_X_REAL_IP'] ?? ($_SERVER['REMOTE_ADDR'] ?? 'inconnue');
}

/**
 * Limitation d'envoi, adossée à un fichier par adresse IP.
 *
 * Le compteur vit dans le dossier temporaire du système : il ne demande aucune
 * permission particulière et l'hébergeur le purge de lui-même. Il freine un
 * envoi répété depuis un navigateur ; il ne constitue pas une protection
 * globale, qu'un pare-feu applicatif seul peut offrir.
 */
function rate_limited(string $ip): bool
{
	$path = sys_get_temp_dir() . '/mp-contact-' . hash('sha256', $ip) . '.json';
	$now = time();

	$stamps = [];
	if (is_file($path)) {
		$decoded = json_decode((string) @file_get_contents($path), true);
		if (is_array($decoded)) {
			// Seuls les envois encore dans la fenêtre comptent.
			$stamps = array_filter(
				$decoded,
				static fn($t) => is_int($t) && $now - $t < RATE_LIMIT_WINDOW
			);
		}
	}

	if (count($stamps) >= RATE_LIMIT_MAX) {
		return true;
	}

	$stamps[] = $now;
	@file_put_contents($path, json_encode(array_values($stamps)), LOCK_EX);
	return false;
}

/** Encode un en-tête non-ASCII, faute de quoi les accents arrivent illisibles. */
function encode_header(string $value): string
{
	return mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n");
}

/** Envoie un message en texte brut, en UTF-8. */
function send_mail(string $to, string $subject, string $body, string $replyTo): bool
{
	$headers = [
		'From: ' . encode_header(MAIL_FROM_NAME) . ' <' . MAIL_FROM . '>',
		'Reply-To: ' . $replyTo,
		'MIME-Version: 1.0',
		'Content-Type: text/plain; charset=UTF-8',
		'Content-Transfer-Encoding: 8bit',
	];

	return @mail(
		$to,
		encode_header($subject),
		// Les lignes d'un mail se terminent par CRLF ; certains serveurs
		// tronquent le corps si on ne le respecte pas.
		str_replace("\n", "\r\n", $body),
		implode("\r\n", $headers)
	);
}

// ---------------------------------------------------------------------------
// Traitement
// ---------------------------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	respond(['status' => 'error', 'message' => 'Méthode non autorisée.'], 405);
}

// Champ piège (§ 6.1) : masqué en CSS, jamais rempli par un humain. On répond
// « envoyé » sans rien envoyer, pour ne pas renseigner le robot.
if (($_POST['website'] ?? '') !== '') {
	respond(['status' => 'sent', 'message' => SUCCESS_MESSAGE]);
}

$nom = field('nom');
$email = field('email');
$telephone = field('telephone');
$profil = field('profil');
$objet = field('objet');
$message = field('message', true);
$consentement = ($_POST['consentement'] ?? '') === 'on';

$errors = [];
if (mb_strlen($nom) < 2) {
	$errors['nom'] = 'Indiquez votre nom.';
}
// Volontairement permissif : la seule validation qui vaille est l'envoi.
if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $email)) {
	$errors['email'] = 'Cette adresse e-mail semble incomplète.';
}
if (!in_array($profil, PROFILES, true)) {
	$errors['profil'] = 'Choisissez une option.';
}
if (!in_array($objet, SUBJECTS, true)) {
	$errors['objet'] = 'Choisissez un objet.';
}
if (mb_strlen($message) < 10) {
	$errors['message'] = 'Décrivez votre demande en quelques mots.';
}
if (!$consentement) {
	$errors['consentement'] = 'Votre accord est nécessaire pour traiter la demande.';
}

if ($errors !== []) {
	respond([
		'status' => 'error',
		'message' => "Le formulaire n'est pas complet.",
		'errors' => $errors,
	], 422);
}

if (rate_limited(client_ip())) {
	respond([
		'status' => 'error',
		'message' =>
			'Vous avez envoyé plusieurs demandes coup sur coup. Réessayez dans une heure.',
	], 429);
}

// Objet formaté « [Site] Objet sélectionné — Nom du contact » (§ 6.3).
$subject = sprintf('[Site] %s — %s', $objet, $nom);
$body = implode("\n", [
	'Nom       : ' . $nom,
	'E-mail    : ' . $email,
	'Téléphone : ' . ($telephone !== '' ? $telephone : '—'),
	'Profil    : ' . $profil,
	'Objet     : ' . $objet,
	'',
	'Message :',
	$message,
	'',
	'—',
	'Envoyé depuis le formulaire de madaprivileges.com',
]);

// Le visiteur ne peut pas être l'expéditeur — SPF et DKIM feraient rejeter le
// message — mais un « Répondre à » permet de lui répondre directement depuis
// la boîte de contact. Le nom y est encodé : « Rakotomalala Héry » partirait
// sinon en octets bruts et s'afficherait de travers.
$replyTo = sprintf('%s <%s>', encode_header($nom), $email);

$sent = send_mail(CONTACT_EMAIL, $subject, $body, $replyTo);

if (!$sent) {
	error_log('[contact] échec de mail() vers ' . CONTACT_EMAIL);
	respond([
		'status' => 'error',
		'message' => "L'envoi a échoué. Vous pouvez nous écrire directement.",
		'fallback' => true,
	], 502);
}

// Accusé de réception à l'expéditeur (§ 6.3). Son échec ne doit pas faire
// croire au visiteur que sa demande n'est pas partie : elle l'est.
send_mail(
	$email,
	'Nous avons bien reçu votre message — Mada Privilèges',
	implode("\n", [
		'Bonjour ' . $nom . ',',
		'',
		'Nous avons bien reçu votre demande et vous répondons sous 48 heures ouvrées.',
		'',
		'Objet : ' . $objet,
		'',
		'Votre message :',
		$message,
		'',
		'—',
		'Mada Privilèges — EDS Group, Antananarivo',
		CONTACT_EMAIL,
	]),
	CONTACT_EMAIL
);

respond(['status' => 'sent', 'message' => SUCCESS_MESSAGE]);
