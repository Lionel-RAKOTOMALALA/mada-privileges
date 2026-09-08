# Mada Privilèges — contexte produit

Référence : « Cahier de contenu du site vitrine », version 1.1 du 7 septembre 2026.
Ce fichier en est le résumé de travail ; en cas de divergence, le cahier fait foi.

## Deux domaines, deux produits

| Domaine | Rôle |
| --- | --- |
| **madaprivileges.com** | Site vitrine — ce dépôt. Présente le programme, oriente vers la plateforme, recueille les demandes de contact. |
| **madaprivileges.mg** | Plateforme applicative, déjà en production. Comptes membres, portefeuille de cartes, espaces partenaires. Hors périmètre. |

**Aucune redirection entre les deux.** Les liens sortants pointent vers le .mg
et ne sont jamais réécrits en .com — ils sont centralisés dans
[`lib/links.ts`](../lib/links.ts).

## Ce que fait réellement la plateforme

Mada Privilèges est un **portefeuille de cartes de fidélité numériques**.
Chaque enseigne partenaire crée et pilote **son propre programme**. Le membre
collecte les cartes des commerçants qu'il fréquente **en scannant leur QR
code**, et chaque carte progresse indépendamment.

> **Il n'existe aucun cumul de points entre enseignes.** Les points gagnés au
> restaurant ne s'échangent pas chez le coiffeur. La valeur du réseau tient à
> la simplicité — un compte, un portefeuille, toutes les cartes — non à la
> fongibilité des points. C'est la question la plus posée, traitée
> explicitement dans la FAQ.

Quatre formats de cartes : carte de fidélité (points), carte à tampons, bon,
carte multi-visites prépayée.

Le compte est gratuit et sans engagement pour les membres ; ce sont les
enseignes qui souscrivent. **Aucune application à installer** : la plateforme
fonctionne dans le navigateur, et les cartes restent consultables hors
connexion.

## Trois règles de rédaction

1. Le site ne décrit **aucune fonctionnalité absente** de la plateforme. En cas
   de doute, vérifier le comportement réel sur madaprivileges.mg.
2. Chaque appel à l'action mène à une **URL réelle de la plateforme**, jamais à
   une ancre interne.
3. La marque s'écrit **« Mada Privilèges »**, accent grave compris, partout —
   titres, balise `<title>`, pied de page, adresses e-mail.

## Ce qui a été retiré de la maquette

Cumul de points inter-enseignes · inscription par SMS/USSD · mention d'une
application mobile · géolocalisation des offres · bloc de chiffres « 01 / 07 /
2027 » · calendrier de déploiement par ville · liens réseaux sociaux vers
« # » · rubrique diaspora.

## Objectifs du site

Trois fonctions d'égale importance : présenter le programme et asseoir sa
crédibilité, faire s'inscrire de nouveaux membres, recruter des enseignes
partenaires. La rubrique « Pour les enseignes » est la rubrique commerciale
principale.

Porté par **EDS Group**, cabinet de conseil et d'ingénierie numérique établi à
Antananarivo.

## Reste à fournir par EDS

Adresse postale du bureau · numéros de téléphone valides · boîte
contact@madaprivileges.com et enregistrements SPF/DKIM · photos et logos
partenaires · informations juridiques des pages légales · décision sur les
comptes de réseaux sociaux.
