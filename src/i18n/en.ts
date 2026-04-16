import type { Translations } from './fr';

export const en: Translations = {
  /* ── Language ────────────────────────────────────── */
  lang: 'en',
  locale: 'en-US',

  /* ── Navigation (Header + Footer) ───────────────── */
  nav: {
    home: 'Home',
    gallery: 'Gallery',
    biography: 'Biography',
    blog: 'Blog',
    contact: 'Contact',
    logoAlt: '[Artist Name]',
    menuAriaLabel: 'Menu',
  },

  /* ── Routes (URL slugs) ────────────────────────── */
  routes: {
    gallery: '/en/gallery',
    galleryCollection: '/en/gallery/collection',
    galleryArtwork: '/en/gallery',
    biography: '/en/biography',
    blog: '/en/blog',
    contact: '/en/contact',
    legal: '/en/legal-notice',
  },

  /* ── Hero ────────────────────────────────────────── */
  hero: {
    title: 'The essence',
    titleBreak: 'of',
    titleItalic: 'silence',
    subtitle: 'Exploring the human figure, scenes of life, and expressive geometry.',
    ctaGallery: 'The Gallery',
    ctaArtist: 'Discover the artist',
    quoteL1: '"\u00a0Inspiring quote placeholder.',
    quoteL2: 'To be',
    quoteL2Italic: 'customised',
    quoteL2End: '\u00a0"',
    quoteAuthor: '— [Artist Name]',
    collectionsLabel: 'Collections',
    collectionsTitle: 'Three',
    collectionsTitleItalic: 'worlds',
    collectionsCtaGallery: 'View the gallery',
    collectionsCtaDiscover: 'Discover',
    immersionLabel: 'Immersion',
    immersionTitle: 'One artistic method,',
    immersionTitleItalic: 'multiple creative worlds',
    immersionText:
      'Immersion text placeholder. Presentation of the artist and their artistic approach. To be customised.',
    immersionCta: 'Discover the biography',
    blogLabel: 'Blog',
    blogTitle: 'News &',
    blogTitleItalic: 'Reflections',
    blogCtaAll: 'View all articles',
    heroImageAlt: 'Artwork by [Artist Name]',
    portraitAlt: 'Portrait of [Artist Name]',
  },

  /* ── Collections (shared data Hero + Gallery) ──── */
  collections: [
    {
      slug: 'figures',
      title: 'FIGURES',
      curatorial: ['Collection description. To be customised.', 'Collection description. To be customised.'],
    },
    {
      slug: 'silence',
      title: 'SILENCE',
      curatorial: ['Collection description. To be customised.', 'Collection description. To be customised.'],
    },
    {
      slug: 'scenes',
      title: 'SCENES',
      curatorial: ['Collection description. To be customised.', 'Collection description. To be customised.'],
    },
  ],

  /* ── Gallery ─────────────────────────────────────── */
  gallery: {
    collectionsLabel: 'Collections',
    title: 'Gallery',
    collectionLabel: 'Collection',
    backToGallery: 'Back to gallery',
    collectionNotFound: 'Collection not found.',
    artworkNotFound: 'Artwork not found.',
    backToCollection: 'Back to',
    technique: 'Technique',
    availability: 'Availability',
    availableOnRequest: 'Available on request',
    acquire: 'Acquire this artwork',
    previous: 'Previous',
    next: 'Next',
    discover: 'Discover',
  },

  /* ── Biography ──────────────────────────────────── */
  biography: {
    heroTitle: 'Painter –',
    heroTitleItalic: '[Artistic Style]',
    heroText:
      'Biography text placeholder. Presentation of the artist and their artistic approach. To be customised.',
    parcoursLabel: 'Background',
    parcoursTitle: 'Biography',
    parcoursP1:
      'Biography text placeholder. The artist\'s journey and origins. To be customised.',
    parcoursP2:
      'Biography text placeholder. Inspirations and artistic lineage. To be customised.',
    manifesteLabel: 'Manifesto',
    manifesteTitle: 'Manifesto of',
    manifesteTitleItalic: '[Artistic Style]',
    manifeste: [
      'Manifesto text placeholder. To be customised.',
      'Manifesto text placeholder. To be customised.',
      'Three axes structure my work:',
    ],
    manifesteAxes: [
      'the Figure, as a place of gaze and connection;',
      'Silence, as inner presence and suspended time;',
      'the Scene, as memory of places and gestures.',
    ],
    manifesteEnd: [
      'Colour and line do not decorate: they construct emotion.',
      'The painting is not an image, but a presence.',
    ],
    manifesteClosing:
      'Manifesto closing text placeholder. To be customised.',
    manifesteAuthor: '— [Artist Name]',
    inspirationsLabel: 'Inspirations',
    inspirationsTitle:
      'Inspirations text placeholder. To be customised.',
    milestones: [
      {
        title: '[Artistic Style]',
        desc: 'Artistic style description placeholder. To be customised.',
      },
      {
        title: 'Works',
        desc: 'Works description placeholder. To be customised.',
      },
      {
        title: 'Works & Exhibitions',
        desc: 'Exhibitions description placeholder. To be customised.',
      },
    ],
    ctaTitle: 'Discover the artworks or contact the artist',
    ctaGallery: 'View the gallery',
    ctaContact: 'Contact [Artist Name]',
    studioAlt: "The artist's studio",
    portraitAlt: 'Portrait of [Artist Name]',
  },

  /* ── Contact ─────────────────────────────────────── */
  contact: {
    label: 'Contact',
    title: 'A question,',
    titleItalic: 'project',
    emailLabel: 'Professional email',
    firstNameLastName: 'First & Last name',
    email: 'Email',
    subject: 'Subject',
    yourMessage: 'Your message',
    subjectOptions: [
      'Artwork acquisition',
      'Collaboration / Gallery',
      'Interview request',
      'Other',
    ],
    selectSubject: 'Select a subject',
    namePlaceholder: 'John Smith',
    emailPlaceholder: 'john@example.com',
    messagePlaceholder: 'Describe your inquiry...',
    send: 'Send message',
    sentTitle: 'Message sent',
    sentText: 'Your message has been successfully sent. The artist will respond as soon as possible.',
    newMessage: 'New message',
    error: 'An error occurred. Please try again.',
    networkError: 'Network error',
    instagram: 'Instagram',
    prefilledSubject: 'Artwork acquisition',
    prefilledMessage: (title: string) =>
      `Hello,\n\nI am interested in purchasing the painting "${title}".\n\nPlease contact me for more information.`,
  },

  /* ── Blog ────────────────────────────────────────── */
  blog: {
    label: 'Blog',
    title: 'News & Reflections',
    intro: 'Discover the behind-the-scenes of creation, inspirations, and news from the artist.',
    readArticle: 'Read the article \u2192',
    empty: 'No articles yet.',
    backToBlog: 'Back to blog',
    notFound: 'Article not found.',
    faqLabel: 'Frequently asked questions',
    faqTitle: 'FAQ',
  },

  /* ── Blog articles (content by slug) ─────────────── */
  blogArticles: {
    'naissance-du-lasseguisme': {
      title: 'Article title placeholder. To be customised.',
      description:
        'Article description placeholder. To be customised.',
      content: `# Article title placeholder

## Section 1

Article content placeholder. To be customised.

## Section 2

Article content placeholder. To be customised.

---

*Explore the artworks in the online gallery.*`,
      faq: [
        {
          question: 'Placeholder question 1?',
          answer:
            'Placeholder answer. To be customised.',
        },
        {
          question: 'Placeholder question 2?',
          answer:
            'Placeholder answer. To be customised.',
        },
        {
          question: 'Placeholder question 3?',
          answer:
            'Placeholder answer. To be customised.',
        },
        {
          question: 'Placeholder question 4?',
          answer:
            'Placeholder answer. To be customised.',
        },
        {
          question: 'Placeholder question 5?',
          answer:
            'Placeholder answer. To be customised.',
        },
      ],
    },
  },

  /* ── Legal Notice ────────────────────────────────── */
  legal: {
    sectionLabel: 'Legal information',
    title: 'Legal Notice',
    sections: [
      {
        heading: '1. Website Publisher',
        content: `<p>This website is published by:</p>
<ul>
<li><strong>Name:</strong> [Artist Name]</li>
<li><strong>Status:</strong> Painter — individual</li>
<li><strong>Email:</strong> contact@example.com</li>
<li><strong>Website:</strong> example.com</li>
</ul>`,
      },
      {
        heading: '2. Publication Manager',
        content: '<p>The publication manager is [Artist Name].</p>',
      },
      {
        heading: '3. Hosting',
        content: `<ul>
<li><strong>Host:</strong> [Host]</li>
<li><strong>Address:</strong> [Address]</li>
<li><strong>Website:</strong> [Host website]</li>
</ul>`,
      },
      {
        heading: '4. Design and Development',
        content: `<ul>
<li><strong>Webmaster:</strong> dev@example.com</li>
<li><strong>Development:</strong> dev@example.com</li>
</ul>`,
      },
      {
        heading: '5. Intellectual Property',
        content: `<p>All content on this website (texts, images, photographs, artworks, logo, illustrations) is the exclusive property of [Artist Name] or their rightful owners, and is protected by copyright in accordance with intellectual property law.</p>
<p>Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of this website, by any means or process, is prohibited without the prior written authorisation of the artist.</p>`,
      },
      {
        heading: '6. Personal Data',
        content: `<p>This website does not collect any personal data automatically. The contact form allows visitors to voluntarily provide their name and email address in order to be contacted. This information is used solely to respond to enquiries and is neither stored in a database nor shared with third parties.</p>
<p>In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your data. To exercise this right, contact: contact@example.com.</p>`,
      },
      {
        heading: '7. Cookies',
        content:
          '<p>This website does not use any tracking, advertising, or analytics cookies. No audience measurement tool is installed.</p>',
      },
      {
        heading: '8. Limitation of Liability',
        content:
          '<p>The publisher endeavours to provide information as accurate as possible. However, they cannot be held responsible for omissions, inaccuracies, or deficiencies in updates. The publisher declines all responsibility in the event of technical difficulties related to the operation of the website.</p>',
      },
    ],
  },

  /* ── Footer ──────────────────────────────────────── */
  footer: {
    brandText: 'Painter — [Artistic Style].\nA free and emotional deconstruction inherited from Cubism.',
    navigationHeading: 'Navigation',
    newsletterHeading: 'Newsletter',
    newsletterText: "Receive the latest news from the artist.",
    newsletterPlaceholder: 'Your email',
    newsletterButton: 'OK',
    newsletterSuccess: 'Thank you for subscribing!',
    newsletterError: 'Error, please try again.',
    copyright: '© 2026 [Artist Name] — All rights reserved',
    legalLink: 'Legal Notice',
    newsletterSubject: 'Newsletter subscription',
  },
} as const;
