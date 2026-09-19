# Déploiement sur cPanel mutualisé

Le site est livré en **fichiers statiques**. `next build` produit un dossier
`out/` — du HTML, du CSS, du JavaScript et les images — dont le contenu est
déposé tel quel dans `public_html`. Aucun serveur Node ne tourne.

Ce choix est imposé par l'hébergement : cPanel n'expose pas **Setup Node.js
App**, l'outil qui ferait tourner une application Node en continu. Il n'est pas
activable depuis le compte cPanel — c'est un composant installé au niveau du
serveur, hors de portée sans accès WHM.

L'envoi du formulaire de contact, qui réclamait un serveur, passe donc par
[`public/contact.php`](../public/contact.php), exécuté par Apache à côté des
pages. Le visiteur ne voit aucune différence.

## 1. Construire

En local :

```bash
npm install
npm run build
```

Le dossier `out/` apparaît à la racine du projet. Il contient déjà
`contact.php` : tout ce qui se trouve dans `public/` est recopié à la racine de
l'export.

Vérifier avant d'envoyer que `out/` contient bien `index.html`,
`mentions-legales/index.html` et `contact.php`.

## 2. Envoyer sur le serveur

On dépose **le contenu de `out/`**, pas le dossier lui-même. À l'arrivée,
`public_html/index.html` doit exister — pas `public_html/out/index.html`.

Le plus rapide passe par le **Gestionnaire de fichiers** de cPanel :

1. En local, compresser le *contenu* de `out/` en une archive `.zip` — se
   placer dans `out/`, tout sélectionner, puis compresser.
2. Dans cPanel, ouvrir **File Manager** → `public_html`.
3. **Upload** l'archive, puis, de retour dans `public_html`, la sélectionner et
   cliquer **Extract**.
4. Supprimer l'archive une fois l'extraction faite.

Envoyer les fichiers un par un en FTP fonctionne aussi, mais `out/` en contient
plusieurs centaines : comptez un temps considérable.

**Ne pas oublier le `.htaccess`.** Il commence par un point : l'Explorateur
Windows le masque par défaut, et une archive faite par sélection à la souris
l'oublierait. Il porte le type de l'image de partage et la page d'erreur du
site — sans lui, les aperçus de partage sur Facebook ou WhatsApp resteront
vides. Activer **Affichage → Éléments masqués** avant de compresser, et
vérifier après extraction qu'il figure bien dans `public_html` — le
Gestionnaire de fichiers le montre via **Settings → Show Hidden Files**.

**Faire le ménage d'abord.** Si `public_html` contient déjà un site — une page
d'attente de l'hébergeur, une installation WordPress, un `index.php` — il
prendra le dessus sur le nouveau `index.html`. Apache sert `index.php` avant
`index.html`. Vider le dossier, ou déplacer l'ancien contenu de côté.

## 3. Régler l'envoi des mails

Le script n'a **aucune variable d'environnement** à configurer : il utilise la
fonction `mail()` de PHP, que cPanel relaie par le serveur de messagerie du
domaine. Deux choses à vérifier malgré tout.

**La boîte de destination doit exister.** Dans **Email Accounts**, créer
`contact@madaprivileges.com` si ce n'est pas déjà fait. L'adresse est codée en
dur en tête de [`contact.php`](../public/contact.php), et doit rester alignée
sur `CONTACT_EMAIL` dans [`lib/links.ts`](../lib/links.ts). Elle n'est jamais
lue depuis le formulaire : une adresse fournie par le visiteur ferait du script
un relais d'envoi ouvert.

**Le domaine doit s'autoriser lui-même.** Dans **Email Deliverability**, cPanel
signale si les enregistrements SPF et DKIM de `madaprivileges.com` sont en
place. S'ils manquent, le bouton « Install the suggested record » les pose.
Sans eux, les messages du formulaire partiront en indésirables.

Pour changer l'adresse de destination plus tard, éditer `CONTACT_EMAIL` dans
`public/contact.php`, puis reconstruire et redéployer — ou modifier directement
le `contact.php` sur le serveur, en reportant la correction dans le dépôt.

## 4. Vérifier

Dans l'ordre, une fois le site en ligne :

1. La page d'accueil s'affiche, avec ses animations et ses photos.
2. Les trois pages légales répondent : `/mentions-legales/`, `/confidentialite/`
   et `/conditions/`. **Avec la barre finale** — voir plus bas.
3. `/opengraph-image` renvoie une image 1200 × 630 — le navigateur doit
   l'afficher, pas proposer de la télécharger. S'il la télécharge, le
   `.htaccess` n'est pas arrivé (voir l'étape 2).
4. `/contact.php` ouvert directement dans le navigateur renvoie
   `{"status":"error","message":"Méthode non autorisée."}`. C'est le bon
   résultat : le script refuse tout ce qui n'est pas un POST. **Si le
   navigateur affiche du code PHP**, c'est que l'hébergement ne l'exécute pas —
   dans ce cas le formulaire ne pourra pas envoyer, et il faut en parler à
   l'hébergeur.
5. Envoyer une vraie demande depuis le formulaire. Le message doit arriver dans
   la boîte de contact, et l'accusé de réception chez l'expéditeur.

En cas d'erreur 500 sur `contact.php`, les journaux PHP se trouvent dans
**Errors** ou dans un fichier `error_log` déposé à côté du script.

## 5. Mettre à jour le site

Une fois le déploiement automatique en place (étape 6), il n'y a plus rien à
faire : pousser sur `main` suffit. GitHub construit le site et le dépose.

La procédure manuelle des étapes 1 et 2 reste valable, et sert de secours le
jour où GitHub Actions est indisponible ou le mot de passe FTP périmé.

## 6. Automatiser le déploiement

[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) construit le
site à chaque poussée sur `main` et téléverse `out/` en FTPS vers
`public_html`.

La construction se fait chez GitHub, pas sur l'hébergement : `npm run build`
réclame Node, dont le serveur ne dispose pas. C'est aussi pourquoi l'outil
**Git Version Control** de cPanel ne convient pas — il sait cloner un dépôt,
pas le construire.

### Créer le compte FTP de déploiement

Un compte dédié, cantonné à `public_html`. Si son mot de passe fuite, il ne
donne accès qu'au site — ni aux mails, ni aux sauvegardes, ni au reste du
compte.

Dans cPanel → **FTP Accounts** :

- **Log in** : `deploy`
- **Domain** : `madaprivileges.com`
- **Password** : généré, et copié de côté
- **Directory** : `public_html` — **à corriger**, cPanel propose par défaut
  `public_html/deploy`, qui créerait un sous-dossier et déploierait le site
  dedans
- **Quota** : Unlimited

Noter l'identifiant complet affiché ensuite : il s'écrit
`deploy@madaprivileges.com`.

### Déclarer les secrets sur GitHub

Dépôt → **Settings** → **Secrets and variables** → **Actions** → **New
repository secret**, trois fois :

| Nom | Valeur |
| --- | --- |
| `FTP_SERVER` | `madaprivileges.com` |
| `FTP_USERNAME` | `deploy@madaprivileges.com` |
| `FTP_PASSWORD` | le mot de passe du compte FTP |

Ces valeurs ne sont jamais réaffichées, et n'apparaissent pas dans les
journaux d'exécution. Elles ne doivent pas être écrites dans le dépôt.

### Premier déploiement

Pousser le workflow déclenche la première exécution. La suivre dans l'onglet
**Actions** du dépôt.

Ce premier passage est le seul à surveiller : l'action dépose un fichier
`.deploiement-precedent.json` sur le serveur, où elle note ce qu'elle a
envoyé. Les fois suivantes, elle le relit et ne transfère que ce qui a changé —
quelques fichiers au lieu d'une centaine.

**À vérifier juste après**, dans le Gestionnaire de fichiers, avec
**Show Hidden Files** activé : `php.ini` et `.user.ini` doivent toujours être
là. Ils vivent dans `public_html` sans venir du dépôt, et le workflow les
exclut précisément pour qu'ils ne soient pas pris pour des fichiers en trop.
Si l'un manque, le remettre et signaler l'écart avant le déploiement suivant.

### Si le transfert échoue

- **Certificat TLS refusé** — beaucoup de mutualisés servent un certificat
  auto-signé sur le port FTP. Ajouter `security: loose` sous `protocol: ftps`
  dans le workflow. Le transfert reste chiffré ; seule la vérification du
  certificat est levée.
- **Connexion refusée** — vérifier dans cPanel que le FTP est activé, et
  essayer le nom d'hôte du serveur plutôt que le domaine comme `FTP_SERVER`.
- **Le site se retrouve à côté de `mail` et `logs`** — les identifiants
  utilisés sont ceux du compte cPanel principal, dont la racine est
  `/home/madapri1`. Reprendre avec le compte `deploy`.

## Points de vigilance

**Les URL portent une barre finale.** `next.config.ts` pose
`trailingSlash: true`, ce qui produit `mentions-legales/index.html` plutôt que
`mentions-legales.html`. Apache sait servir le premier sans configuration
particulière ; le second exigerait une réécriture dans un `.htaccess`, qu'une
manipulation dans le Gestionnaire de fichiers pourrait écraser. Les liens du
site sont cohérents avec ce réglage, mais un lien externe vers
`/mentions-legales` sans barre finale vaut la peine d'être vérifié.

**Les images ne sont plus optimisées.** L'optimiseur de `next/image` est un
service serveur : il est désactivé (`images.unoptimized`). Les photos de
`public/sectors/` sont servies à leur poids réel, à leur taille réelle. Les
déposer déjà redimensionnées et compressées — sinon un visiteur en données
mobiles téléchargera le fichier d'origine.

**La limite d'envoi est indicative.** Le compteur des cinq demandes par heure
et par adresse IP s'appuie sur des fichiers dans le dossier temporaire du
serveur, que l'hébergeur purge quand il veut. Il freine un envoi répété depuis
un navigateur ; il ne constitue pas une protection globale.

**PHP doit disposer de `mbstring`.** Le script s'en sert pour couper les champs
et encoder les accents des en-têtes. L'extension est activée par défaut sur la
quasi-totalité des cPanel ; en cas de doute, **Select PHP Version** →
**Extensions** permet de le confirmer.

**Le formulaire ne fonctionne pas en local.** `next dev` sert `contact.php`
comme un fichier ordinaire, sans l'exécuter : l'envoi échoue et le formulaire
bascule sur son repli « Ouvrir dans votre messagerie ». C'est le comportement
attendu hors production — le script ne se teste qu'une fois en ligne.

## Si Node.js devient disponible un jour

Si l'hébergeur active **Setup Node.js App**, ou en cas de passage sur un VPS,
le site peut revenir à un vrai serveur : cela rendrait l'optimisation des
images et permettrait de remettre l'envoi en Server Function. Il faudrait alors
retirer `output: "export"` de `next.config.ts`, réécrire `contact.php` en
action serveur, et ajouter un fichier de démarrage pour Passenger. Rien ne
presse : en l'état, le site fonctionne entièrement.
