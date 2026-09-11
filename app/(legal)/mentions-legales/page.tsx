import type { Metadata } from "next";
import {
	AUTHORITY,
	EDITOR,
	HOST,
	LAST_UPDATED,
	PENDING,
	PHONE,
	PRIVACY_EMAIL,
	REFERENCE_LAWS,
} from "@/lib/legal";
import { CONTACT_EMAIL, legalLinks } from "@/lib/links";
import { A, Bullets, DocFooter, DocTitle, Section, Table } from "../_prose";
import { Pending } from "../_pending";

export const metadata: Metadata = {
	title: "Mentions légales — Mada Privilèges",
	description:
		"Éditeur, hébergement, propriété intellectuelle et responsabilité éditoriale du site madaprivileges.com, édité par EDS Group à Antananarivo.",
	alternates: { canonical: legalLinks.mentions },
};

/**
 * Mentions légales — document I de la documentation juridique EDS Group.
 *
 * Le document désigne la page « madaprivileges.com/mentions-légales » en
 * en-tête et « /mentions-legales » dans son sommaire. C'est la seconde forme
 * qui est servie : une URL accentuée s'encode en %C3%A9 et se partage mal.
 */
export default function Page() {
	return (
		<>
			<DocTitle kicker="Document I" title="Mentions légales">
				<p>
					Le site madaprivileges.com est édité par {EDITOR.name},{" "}
					{EDITOR.quality}.
				</p>
			</DocTitle>

			<Section id="editeur" title="Éditeur du site">
				<Table
					head={["Élément", "Information"]}
					rows={[
						["Forme juridique", <em key="forme">À compléter</em>],
						["Capital social", <em key="capital">À compléter</em>],
						["Siège social", EDITOR.address],
						["RCS", EDITOR.rcs],
						["NIF", EDITOR.nif],
						["Numéro statistique", EDITOR.stat],
						["Téléphone", PHONE.display],
						[
							"Courriel",
							<A href={`mailto:${CONTACT_EMAIL}`} key="mail">
								{CONTACT_EMAIL}
							</A>,
						],
						["Directeur de la publication", EDITOR.publicationDirector],
					]}
				/>
			</Section>

			<Section id="hebergement" title="Hébergement">
				<p>
					Le site vitrine madaprivileges.com est hébergé par {HOST.name},{" "}
					{HOST.address}.
				</p>
				<p>
					La plateforme madaprivileges.mg est hébergée par {HOST.name},{" "}
					{HOST.address}.
				</p>
			</Section>

			<Section id="propriete" title="Marque et propriété intellectuelle">
				<p>
					Mada Privilèges est une marque détenue et exploitée par EDS Group.
					L&apos;ensemble des éléments composant le site, notamment la
					structure, les textes, les visuels, les logos, les icônes, les bases
					de données et le code source, est protégé par le droit de la propriété
					intellectuelle et demeure la propriété exclusive d&apos;EDS Group ou de
					ses partenaires.
				</p>
				<p>
					Toute reproduction, représentation, adaptation ou exploitation, totale
					ou partielle, par quelque procédé que ce soit et sur quelque support
					que ce soit, est interdite sans autorisation écrite préalable
					d&apos;EDS Group.
				</p>
				<p>
					Les dénominations, marques et logos des enseignes partenaires affichés
					sur le site ou sur la plateforme demeurent la propriété de leurs
					titulaires respectifs et sont utilisés dans le cadre du service avec
					leur accord.
				</p>
			</Section>

			<Section id="objet" title="Objet du site et lien avec la plateforme">
				<p>
					Le site madaprivileges.com présente le service Mada Privilèges. Il ne
					permet ni la création de compte, ni la gestion des cartes de fidélité.
				</p>
				<p>
					La création de compte membre, la gestion du portefeuille de cartes et
					les espaces partenaires sont accessibles sur la plateforme
					madaprivileges.mg, régie par ses propres{" "}
					<A href={legalLinks.terms}>conditions générales d&apos;utilisation</A>.
				</p>
			</Section>

			<Section id="responsabilite" title="Nature du service et responsabilité">
				<p>
					Mada Privilèges est un outil technique qui permet aux enseignes
					partenaires de créer et d&apos;animer leur propre programme de
					fidélité, et aux membres de rassembler ces programmes dans un
					portefeuille numérique unique.
				</p>
				<p>
					Chaque programme, avec ses règles, ses seuils, ses récompenses et sa
					durée de validité, est défini et administré par l&apos;enseigne qui
					l&apos;émet. La relation commerciale se noue entre le membre et
					l&apos;enseigne. EDS Group n&apos;est pas partie au contrat de vente ou
					de prestation conclu entre eux, et n&apos;est pas tenue de la
					délivrance des récompenses promises par une enseigne.
				</p>
				<p>
					EDS Group met en œuvre les moyens raisonnables pour assurer
					l&apos;exactitude des informations publiées et la disponibilité du
					service, sans pouvoir garantir l&apos;absence totale d&apos;erreur ni
					une accessibilité ininterrompue. Le service peut être suspendu pour
					maintenance, mise à jour ou raison de sécurité.
				</p>
				<p>
					Le site peut contenir des liens vers des sites tiers. EDS Group
					n&apos;exerce aucun contrôle sur leur contenu et décline toute
					responsabilité à leur égard.
				</p>
			</Section>

			<Section id="donnees" title="Données personnelles">
				<p>
					Le traitement des données personnelles est décrit dans la{" "}
					<A href={legalLinks.privacy}>politique de confidentialité</A>,
					accessible à l&apos;adresse madaprivileges.com/confidentialite.
				</p>
				<p>
					Pour toute demande relative à vos données, écrivez à{" "}
					<A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A>.
				</p>
			</Section>

			<Section id="signalement" title="Signalement">
				<p>
					Tout contenu susceptible d&apos;être illicite, toute enseigne qui
					n&apos;honorerait pas son programme et tout dysfonctionnement peuvent
					être signalés à{" "}
					<A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A> ou aux numéros
					indiqués ci-dessus.
				</p>
			</Section>

			<Section id="droit-applicable" title="Droit applicable">
				<p>
					Les présentes mentions légales sont régies par le droit malgache. En
					cas de litige, et à défaut de résolution amiable, compétence est
					attribuée aux tribunaux d&apos;{EDITOR.city}.
				</p>
				<p>Textes de référence :</p>
				<Bullets items={REFERENCE_LAWS.map((law) => law)} />
				<p>
					Le traitement des données relève du contrôle de la {AUTHORITY.name} (
					{AUTHORITY.short}).
				</p>
			</Section>

			<Pending items={[...PENDING.legal]} />

			<DocFooter current={legalLinks.mentions} updated={LAST_UPDATED} />
		</>
	);
}
