import type { Metadata } from "next";
import { EDITOR, LAST_UPDATED, PENDING } from "@/lib/legal";
import { CONTACT_EMAIL, legalLinks } from "@/lib/links";
import {
	A,
	Article,
	Bullets,
	DocFooter,
	DocTitle,
	Part,
	Prov,
	Table,
	Toc,
} from "../_prose";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Conditions générales d'utilisation — Mada Privilèges",
	description:
		"Droits et obligations des membres et des enseignes, fonctionnement des programmes de fidélité, responsabilité et règlement des litiges.",
	alternates: { canonical: legalLinks.terms },
};

/**
 * Conditions générales d'utilisation — document III.
 *
 * Le document les destine à deux pages : madaprivileges.com/conditions et la
 * plateforme. Le site vitrine en est la source ; l'annexe laisse la plateforme
 * soit les reprendre, soit pointer ici. Cette page publie donc le texte
 * intégral, plutôt que de renvoyer à une version qui n'existe pas encore —
 * la version précédente faisait l'inverse.
 *
 * Les durées apparaissent entre crochets dans le document, faute d'arbitrage.
 * Elles sont rendues via `Prov`, qui les publie en les signalant.
 */
const toc = [
	{
		label: "Dispositions préliminaires",
		items: [
			{ n: 1, title: "Définitions" },
			{ n: 2, title: "Objet et acceptation" },
			{ n: 3, title: "Rôle d'EDS Group" },
		],
	},
	{
		label: "Titre I — Membres",
		items: [
			{ n: 4, title: "Inscription et compte" },
			{ n: 5, title: "Gratuité" },
			{ n: 6, title: "Ajout d'une carte" },
			{ n: 7, title: "Nature et valeur des unités de fidélité" },
			{ n: 8, title: "Validité et expiration" },
			{ n: 9, title: "Obtention de la récompense" },
			{ n: 10, title: "Cartes multi-visites prépayées" },
			{ n: 11, title: "Départ d'une enseigne du réseau" },
			{ n: 12, title: "Réclamations" },
			{ n: 13, title: "Usages interdits" },
			{ n: 14, title: "Clôture du compte par le membre" },
		],
	},
	{
		label: "Titre II — Enseignes",
		items: [
			{ n: 15, title: "Souscription" },
			{ n: 16, title: "Création du programme" },
			{ n: 17, title: "Engagements de l'enseigne" },
			{ n: 18, title: "Modification et fin d'un programme" },
			{ n: 19, title: "Données des membres" },
			{ n: 20, title: "Facturation, durée et résiliation" },
		],
	},
	{
		label: "Titre III — Dispositions communes",
		items: [
			{ n: 21, title: "Disponibilité et évolution du service" },
			{ n: 22, title: "Propriété intellectuelle" },
			{ n: 23, title: "Données personnelles" },
			{ n: 24, title: "Responsabilité" },
			{ n: 25, title: "Suspension et résiliation par EDS Group" },
			{ n: 26, title: "Modification des conditions" },
			{ n: 27, title: "Preuve" },
			{ n: 28, title: "Droit applicable et règlement des litiges" },
		],
	},
];

export default function Page() {
	return (
		<>
			<DocTitle kicker="Document III" title="Conditions générales d'utilisation">
				<p>
					Mada Privilèges est un service exploité par {EDITOR.name}, société de
					droit malgache, dont le siège est situé {EDITOR.address},
					immatriculée sous le RCS {EDITOR.rcs}, NIF {EDITOR.nif}, propriétaire
					de la marque Mada Privilèges.
				</p>
				<p>
					Le service permet à des commerçants, entreprises et prestataires de
					créer et d&apos;animer leur propre programme de fidélité, et à leurs
					clients de rassembler ces programmes dans un portefeuille numérique
					unique, accessible depuis un navigateur.
				</p>
				<p>
					Les présentes conditions régissent l&apos;accès et l&apos;usage de la
					plateforme madaprivileges.mg et du site madaprivileges.com.
				</p>
			</DocTitle>

			<Toc groups={toc} />

			<Article n={1} title="Définitions">
				<Table
					head={["Terme", "Définition"]}
					rows={[
						[
							"Plateforme",
							"Le service accessible à l'adresse madaprivileges.mg, comprenant les comptes membres et les espaces partenaires.",
						],
						[
							"EDS Group",
							"L'éditeur et l'exploitant de la Plateforme, propriétaire de la marque.",
						],
						[
							"Enseigne",
							"Tout commerçant, entreprise, association ou prestataire ayant souscrit au service pour créer un Programme.",
						],
						[
							"Membre",
							"Toute personne physique disposant d'un compte gratuit sur la Plateforme.",
						],
						[
							"Programme",
							"Le dispositif de fidélité créé par une Enseigne, avec sa mécanique, son seuil, sa récompense et sa durée de validité.",
						],
						[
							"Carte",
							"La matérialisation numérique, dans le portefeuille d'un Membre, du Programme d'une Enseigne donnée.",
						],
						[
							"Unité de fidélité",
							"Selon la mécanique retenue, un point, un tampon, une visite ou un droit attaché à une Carte.",
						],
						[
							"Récompense",
							"L'avantage promis par l'Enseigne au Membre qui atteint le seuil défini par son Programme.",
						],
						[
							"Compte",
							"L'espace personnel du Membre ou l'espace de gestion de l'Enseigne.",
						],
					]}
				/>
			</Article>

			<Article n={2} title="Objet et acceptation">
				<p>
					Les présentes conditions définissent les droits et obligations
					d&apos;EDS Group, des Membres et des Enseignes.
				</p>
				<p>
					La création d&apos;un Compte vaut acceptation pleine et entière des
					présentes conditions. Une personne qui ne les accepte pas ne doit pas
					créer de compte ni utiliser le service.
				</p>
				<p>
					Elles se complètent, pour les Enseignes, des conditions particulières
					figurant au contrat de souscription, et de la{" "}
					<A href={legalLinks.privacy}>politique de confidentialité</A>
					accessible depuis le site. En cas de contradiction entre le contrat de
					souscription et les présentes conditions, le contrat prévaut pour ce
					qui concerne la relation entre EDS Group et l&apos;Enseigne.
				</p>
			</Article>

			<Article n={3} title="Rôle d'EDS Group">
				<p>
					EDS Group fournit un outil technique. Elle n&apos;est ni vendeuse, ni
					prestataire des biens et services proposés par les Enseignes.
				</p>
				<p>
					Chaque Programme est défini, paramétré et administré par
					l&apos;Enseigne qui l&apos;émet, sous sa seule responsabilité. La
					Récompense est due par l&apos;Enseigne, pas par EDS Group.
				</p>
				<p>
					EDS Group ne perçoit aucune somme au nom et pour le compte des
					Enseignes. Tout paiement effectué par un Membre l&apos;est directement
					auprès de l&apos;Enseigne.
				</p>
				<p>
					Le service ne constitue ni un moyen de paiement, ni un instrument de
					monnaie électronique, ni un titre de créance.
				</p>
			</Article>

			<Part
				id="titre-1"
				label="Titre I"
				title="Dispositions applicables aux membres"
			/>

			<Article n={4} title="Inscription et compte">
				<p>
					L&apos;inscription est ouverte à toute personne physique majeure. Un
					mineur ne peut s&apos;inscrire qu&apos;avec l&apos;accord de son
					représentant légal, qui peut demander à tout moment la fermeture du
					compte.
				</p>
				<p>
					Le Membre fournit des informations exactes et les tient à jour. Un
					compte par personne. La création de comptes multiples destinée à
					cumuler artificiellement des Unités de fidélité est interdite.
				</p>
				<p>
					Le Membre est responsable de la confidentialité de son mot de passe et
					des actions effectuées depuis son compte. Toute utilisation suspecte
					doit être signalée sans délai à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.
				</p>
			</Article>

			<Article n={5} title="Gratuité">
				<p>
					La création du compte, la détention des Cartes et l&apos;usage du
					portefeuille sont gratuits pour le Membre, sans abonnement ni
					engagement de durée.
				</p>
				<p>
					La gratuité ne s&apos;étend pas aux achats réalisés chez les Enseignes,
					ni aux Cartes multi-visites prépayées, qui sont payées à
					l&apos;Enseigne dans les conditions qu&apos;elle fixe.
				</p>
			</Article>

			<Article n={6} title="Ajout d'une carte">
				<p>
					Le Membre ajoute la Carte d&apos;une Enseigne en scannant le QR code
					présenté par celle-ci. L&apos;ajout est libre et sans engagement.
				</p>
				<p>
					Le Membre peut retirer une Carte de son portefeuille à tout moment. Ce
					retrait entraîne la perte des Unités de fidélité qui y étaient
					attachées, sans contrepartie ni possibilité de restauration.
				</p>
			</Article>

			<Article n={7} title="Nature et valeur des unités de fidélité">
				<p>
					Les Unités de fidélité n&apos;ont aucune valeur monétaire. Elles ne
					sont ni convertibles en argent, ni remboursables, ni cessibles, ni
					transférables entre Membres ou entre Cartes.
				</p>
				<p>
					Les Unités de fidélité acquises sur la Carte d&apos;une Enseigne ne
					sont utilisables que chez cette Enseigne. Il n&apos;existe aucun cumul,
					aucune conversion et aucune mutualisation entre les Programmes de
					différentes Enseignes.
				</p>
				<p>
					Les Unités de fidélité ne constituent pas une créance sur EDS Group.
				</p>
			</Article>

			<Article n={8} title="Validité et expiration">
				<p>
					La durée de validité des Unités de fidélité est fixée par
					l&apos;Enseigne et affichée sur la Carte. À défaut d&apos;indication de
					sa part, elle est de <Prov>12 mois</Prov> à compter de la dernière
					opération enregistrée sur la Carte.
				</p>
				<p>
					Les Unités de fidélité expirées sont retirées automatiquement, sans
					notification individuelle préalable autre que l&apos;affichage de
					l&apos;échéance sur la Carte.
				</p>
				<p>
					Un compte resté sans connexion pendant <Prov>24 mois</Prov> peut être
					clôturé après information du Membre par e-mail et un délai de trente
					jours pour le réactiver.
				</p>
			</Article>

			<Article n={9} title="Obtention de la récompense">
				<p>
					La Récompense est délivrée par l&apos;Enseigne, dans son
					établissement, dans les conditions et sur la période qu&apos;elle a
					définies.
				</p>
				<p>
					L&apos;Enseigne peut subordonner la remise de la Récompense à des
					conditions raisonnables, à condition qu&apos;elles aient été portées à
					la connaissance du Membre sur la Carte avant l&apos;acquisition des
					Unités de fidélité. Aucune condition ne peut être ajoutée après coup au
					détriment d&apos;un Membre ayant déjà atteint le seuil.
				</p>
			</Article>

			<Article n={10} title="Cartes multi-visites prépayées">
				<p>
					Lorsqu&apos;une Enseigne propose une Carte multi-visites prépayée, le
					Membre règle par avance un ensemble de prestations à l&apos;Enseigne,
					selon les modalités et le tarif que celle-ci définit.
				</p>
				<p>
					La Plateforme enregistre la consommation des prestations et affiche le
					solde restant. Elle n&apos;intervient ni dans l&apos;encaissement, ni
					dans la facturation, ni dans le remboursement.
				</p>
				<p>
					La prestation est due par l&apos;Enseigne. Les conditions de validité,
					d&apos;annulation et de remboursement sont celles de l&apos;Enseigne et
					de la réglementation applicable. En cas de défaillance de
					l&apos;Enseigne, EDS Group ne peut se substituer à elle pour délivrer
					la prestation ou rembourser les sommes versées.
				</p>
			</Article>

			<Article n={11} title="Départ d'une enseigne du réseau">
				<p>
					Une Enseigne qui cesse sa souscription doit en informer ses Membres par
					l&apos;intermédiaire de la Plateforme, avec un préavis de{" "}
					<Prov>30 jours</Prov> pendant lequel les Récompenses déjà acquises
					restent exigibles. EDS Group relaie cette information dans le
					portefeuille des Membres concernés.
				</p>
				<p>
					À l&apos;issue de ce préavis, la Carte devient inactive et les Unités
					de fidélité non converties sont perdues.
				</p>
				<p>
					En cas de cessation d&apos;activité brutale, de liquidation ou de
					disparition d&apos;une Enseigne, EDS Group informe les Membres dès
					qu&apos;elle en a connaissance mais ne peut garantir la délivrance des
					Récompenses ni le remboursement des prestations prépayées.
				</p>
			</Article>

			<Article n={12} title="Réclamations">
				<p>
					Un Membre qui estime qu&apos;une Enseigne n&apos;a pas honoré son
					Programme adresse sa réclamation à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A> dans un délai
					de <Prov>30 jours</Prov> à compter du fait contesté.
				</p>
				<p>
					EDS Group interroge l&apos;Enseigne, communique aux deux parties
					l&apos;historique enregistré sur la Plateforme et facilite une
					résolution amiable. Elle n&apos;a ni le pouvoir ni l&apos;obligation
					d&apos;imposer une solution.
				</p>
				<p>
					Le manquement répété d&apos;une Enseigne à ses engagements constitue un
					motif de suspension au titre de l&apos;article 25.
				</p>
			</Article>

			<Article n={13} title="Usages interdits">
				<p>
					Sont notamment interdits, et exposent à la suspension immédiate du
					compte :
				</p>
				<Bullets
					items={[
						"la création de plusieurs comptes par une même personne ;",
						"l'enregistrement d'Unités de fidélité sans achat ou prestation réelle, y compris avec la complicité d'un employé de l'Enseigne ;",
						"la vente, l'échange ou la cession de Cartes, d'Unités de fidélité ou de Récompenses ;",
						"l'usurpation d'identité et l'usage du compte d'un tiers ;",
						"toute tentative d'accès non autorisé, d'extraction massive de données ou de perturbation du service ;",
						"l'usage du service à des fins contraires à la loi ou aux bonnes mœurs.",
					]}
				/>
			</Article>

			<Article n={14} title="Clôture du compte par le membre">
				<p>
					Le Membre peut fermer son compte à tout moment depuis son espace ou par
					simple demande à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>.
				</p>
				<p>
					La fermeture entraîne la perte définitive de toutes les Unités de
					fidélité détenues, sans indemnité. Les prestations prépayées non
					consommées restent régies par les conditions de l&apos;Enseigne
					concernée.
				</p>
			</Article>

			<Part
				id="titre-2"
				label="Titre II"
				title="Dispositions applicables aux enseignes"
			/>

			<Article n={15} title="Souscription">
				<p>
					L&apos;accès à l&apos;espace partenaire suppose la souscription
					d&apos;une formule d&apos;abonnement, dont le contenu, le tarif et la
					durée figurent au contrat de souscription.
				</p>
				<p>
					L&apos;Enseigne garantit qu&apos;elle exerce une activité déclarée et
					qu&apos;elle dispose du pouvoir d&apos;engager la personne morale
					qu&apos;elle représente.
				</p>
			</Article>

			<Article n={16} title="Création du programme">
				<p>
					L&apos;Enseigne crée son Programme en autonomie depuis son espace. Elle
					choisit la mécanique, le seuil, la Récompense, la durée de validité et
					le périmètre des points de vente concernés.
				</p>
				<p>
					Elle est seule responsable du contenu de son Programme, de la licéité
					de l&apos;avantage promis, de sa conformité à la réglementation
					applicable à son secteur et de sa cohérence avec ses obligations
					fiscales.
				</p>
			</Article>

			<Article n={17} title="Engagements de l'enseigne">
				<p>L&apos;Enseigne s&apos;engage à :</p>
				<Bullets
					items={[
						"honorer les Récompenses acquises par les Membres, dans les conditions annoncées ;",
						"décrire son Programme de façon claire, exacte et non trompeuse ;",
						"afficher son QR code de manière visible au point de vente et former son personnel à son usage ;",
						"enregistrer les opérations de fidélité de façon sincère, sans crédit fictif ni refus injustifié ;",
						<>
							répondre aux réclamations transmises par EDS Group dans un délai de{" "}
							<Prov>15 jours</Prov> ;
						</>,
						"informer EDS Group de tout changement affectant ses coordonnées, ses points de vente ou son activité.",
					]}
				/>
			</Article>

			<Article n={18} title="Modification et fin d'un programme">
				<p>
					L&apos;Enseigne peut modifier son Programme à tout moment. La
					modification ne produit effet que pour l&apos;avenir. Les Membres ayant
					déjà atteint le seuil conservent leur droit à la Récompense dans les
					conditions antérieures.
				</p>
				<p>
					Une modification défavorable, notamment le relèvement d&apos;un seuil
					ou la réduction d&apos;une Récompense, est portée à la connaissance des
					Membres détenteurs de la Carte avec un préavis de{" "}
					<Prov>30 jours</Prov>.
				</p>
				<p>L&apos;arrêt d&apos;un Programme suit la procédure de l&apos;article 11.</p>
			</Article>

			<Article n={19} title="Données des membres">
				<p>
					Les données des Membres sont traitées par EDS Group en qualité de
					responsable de traitement, dans les conditions de la{" "}
					<A href={legalLinks.privacy}>politique de confidentialité</A>.
				</p>
				<p>
					L&apos;Enseigne accède uniquement aux données relatives à son propre
					Programme. Elle n&apos;a accès ni aux autres Cartes du portefeuille du
					Membre, ni à ses opérations chez d&apos;autres Enseignes.
				</p>
				<p>
					L&apos;Enseigne s&apos;interdit d&apos;extraire, de conserver hors de
					la Plateforme, de céder ou d&apos;exploiter à d&apos;autres fins les
					données auxquelles elle accède, notamment à des fins de démarchage sans
					consentement. Tout manquement constitue une faute grave justifiant la
					résiliation immédiate.
				</p>
			</Article>

			<Article n={20} title="Facturation, durée et résiliation">
				<p>
					L&apos;abonnement est facturé selon la périodicité prévue au contrat.
					Les tarifs s&apos;entendent hors taxes.
				</p>
				<p>
					Le contrat est conclu pour une durée de <Prov>12 mois</Prov>,
					reconduite tacitement pour la même durée sauf dénonciation par
					l&apos;une des parties avec un préavis de <Prov>60 jours</Prov> avant
					l&apos;échéance.
				</p>
				<p>
					À défaut de paiement dans un délai de <Prov>15 jours</Prov> après
					relance, EDS Group peut suspendre l&apos;espace partenaire. La
					suspension rend le Programme invisible aux nouveaux Membres. Les
					Récompenses déjà acquises restent dues par l&apos;Enseigne à ses
					clients.
				</p>
				<p>
					La résiliation, quelle qu&apos;en soit la cause, n&apos;ouvre droit à
					aucun remboursement des sommes déjà versées au titre de la période en
					cours.
				</p>
			</Article>

			<Part id="titre-3" label="Titre III" title="Dispositions communes" />

			<Article n={21} title="Disponibilité et évolution du service">
				<p>
					EDS Group met en œuvre les moyens raisonnables pour assurer la
					disponibilité de la Plateforme, sans garantie d&apos;un accès
					ininterrompu.
				</p>
				<p>
					Le service peut être suspendu pour maintenance, mise à jour, incident
					de sécurité ou cause extérieure, notamment une interruption de la
					connectivité ou de l&apos;alimentation électrique. Les interruptions
					programmées sont annoncées lorsque cela est possible.
				</p>
				<p>
					EDS Group peut faire évoluer les fonctionnalités de la Plateforme. Une
					évolution qui supprimerait une mécanique de Programme existante est
					annoncée aux Enseignes concernées avec un préavis de{" "}
					<Prov>60 jours</Prov>.
				</p>
			</Article>

			<Article n={22} title="Propriété intellectuelle">
				<p>
					La Plateforme, sa structure, son code, ses interfaces, ses textes et
					ses éléments graphiques sont la propriété d&apos;EDS Group et ne
					peuvent être reproduits ni exploités sans autorisation écrite.
				</p>
				<p>
					L&apos;Enseigne conserve la propriété de sa marque et de son logo, et
					autorise EDS Group à les afficher sur la Plateforme, dans le catalogue
					des Enseignes et dans les supports de communication du réseau, pendant
					la durée de la souscription.
				</p>
			</Article>

			<Article n={23} title="Données personnelles">
				<p>
					Le traitement des données est décrit dans la{" "}
					<A href={legalLinks.privacy}>politique de confidentialité</A>,
					accessible à l&apos;adresse madaprivileges.com/confidentialite. Elle
					fait partie intégrante des présentes conditions.
				</p>
			</Article>

			<Article n={24} title="Responsabilité">
				<p>
					EDS Group répond des dysfonctionnements de la Plateforme qui lui sont
					imputables. Elle ne répond ni de la qualité des biens et services
					vendus par les Enseignes, ni de la délivrance des Récompenses, ni des
					sommes versées directement aux Enseignes.
				</p>
				<p>
					La responsabilité d&apos;EDS Group ne peut être engagée pour la perte
					d&apos;Unités de fidélité résultant du retrait volontaire d&apos;une
					Carte, de l&apos;expiration prévue à l&apos;article 8, de la clôture
					d&apos;un compte à la demande de son titulaire, ou du départ d&apos;une
					Enseigne.
				</p>
				<p>
					À l&apos;égard d&apos;une Enseigne, la réparation due par EDS Group ne
					peut excéder le montant des sommes versées par cette Enseigne au titre
					des <Prov>12 derniers mois</Prov>.
				</p>
				<p>
					Aucune limitation ne s&apos;applique en cas de faute lourde ou de dol.
				</p>
			</Article>

			<Article n={25} title="Suspension et résiliation par EDS Group">
				<p>
					EDS Group peut suspendre ou fermer un Compte, après mise en demeure
					restée sans effet sauf urgence ou gravité, en cas de manquement aux
					présentes conditions, notamment de fraude, d&apos;usage abusif, de
					refus répété d&apos;honorer les Récompenses ou d&apos;atteinte à la
					sécurité de la Plateforme.
				</p>
				<p>
					En cas de fraude avérée, la suspension est immédiate et les Unités de
					fidélité frauduleusement acquises sont annulées.
				</p>
			</Article>

			<Article n={26} title="Modification des conditions">
				<p>
					EDS Group peut modifier les présentes conditions. Toute modification
					substantielle est notifiée aux Membres et aux Enseignes par e-mail ou
					par un message sur la Plateforme, au moins <Prov>30 jours</Prov> avant
					son entrée en vigueur.
				</p>
				<p>
					La poursuite de l&apos;usage du service après cette date vaut
					acceptation. Le Membre ou l&apos;Enseigne qui refuse peut fermer son
					compte dans les conditions prévues aux articles 14 et 20.
				</p>
			</Article>

			<Article n={27} title="Preuve">
				<p>
					Les enregistrements conservés dans les systèmes d&apos;EDS Group,
					notamment les journaux de connexion et l&apos;historique des opérations
					de fidélité, sont admis comme mode de preuve entre les parties,
					jusqu&apos;à preuve contraire.
				</p>
			</Article>

			<Article n={28} title="Droit applicable et règlement des litiges">
				<p>Les présentes conditions sont régies par le droit malgache.</p>
				<p>
					Tout litige fait l&apos;objet d&apos;une tentative de règlement amiable
					préalable, par écrit à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>. À défaut
					d&apos;accord dans un délai de trente jours, compétence est attribuée
					aux tribunaux d&apos;{EDITOR.city}.
				</p>
				<p>
					Si une clause des présentes conditions était déclarée nulle, les autres
					resteraient applicables.
				</p>
			</Article>

			<Pending items={[...PENDING.terms]} />

			<DocFooter current={legalLinks.terms} updated={LAST_UPDATED} />
		</>
	);
}
