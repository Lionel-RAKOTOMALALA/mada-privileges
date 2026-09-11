import type { Metadata } from "next";
import {
	AUTHORITY,
	EDITOR,
	LAST_UPDATED,
	PENDING,
	PRIVACY_EMAIL,
} from "@/lib/legal";
import { CONTACT_EMAIL, legalLinks } from "@/lib/links";
import { A, Bullets, DocFooter, DocTitle, Section, Table } from "../_prose";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Politique de confidentialité — Mada Privilèges",
	description:
		"Données collectées par Mada Privilèges, finalités, destinataires, durées de conservation et exercice de vos droits, au titre de la loi malgache 2014-038.",
	alternates: { canonical: legalLinks.privacy },
};

/**
 * Politique de confidentialité — document II.
 *
 * Elle couvre le site vitrine *et* la plateforme : le document le dit
 * explicitement. La version précédente de cette page renvoyait la plateforme
 * à « sa propre politique » — c'est cette politique-ci, il n'y en a qu'une.
 */
export default function Page() {
	return (
		<>
			<DocTitle kicker="Document II" title="Politique de confidentialité">
				<p>
					EDS Group attache de l&apos;importance à la protection des données de
					ses membres, des enseignes partenaires et des visiteurs de son site.
					Cette politique explique quelles données sont collectées, pourquoi,
					combien de temps elles sont conservées, avec qui elles sont partagées
					et quels droits vous pouvez exercer.
				</p>
				<p>
					Elle s&apos;applique au site vitrine madaprivileges.com et à la
					plateforme madaprivileges.mg, et fait partie intégrante des{" "}
					<A href={legalLinks.terms}>conditions générales d&apos;utilisation</A>.
				</p>
			</DocTitle>

			<Section id="responsable" title="1. Responsable du traitement">
				<p>
					{EDITOR.name}, {EDITOR.address}. RCS {EDITOR.rcs}, NIF {EDITOR.nif}.
				</p>
				<p>
					Point de contact pour toute question relative aux données
					personnelles : <A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A>
					, ou par courrier à l&apos;adresse du siège avec la mention
					«&nbsp;Protection des données&nbsp;».
				</p>
				<p>
					Le traitement est soumis à la loi n°&nbsp;2014-038 du 9 janvier 2015
					sur la protection des données à caractère personnel et relève du
					contrôle de la {AUTHORITY.name} ({AUTHORITY.short}).
				</p>
			</Section>

			<Section id="donnees-collectees" title="2. Données collectées">
				<Bullets
					items={[
						<>
							<strong className="font-semibold text-foreground">
								Formulaire de contact du site
							</strong>{" "}
							: nom et prénom, adresse e-mail, numéro de téléphone ou WhatsApp,
							qualité déclarée (particulier, commerçant, autre), objet de la
							demande, contenu du message.
						</>,
						<>
							<strong className="font-semibold text-foreground">
								Création d&apos;un compte membre
							</strong>{" "}
							: nom et prénom, adresse e-mail, mot de passe (conservé sous forme
							chiffrée, jamais en clair), numéro de téléphone si vous le
							renseignez, langue d&apos;affichage.
						</>,
						<>
							<strong className="font-semibold text-foreground">
								Usage de vos cartes
							</strong>{" "}
							: enseignes dont vous avez ajouté une carte, progression de chaque
							carte (points, tampons, visites, bons), dates et heures des
							opérations enregistrées par l&apos;enseigne, récompenses obtenues
							et utilisées.
						</>,
						<>
							<strong className="font-semibold text-foreground">
								Inscription d&apos;une enseigne
							</strong>{" "}
							: raison sociale, secteur d&apos;activité, adresse des points de
							vente, nom et coordonnées du représentant, informations
							nécessaires à la facturation et au contrat.
						</>,
						<>
							<strong className="font-semibold text-foreground">
								Collecte automatique
							</strong>
							, à des fins techniques et de sécurité : adresse IP, type
							d&apos;appareil et de navigateur, pages consultées, dates et
							heures de connexion, données de journalisation.
						</>,
					]}
				/>
				<p>
					Mada Privilèges ne collecte aucune donnée sensible au sens de la loi
					2014-038, notamment aucune donnée relative à la santé, aux opinions
					politiques, aux convictions religieuses ou à l&apos;appartenance
					syndicale. Le service ne demande jamais de numéro de carte bancaire ni
					de code confidentiel par e-mail, par téléphone ou par message.
				</p>
			</Section>

			<Section id="finalites" title="3. Finalités et fondement du traitement">
				<Table
					head={["Finalité", "Données concernées", "Fondement"]}
					rows={[
						[
							"Répondre aux demandes envoyées via le formulaire",
							"Données de contact et message",
							"Consentement",
						],
						[
							"Créer et gérer le compte membre",
							"Identité, e-mail, mot de passe",
							"Exécution du service",
						],
						[
							"Faire fonctionner les cartes de fidélité",
							"Données d'usage et de progression",
							"Exécution du service",
						],
						[
							"Permettre à une enseigne de reconnaître son client et de créditer la récompense",
							"Identifiant du membre et progression sur le programme de cette enseigne",
							"Exécution du service",
						],
						[
							"Fournir aux enseignes des statistiques sur leur propre programme",
							"Données agrégées, sans identification individuelle",
							"Intérêt légitime",
						],
						[
							"Informer des nouveautés et des offres du réseau",
							"E-mail, téléphone",
							"Consentement révocable",
						],
						[
							"Assurer la sécurité et prévenir la fraude",
							"Données techniques et journaux",
							"Intérêt légitime",
						],
						[
							"Répondre aux obligations comptables et fiscales",
							"Données de facturation et contractuelles",
							"Obligation légale",
						],
					]}
				/>
			</Section>

			<Section id="destinataires" title="4. Qui accède à vos données">
				<Bullets
					items={[
						"Le personnel habilité d'EDS Group, dans la limite de ce que sa fonction exige.",
						<>
							Les enseignes partenaires, uniquement pour ce qui concerne leur
							propre programme. Une enseigne voit la progression du membre sur
							sa carte à elle. Elle ne voit ni les autres cartes du
							portefeuille, ni les achats réalisés chez d&apos;autres
							commerçants, ni la liste des enseignes fréquentées.
						</>,
						"Les prestataires techniques qui interviennent pour l'hébergement, l'envoi des e-mails et la supervision de la plateforme, tenus par contrat à la confidentialité et à la sécurité.",
						"Les autorités compétentes, sur réquisition régulière et dans les conditions prévues par la loi.",
					]}
				/>
				<p>
					EDS Group ne vend pas vos données, ne les loue pas, et ne les transmet
					à aucun tiers à des fins publicitaires.
				</p>
			</Section>

			<Section id="transferts" title="5. Transferts hors de Madagascar">
				<p>
					Certains prestataires techniques peuvent héberger ou traiter des
					données en dehors du territoire malgache. Dans ce cas, EDS Group
					s&apos;assure que ces prestataires appliquent un niveau de protection
					équivalent à celui exigé par la loi 2014-038, par des engagements
					contractuels appropriés.
				</p>
			</Section>

			<Section id="conservation" title="6. Durées de conservation">
				<Table
					head={["Donnée", "Durée"]}
					rows={[
						[
							"Compte membre",
							"Durée d'activité du compte, puis 24 mois après la dernière connexion",
						],
						[
							"Historique des cartes et des récompenses",
							"Durée du compte, puis suppression ou anonymisation",
						],
						[
							"Demandes reçues par le formulaire de contact",
							"24 mois à compter du dernier échange",
						],
						["Journaux techniques et de sécurité", "12 mois"],
						[
							"Données contractuelles et pièces comptables des enseignes",
							"Durée légale de conservation applicable",
						],
					]}
				/>
				<p>
					À l&apos;issue de ces délais, les données sont supprimées ou
					anonymisées de façon irréversible.
				</p>
			</Section>

			<Section id="droits" title="7. Vos droits">
				<p>
					Conformément à la loi 2014-038, vous disposez du droit d&apos;être
					informé, d&apos;accéder à vos données, de les faire rectifier, de vous
					opposer à leur traitement pour un motif légitime et d&apos;en demander
					l&apos;effacement.
				</p>
				<p>
					Vous pouvez également retirer votre consentement à tout moment pour les
					traitements qui reposent sur lui, notamment les communications
					commerciales, sans que ce retrait remette en cause la validité de ce
					qui a été fait auparavant.
				</p>
				<p>
					Pour exercer ces droits, écrivez à{" "}
					<A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A>. EDS Group
					répond dans un délai de trente jours. Une pièce justifiant de votre
					identité peut vous être demandée en cas de doute raisonnable.
				</p>
				<p>
					Si vous estimez que vos droits ne sont pas respectés, vous pouvez
					saisir la {AUTHORITY.name}.
				</p>
			</Section>

			<Section id="securite" title="8. Sécurité">
				<p>
					Les échanges entre votre navigateur et nos serveurs sont chiffrés. Les
					mots de passe sont stockés sous forme de condensat et ne sont
					accessibles à personne, y compris à nos équipes. Les accès aux données
					sont limités aux personnes habilitées et journalisés. Des sauvegardes
					régulières sont réalisées.
				</p>
				<p>
					En cas de violation de données susceptible de porter atteinte à vos
					droits, EDS Group prend les mesures de confinement nécessaires, informe
					les personnes concernées et procède aux notifications prévues par la
					réglementation.
				</p>
			</Section>

			<Section id="cookies" title="9. Cookies">
				<p>
					Le site utilise des cookies strictement nécessaires à son
					fonctionnement : maintien de la session, sécurité, mémorisation de la
					langue choisie. Ces cookies ne peuvent pas être désactivés sans
					dégrader le service.
				</p>
				{/*
					Le document prévoit ici un paragraphe conditionnel sur la mesure
					d'audience, à n'ajouter que si un outil est activé. Aucun ne l'est :
					le paragraphe n'est donc pas publié, et la décision reste listée
					dans l'encadré de statut. Annoncer une mesure d'audience inexistante
					serait aussi faux que d'en taire une active.
				*/}
				<p>
					Vous pouvez à tout moment supprimer les cookies déjà déposés depuis les
					réglages de votre navigateur.
				</p>
			</Section>

			<Section id="mineurs" title="10. Mineurs">
				<p>
					Le service s&apos;adresse aux personnes majeures. Un mineur ne peut
					créer un compte qu&apos;avec l&apos;accord de son représentant légal,
					qui peut à tout moment demander la suppression du compte à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.
				</p>
			</Section>

			<Section id="evolution" title="11. Évolution de la politique">
				<p>
					Cette politique peut être modifiée pour tenir compte
					d&apos;évolutions du service ou de la réglementation. La version
					applicable est celle publiée sur cette page. Toute modification
					substantielle est portée à la connaissance des membres par e-mail ou
					par un message sur la plateforme.
				</p>
			</Section>

			<Pending items={[...PENDING.privacy]} />

			<DocFooter current={legalLinks.privacy} updated={LAST_UPDATED} />
		</>
	);
}
