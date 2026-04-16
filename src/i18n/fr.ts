export const fr = {
  /* ── Langue ─────────────────────────────────────── */
  lang: 'fr',
  locale: 'fr-FR',

  /* ── Navigation (Header + Footer) ───────────────── */
  nav: {
    home: 'Accueil',
    gallery: 'Galerie',
    biography: 'Biographie',
    blog: 'Blog',
    contact: 'Contact',
    logoAlt: '[Nom de l\'artiste]',
    menuAriaLabel: 'Menu',
  },

  /* ── Routes (slugs URL) ────────────────────────── */
  routes: {
    gallery: '/galerie',
    galleryCollection: '/galerie/collection',
    galleryArtwork: '/galerie',
    biography: '/biographie',
    blog: '/blog',
    contact: '/contact',
    legal: '/mentions-legales',
  },

  /* ── Hero ────────────────────────────────────────── */
  hero: {
    title: "L'essence",
    titleBreak: 'du',
    titleItalic: 'silence',
    subtitle: 'Exploration de figure humaine, scènes de vie, et géométrie expressive.',
    ctaGallery: 'La Galerie',
    ctaArtist: "Découvrir l'artiste",
    quoteL1: '«\u00a0Citation inspirante placeholder.',
    quoteL2: 'À',
    quoteL2Italic: 'personnaliser',
    quoteL2End: '\u00a0»',
    quoteAuthor: '— [Nom de l\'artiste]',
    collectionsLabel: 'Collections',
    collectionsTitle: 'Trois',
    collectionsTitleItalic: 'univers',
    collectionsCtaGallery: 'Voir la galerie',
    collectionsCtaDiscover: 'Découvrir',
    immersionLabel: 'Immersion',
    immersionTitle: 'Une méthode artistique,',
    immersionTitleItalic: 'plusieurs univers créatifs',
    immersionText:
      "Texte d'immersion placeholder. Présentation de l'artiste et de sa démarche artistique. À personnaliser.",
    immersionCta: 'Découvrir la biographie',
    blogLabel: 'Blog',
    blogTitle: 'Actualités &',
    blogTitleItalic: 'Réflexions',
    blogCtaAll: 'Voir tous les articles',
    heroImageAlt: 'Oeuvre de [Nom de l\'artiste]',
    portraitAlt: 'Portrait de [Nom de l\'artiste]',
  },

  /* ── Collections (données partagées Hero + Gallery) ── */
  collections: [
    {
      slug: 'figures',
      title: 'FIGURES',
      curatorial: ['Description de la collection. À personnaliser.', 'Description de la collection. À personnaliser.'],
    },
    {
      slug: 'silence',
      title: 'SILENCE',
      curatorial: ['Description de la collection. À personnaliser.', 'Description de la collection. À personnaliser.'],
    },
    {
      slug: 'scenes',
      title: 'SCÈNES',
      curatorial: ['Description de la collection. À personnaliser.', 'Description de la collection. À personnaliser.'],
    },
  ],

  /* ── Gallery ─────────────────────────────────────── */
  gallery: {
    collectionsLabel: 'Collections',
    title: 'Galerie',
    collectionLabel: 'Collection',
    backToGallery: 'Retour à la galerie',
    collectionNotFound: 'Collection introuvable.',
    artworkNotFound: 'Oeuvre introuvable.',
    backToCollection: 'Retour à',
    technique: 'Technique',
    availability: 'Disponibilité',
    availableOnRequest: 'Disponible sur demande',
    acquire: 'Acquérir cette oeuvre',
    previous: 'Précédente',
    next: 'Suivante',
    discover: 'Découvrir',
  },

  /* ── Biography ──────────────────────────────────── */
  biography: {
    heroTitle: 'Artiste peintre –',
    heroTitleItalic: '[Style artistique]',
    heroText:
      "Texte de biographie placeholder. Présentation de l'artiste et de sa démarche artistique. À personnaliser.",
    parcoursLabel: 'Parcours',
    parcoursTitle: 'Biographie',
    parcoursP1:
      "Texte de biographie placeholder. Parcours de l'artiste et origines. À personnaliser.",
    parcoursP2:
      "Texte de biographie placeholder. Inspirations et filiation artistique. À personnaliser.",
    manifesteLabel: 'Manifeste',
    manifesteTitle: 'Manifeste du',
    manifesteTitleItalic: '[Style artistique]',
    manifeste: [
      'Texte du manifeste placeholder. À personnaliser.',
      'Texte du manifeste placeholder. À personnaliser.',
      'Trois axes structurent mon travail :',
    ],
    manifesteAxes: [
      'la Figure, comme lieu du regard et de la relation ;',
      'le Silence, comme présence intérieure et temps suspendu ;',
      'la Scène, comme mémoire des lieux et des gestes.',
    ],
    manifesteEnd: [
      "La couleur et la ligne ne décorent pas : elles construisent l'émotion.",
      "Le tableau n'est pas une image, mais une présence.",
    ],
    manifesteClosing:
      "Texte de conclusion du manifeste placeholder. À personnaliser.",
    manifesteAuthor: '— [Nom de l\'artiste]',
    inspirationsLabel: 'Inspirations',
    inspirationsTitle:
      "Texte d'inspirations placeholder. À personnaliser.",
    milestones: [
      {
        title: '[Style artistique]',
        desc: "Description du style artistique placeholder. À personnaliser.",
      },
      {
        title: 'Œuvres',
        desc: "Description des œuvres placeholder. À personnaliser.",
      },
      {
        title: 'Œuvres & Expositions',
        desc: "Description des expositions placeholder. À personnaliser.",
      },
    ],
    ctaTitle: "Découvrez les œuvres ou contactez l'artiste",
    ctaGallery: 'Voir la galerie',
    ctaContact: 'Contacter [Nom de l\'artiste]',
    studioAlt: "Studio de l'artiste",
    portraitAlt: 'Portrait de [Nom de l\'artiste]',
  },

  /* ── Contact ─────────────────────────────────────── */
  contact: {
    label: 'Contact',
    title: 'Une question,',
    titleItalic: 'projet',
    emailLabel: 'Email professionnel',
    firstNameLastName: 'Prénom & Nom',
    email: 'Email',
    subject: 'Sujet',
    yourMessage: 'Votre message',
    subjectOptions: [
      "Acquisition d'œuvre",
      'Collaboration / Galerie',
      "Demande d'interview",
      'Autre',
    ],
    selectSubject: 'Sélectionnez un sujet',
    namePlaceholder: 'Jean Dupont',
    emailPlaceholder: 'jean@exemple.com',
    messagePlaceholder: 'Décrivez votre demande...',
    send: 'Envoyer le message',
    sentTitle: 'Message envoyé',
    sentText: 'Votre message a bien été transmis. L\'artiste vous répondra dans les meilleurs délais.',
    newMessage: 'Nouveau message',
    error: 'Une erreur est survenue. Veuillez réessayer.',
    networkError: 'Erreur réseau',
    instagram: 'Instagram',
    prefilledSubject: "Acquisition d'œuvre",
    prefilledMessage: (title: string) =>
      `Bonjour,\n\nJe suis intéressé(e) par l'achat du tableau « ${title} ».\n\nMerci de me recontacter pour plus d'informations.`,
  },

  /* ── Blog ────────────────────────────────────────── */
  blog: {
    label: 'Blog',
    title: 'Actualités & Réflexions',
    intro: 'Découvrez les coulisses de la création, les inspirations et les actualités de l\'artiste.',
    readArticle: "Lire l'article →",
    empty: 'Aucun article pour le moment.',
    backToBlog: 'Retour au blog',
    notFound: 'Article introuvable.',
    faqLabel: 'Questions fréquentes',
    faqTitle: 'FAQ',
  },

  /* ── Blog articles (contenu par slug) ────────────── */
  blogArticles: {
    'naissance-du-lasseguisme': {
      title: 'Titre de l\'article placeholder. À personnaliser.',
      description:
        'Description de l\'article placeholder. À personnaliser.',
      content: `# Titre de l'article placeholder

## Section 1

Contenu de l'article placeholder. À personnaliser.

## Section 2

Contenu de l'article placeholder. À personnaliser.

---

*Retrouvez les œuvres dans la galerie en ligne.*`,
      faq: [
        {
          question: 'Question placeholder 1 ?',
          answer:
            'Réponse placeholder. À personnaliser.',
        },
        {
          question: 'Question placeholder 2 ?',
          answer:
            'Réponse placeholder. À personnaliser.',
        },
        {
          question: 'Question placeholder 3 ?',
          answer:
            'Réponse placeholder. À personnaliser.',
        },
        {
          question: 'Question placeholder 4 ?',
          answer:
            'Réponse placeholder. À personnaliser.',
        },
        {
          question: 'Question placeholder 5 ?',
          answer:
            'Réponse placeholder. À personnaliser.',
        },
      ],
    },
  },

  /* ── Legal Mentions ──────────────────────────────── */
  legal: {
    sectionLabel: 'Informations légales',
    title: 'Mentions Légales',
    sections: [
      {
        heading: '1. Éditeur du site',
        content: `<p>Le présent site est édité par :</p>
<ul>
<li><strong>Nom :</strong> [Nom de l'artiste]</li>
<li><strong>Statut :</strong> Artiste peintre — personne physique</li>
<li><strong>Email :</strong> contact@example.com</li>
<li><strong>Site :</strong> example.com</li>
</ul>`,
      },
      {
        heading: '2. Responsable de la publication',
        content: '<p>Le responsable de la publication est [Nom de l\'artiste].</p>',
      },
      {
        heading: '3. Hébergement',
        content: `<ul>
<li><strong>Hébergeur :</strong> [Hébergeur]</li>
<li><strong>Adresse :</strong> [Adresse]</li>
<li><strong>Site :</strong> [Site de l'hébergeur]</li>
</ul>`,
      },
      {
        heading: '4. Conception et développement',
        content: `<ul>
<li><strong>Webmaster :</strong> dev@example.com</li>
<li><strong>Développement :</strong> dev@example.com</li>
</ul>`,
      },
      {
        heading: '5. Propriété intellectuelle',
        content: `<p>L'ensemble du contenu de ce site (textes, images, photographies, œuvres, logo, illustrations) est la propriété exclusive de [Nom de l'artiste] ou de ses ayants droit, et est protégé par le droit d'auteur conformément aux dispositions du Code de la propriété intellectuelle.</p>
<p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'artiste.</p>`,
      },
      {
        heading: '6. Données personnelles',
        content: `<p>Ce site ne collecte aucune donnée personnelle de manière automatique. Le formulaire de contact permet aux visiteurs de transmettre volontairement leur nom et adresse email afin d'être recontactés. Ces informations sont uniquement utilisées pour répondre aux demandes et ne sont ni stockées dans une base de données, ni transmises à des tiers.</p>
<p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez : contact@example.com.</p>`,
      },
      {
        heading: '7. Cookies',
        content:
          "<p>Ce site n'utilise aucun cookie de tracking, publicitaire ou analytique. Aucun outil de mesure d'audience n'est installé.</p>",
      },
      {
        heading: '8. Limitation de responsabilité',
        content:
          "<p>L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour. L'éditeur décline toute responsabilité en cas de difficulté technique liée au fonctionnement du site.</p>",
      },
    ],
  },

  /* ── Footer ──────────────────────────────────────── */
  footer: {
    brandText: "Artiste peintre — [Style artistique].\nUne déconstruction libre et émotionnelle héritée du cubisme.",
    navigationHeading: 'Navigation',
    newsletterHeading: 'Newsletter',
    newsletterText: "Recevez les dernières actualités de l'artiste.",
    newsletterPlaceholder: 'Votre email',
    newsletterButton: 'OK',
    newsletterSuccess: 'Merci pour votre inscription !',
    newsletterError: 'Erreur, veuillez réessayer.',
    copyright: '© 2026 [Nom de l\'artiste] — Tous droits réservés',
    legalLink: 'Mentions Légales',
    newsletterSubject: 'Inscription newsletter',
  },
};

/* ── Type definition ───────────────────────────────── */

interface CollectionTranslation {
  slug: string;
  title: string;
  curatorial: string[];
}

interface MilestoneTranslation {
  title: string;
  desc: string;
}

interface LegalSection {
  heading: string;
  content: string;
}

interface BlogArticleTranslation {
  title: string;
  description: string;
  content: string;
  faq: { question: string; answer: string }[];
}

export interface Translations {
  lang: string;
  locale: string;
  nav: {
    home: string;
    gallery: string;
    biography: string;
    blog: string;
    contact: string;
    logoAlt: string;
    menuAriaLabel: string;
  };
  routes: {
    gallery: string;
    galleryCollection: string;
    galleryArtwork: string;
    biography: string;
    blog: string;
    contact: string;
    legal: string;
  };
  hero: {
    title: string;
    titleBreak: string;
    titleItalic: string;
    subtitle: string;
    ctaGallery: string;
    ctaArtist: string;
    quoteL1: string;
    quoteL2: string;
    quoteL2Italic: string;
    quoteL2End: string;
    quoteAuthor: string;
    collectionsLabel: string;
    collectionsTitle: string;
    collectionsTitleItalic: string;
    collectionsCtaGallery: string;
    collectionsCtaDiscover: string;
    immersionLabel: string;
    immersionTitle: string;
    immersionTitleItalic: string;
    immersionText: string;
    immersionCta: string;
    blogLabel: string;
    blogTitle: string;
    blogTitleItalic: string;
    blogCtaAll: string;
    heroImageAlt: string;
    portraitAlt: string;
  };
  collections: CollectionTranslation[];
  gallery: {
    collectionsLabel: string;
    title: string;
    collectionLabel: string;
    backToGallery: string;
    collectionNotFound: string;
    artworkNotFound: string;
    backToCollection: string;
    technique: string;
    availability: string;
    availableOnRequest: string;
    acquire: string;
    previous: string;
    next: string;
    discover: string;
  };
  biography: {
    heroTitle: string;
    heroTitleItalic: string;
    heroText: string;
    parcoursLabel: string;
    parcoursTitle: string;
    parcoursP1: string;
    parcoursP2: string;
    manifesteLabel: string;
    manifesteTitle: string;
    manifesteTitleItalic: string;
    manifeste: string[];
    manifesteAxes: string[];
    manifesteEnd: string[];
    manifesteClosing: string;
    manifesteAuthor: string;
    inspirationsLabel: string;
    inspirationsTitle: string;
    milestones: MilestoneTranslation[];
    ctaTitle: string;
    ctaGallery: string;
    ctaContact: string;
    studioAlt: string;
    portraitAlt: string;
  };
  contact: {
    label: string;
    title: string;
    titleItalic: string;
    emailLabel: string;
    firstNameLastName: string;
    email: string;
    subject: string;
    yourMessage: string;
    subjectOptions: string[];
    selectSubject: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sentTitle: string;
    sentText: string;
    newMessage: string;
    error: string;
    networkError: string;
    instagram: string;
    prefilledSubject: string;
    prefilledMessage: (title: string) => string;
  };
  blog: {
    label: string;
    title: string;
    intro: string;
    readArticle: string;
    empty: string;
    backToBlog: string;
    notFound: string;
    faqLabel: string;
    faqTitle: string;
  };
  blogArticles: Record<string, BlogArticleTranslation>;
  legal: {
    sectionLabel: string;
    title: string;
    sections: LegalSection[];
  };
  footer: {
    brandText: string;
    navigationHeading: string;
    newsletterHeading: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterSuccess: string;
    newsletterError: string;
    copyright: string;
    legalLink: string;
    newsletterSubject: string;
  };
}
