# Charte graphique — Mada Privilèges

Référence commune au site vitrine et à la plateforme. Source : `Charte ok MP vect.pdf`.
Les tracés et les tons ci-dessous ont été **extraits du PDF vectoriel**, pas redessinés.

---

## 1. Logotype

Le bloc-marque est un seul tracé vectoriel : icône + baseline solidaires.
Ne jamais recomposer une icône suivie d'un texte — les rapports d'alignement
imposés par la charte ne survivent pas à un rendu texte (police, interlettrage
et métriques varient d'un support à l'autre).

### Les deux versions

| Version | Règle de la charte | Ratio du fichier |
| --- | --- | --- |
| **Verticale** | baseline justifiée sur l'icône, calée sur sa base | 185,58 × 125,03 |
| **Horizontale** | baseline calée sur la base du « M », large d'un « M » et demi | 357,40 × 101,29 |

Repère commun : **la hauteur de l'icône vaut 100 unités**. Le « M » de l'icône
mesure 140,55 × 100 unités. Mesures vérifiées sur le fichier : la baseline
horizontale fait 1,495 × la largeur du « M ».

### Couleur

- L'icône est **toujours monochrome** — jamais deux couleurs (cf. « Les interdits »).
- « **MADA** » est **toujours dans le ton de l'icône**.
- Seul « **PRIVILÈGES** » peut changer de ton, noir et blanc compris.
- Les tons doivent rester dans la gamme du § 2.

### Zone de protection

Laisser l'équivalent d'un « M » de l'icône sur les quatre côtés (soit 1,4055 ×
la hauteur de l'icône horizontalement, 1 × verticalement). S'applique aux pages
et aux visuels ; une barre de navigation peut être plus serrée.

### Interdits

Déformer le bloc, dissocier icône et baseline, mettre l'icône en deux couleurs,
poser le logo sur un fond qui ne le détache pas.

> Le PNG historique `public/logo-mp.png` était **comprimé horizontalement**
> (ratio d'encre 1,563 au lieu de 1,856) : une déformation, donc un interdit.
> Il n'est plus référencé — les fichiers de `public/brand/` le remplacent.

---

## 2. Gamme de tons

Relevés en quadri dans la charte et convertis en sRGB. Le bleu est celui du
fichier logo d'origine, mesuré au pixel.

| Nom | Hex | CMJN | Token |
| --- | --- | --- | --- |
| Bleu MP | `#083342` | 96 / 75 / 49 / 48 | `--brand-navy` |
| Or | `#c3a546` | 22 / 34 / 98 / 1 | `--brand-or` |
| Ocre | `#ae8e58` | 29 / 43 / 79 / 6 | `--brand-ocre` |
| Bordeaux | `#802e32` | 28 / 96 / 82 / 28 | `--brand-bordeaux` |
| Écru | `#e9e0cc` | 7 / 10 / 20 / 0 | `--brand-ecru` |
| Taupe | `#9d8d7b` | 37 / 42 / 52 / 5 | `--brand-taupe` |
| Ardoise | `#3d4948` | 68 / 59 / 57 / 41 | `--brand-ardoise` |
| Encre | `#1b231e` | 70 / 68 / 64 / 74 | `--brand-encre` |

Contrastes utiles (WCAG) :

| Ton | sur fond sombre | sur fond clair |
| --- | --- | --- |
| Bleu MP | **1,13:1** ❌ | 13,44:1 ✅ |
| Or | 6,34:1 ✅ | 2,39:1 ❌ |
| Écru | 11,53:1 ✅ | 1,31:1 ❌ |
| Ardoise | 1,62:1 ❌ | 9,35:1 ✅ |

**Le bleu de l'icône est inutilisable sur fond sombre.** C'est le défaut relevé
sur la simulation de carte : la charte laisse la gamme ouverte, on bascule donc
sur l'or ou l'écru.

---

## 3. Typographie

- Baseline du logotype : **Gabarito** — Extra Bold pour « MADA », Regular pour
  « PRIVILÈGES ». Remplacement admis par la charte : Futura 100 (Demi Bold /
  Regular).
- Le logotype étant vectorisé, il ne dépend d'aucun chargement de police.
- Gabarito est repris pour les titres du site (`font-heading`), afin que site et
  plateforme partagent la même voix typographique.

---

## 4. Mise en œuvre

### Site (ce dépôt)

- `components/logo.tsx` — source de vérité : tracés + règles de la charte.
  Les tracés sont extraits, **ne pas les retoucher à la main**.
- `app/globals.css` — tokens `--brand-*` et encre du logotype.
- `public/brand/*.svg` — exports statiques (favicon, e-mail, print, plateforme).

```tsx
// Ton hérité de la surface — le cas normal.
<Logo className="h-7" orientation="horizontal" />

// Ton explicite, pour un cas isolé.
<Logo accent="ecru" orientation="vertical" tone="or" />

// L'icône seule.
<LogoMark className="size-8" />
```

### Le ton est porté par la surface, pas par l'appel

Le logotype lit `--logo-ink` (icône + « MADA ») et `--logo-accent`
(« PRIVILÈGES »), hérités par le DOM. La surface les pose, parce qu'elle seule
sait si elle est claire ou sombre :

```css
:root            { --logo-ink: var(--brand-navy); }
.dark            { --logo-ink: var(--brand-ecru); }

/* sections en bg-foreground : elles s'inversent avec le thème */
.surface-invert      { --logo-ink: var(--brand-or);   --logo-accent: var(--brand-ecru); }
.dark .surface-invert{ --logo-ink: var(--brand-navy); --logo-accent: var(--brand-ardoise); }
```

Toute section peinte en `bg-foreground` doit porter `surface-invert`. Sans quoi
le logo y redevient bleu sur noir — le défaut d'origine.

### Plateforme

Reprendre tel quel :

1. le bloc de tokens `--brand-*` du § 2 ;
2. le mécanisme `--logo-ink` / `--logo-accent` ci-dessus ;
3. les SVG de `public/brand/` (ou le composant si la plateforme est en React).

C'est ce qui garantit une identité unique entre les deux produits : une seule
gamme, un seul tracé, une seule règle de couleur.

---

## 5. Régénérer les tracés

Les tracés viennent d'une extraction du PDF de la charte (parsing des flux de
contenu, conversion des opérateurs de tracé en `path`, normalisation sur une
hauteur d'icône de 100 unités). En cas de nouvelle version de la charte,
ré-extraire plutôt que de vectoriser un export raster : le PNG historique montre
ce que coûte un aller-retour par le bitmap.
