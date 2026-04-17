# Portfolio Artiste Peintre — Template

Template de site vitrine bilingue (FR/EN) pour un portfolio d'artiste peintre. Galerie de 6 oeuvres exemples, blog, biographie et formulaire de contact.

## Apercu

- **Galerie** — 6 oeuvres exemples organisees en 3 collections (Collection A, Collection B, Collection C) avec navigation oeuvre par oeuvre
- **Blog** — Articles en markdown avec FAQ integree
- **Biographie** — Parcours de l'artiste
- **Contact** — Formulaire avec pre-remplissage depuis une oeuvre
- **Bilingue** — Francais et anglais, detection automatique par URL (`/` = FR, `/en` = EN)
- **Newsletter** — Inscription via le footer

## Stack technique

| Technologie | Usage |
|-------------|-------|
| React 18 | Framework UI |
| TypeScript | Typage statique |
| Vite + SWC | Build et dev server |
| React Router 7 | Routing declaratif (FR + EN) |
| Framer Motion | Animations et transitions de pages |
| Tailwind CSS v4 | Styles (pre-compile, statique) |
| Lucide React | Icones |
| Netlify | Deploiement + formulaires |

## Installation

```bash
git clone <repo-url> && cd portfolio-artiste
npm install
npm run dev
```

Le serveur demarre sur `http://localhost:3000`.

## Build

```bash
npm run build
```

Les fichiers de production sont generes dans `build/`.

## Structure du projet

```
src/
├── main.tsx                     # Point d'entree React
├── App.tsx                      # Layout principal, routes, footer
├── artworks.json                # Catalogue des oeuvres
├── blog-articles.json           # Articles de blog (markdown)
├── components/
│   ├── Header.tsx               # Navigation sticky + menu mobile
│   ├── Hero.tsx                 # Page d'accueil
│   ├── Gallery.tsx              # Galerie, collections, detail oeuvre
│   ├── Biography.tsx            # Biographie de l'artiste
│   ├── Blog.tsx                 # Liste d'articles + detail
│   ├── Contact.tsx              # Formulaire de contact
│   ├── LegalMentions.tsx        # Mentions legales
│   ├── ui/
│   │   └── ArtistUI.tsx         # Design system (boutons, champs, labels)
│   └── figma/
│       └── ImageWithFallback.tsx # Image avec fallback SVG
├── i18n/
│   ├── index.ts                 # Exports i18n
│   ├── LanguageContext.tsx       # Provider et hooks de langue
│   ├── fr.ts                    # Traductions francaises
│   └── en.ts                    # Traductions anglaises
└── styles/
    └── globals.css              # Styles personnalises
```

## Routes

| Route FR | Route EN | Page |
|----------|----------|------|
| `/` | `/en` | Accueil |
| `/galerie` | `/en/gallery` | Galerie |
| `/galerie/collection/:slug` | `/en/gallery/collection/:slug` | Collection |
| `/galerie/:id` | `/en/gallery/:id` | Detail oeuvre |
| `/biographie` | `/en/biography` | Biographie |
| `/blog` | `/en/blog` | Blog |
| `/blog/:slug` | `/en/blog/:slug` | Article |
| `/contact` | `/en/contact` | Contact |
| `/mentions-legales` | `/en/legal-notice` | Mentions legales |

## Collections

| Collection | Theme | Description |
|------------|-------|-------------|
| **Collection A** | Theme A | Description de la collection A |
| **Collection B** | Theme B | Description de la collection B |
| **Collection C** | Theme C | Description de la collection C |

## Deploiement

Le site est deploye automatiquement sur **Netlify** a chaque push sur `master`.

Le fichier `public/_redirects` gere le routing SPA :
```
/* /index.html 200
```

## Design system

Les composants UI reutilisables sont dans `src/components/ui/ArtistUI.tsx` :

- `ButtonPrimary` / `ButtonSecondary` — Boutons d'action
- `ButtonSubmit` — Bouton de soumission pleine largeur
- `FormInput` / `FormTextarea` — Champs de formulaire
- `FormLabel` / `SectionLabel` / `DetailInfoLabel` — Typographie

## Note sur le CSS

Le fichier `src/index.css` contient le CSS Tailwind **pre-compile** (export Figma). Ajouter de nouvelles classes Tailwind directement dans le JSX ne fonctionnera pas — utiliser `src/styles/globals.css` pour les styles personnalises.

## Licence

Ce code est mis a disposition a des fins de consultation et de demonstration uniquement. Toute copie, modification, redistribution ou reutilisation est interdite. Voir le fichier [LICENSE](LICENSE) pour plus de details.
