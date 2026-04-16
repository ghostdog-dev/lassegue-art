import React from 'react';
import { Link, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';
import { ButtonSubmit, SectionLabel, DetailInfoLabel, NavLinkStyle } from './ui/ArtistUI';
import artworksData from '../artworks.json';
import { useLanguage } from '../i18n';

// Transformer les données du JSON pour correspondre à la structure attendue
export const artworks = artworksData.map((item) => {
  const descText = item.description.replace(/<[^>]*>/g, '');
  const parts = descText.split(' — ');
  const technique = parts[0] || '';
  const dimensions = parts[1] || '';
  const year = parts[2] || '';

  return {
    id: item.id,
    title: item.title,
    category: item.collection,
    image: item.image,
    year: year,
    dimensions: dimensions,
    technique: technique,
    description: descText
  };
});

// Pillar IDs per collection slug
const collectionPillars: Record<string, string> = {
  figures: 'l-observateur-chapeaute',
  silence: 'silence-mineral',
  scenes: 'ombres-de-l-alhambra',
};

// Map slug → collection name in data
const slugToCategory: Record<string, string> = {
  figures: 'Figures',
  silence: 'Silence',
  scenes: 'Scènes',
};

function getPillarArtwork(pillarId: string) {
  return artworksData.find((a) => a.id === pillarId);
}

function getArtworksForCollection(category: string, pillarId: string) {
  return artworksData
    .filter((a) => a.collection === category && a.id !== pillarId)
    .map((item) => {
      const descText = item.description.replace(/<[^>]*>/g, '');
      return { id: item.id, title: item.title, image: item.image, description: descText };
    });
}

/* ================================================================
   Gallery Overview — /galerie
   ================================================================ */
export const Gallery: React.FC = () => {
  const { t, localePath } = useLanguage();

  return (
    <section className="gallery-overview">
      <div className="gallery-overview__header">
        <SectionLabel>{t.gallery.collectionsLabel}</SectionLabel>
        <h1 className="gallery-overview__title">{t.gallery.title}</h1>
      </div>

      {t.collections.map((col, idx) => {
        const pillarId = collectionPillars[col.slug];
        const pillar = getPillarArtwork(pillarId);
        if (!pillar) return null;

        return (
          <Link
            key={col.slug}
            to={localePath(`/galerie/collection/${col.slug}`)}
            className="collection-preview"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className={`collection-preview__inner ${idx % 2 === 1 ? 'collection-preview__inner--reverse' : ''}`}>
              <div className="collection-preview__image-wrap">
                <ImageWithFallback
                  src={pillar.image}
                  alt={pillar.title}
                  className="collection-preview__image"
                />
                <div className="collection-preview__image-overlay" />
              </div>
              <div className="collection-preview__text">
                <SectionLabel>{t.gallery.collectionLabel}</SectionLabel>
                <h2 className="collection-preview__title">{col.title}</h2>
                <div className="collection-preview__curatorial">
                  {col.curatorial.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <span className="collection-preview__cta">
                  <span className="collection-preview__cta-label">{t.gallery.discover}</span>
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

/* ================================================================
   Collection Page — /galerie/collection/:slug
   ================================================================ */
export const CollectionPage: React.FC = () => {
  const { slug } = useParams();
  const { t, localePath } = useLanguage();
  const collection = t.collections.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="detail">
        <div className="container">
          <Link to={localePath('/galerie')} className={`detail__back ${NavLinkStyle}`}>
            <ChevronLeft size={16} />
            <span>{t.gallery.backToGallery}</span>
          </Link>
          <p>{t.gallery.collectionNotFound}</p>
        </div>
      </div>
    );
  }

  const pillarId = collectionPillars[collection.slug];
  const category = slugToCategory[collection.slug];
  const pillar = getPillarArtwork(pillarId);
  const otherArtworks = getArtworksForCollection(category, pillarId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="collection-page"
    >
      {/* Back link */}
      <div className="container">
        <Link to={localePath('/galerie')} className={`detail__back ${NavLinkStyle}`} onClick={() => window.scrollTo(0, 0)}>
          <ChevronLeft size={16} />
          <span>{t.gallery.backToGallery}</span>
        </Link>
      </div>

      {/* Title */}
      <div className="collection-page__hero">
        <SectionLabel>{t.gallery.collectionLabel}</SectionLabel>
        <h1 className="collection-page__title">{collection.title}</h1>
      </div>

      {/* Pillar artwork — large */}
      {pillar && (
        <Link
          to={localePath(`/galerie/${pillarId}`)}
          className="collection-page__pillar"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="collection-page__pillar-wrap">
            <ImageWithFallback
              src={pillar.image}
              alt={pillar.title}
              className="collection-page__pillar-image"
            />
          </div>
          <p className="collection-page__pillar-title">{pillar.title}</p>
        </Link>
      )}

      {/* Curatorial text */}
      <div className="collection-page__curatorial">
        {collection.curatorial.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Separator */}
      <div className="container">
        <div className="collection-page__separator" />
      </div>

      {/* Grid of other artworks */}
      <div className="collection-page__grid-section">
        <div className="collection-page__grid">
          <AnimatePresence mode="popLayout">
            {otherArtworks.map((art) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link to={localePath(`/galerie/${art.id}`)} className="art-card" onClick={() => window.scrollTo(0, 0)}>
                  <div className="art-card__image-wrap">
                    <ImageWithFallback
                      src={art.image}
                      alt={art.title}
                      className="art-card__image"
                    />
                    <div className="art-card__overlay">
                      <Maximize2 className="art-card__icon" size={24} />
                    </div>
                  </div>
                  <div className="art-card__info">
                    <div>
                      <h3 className="art-card__title">{art.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

/* ================================================================
   Artwork Detail — /galerie/:id
   ================================================================ */
export const ArtworkDetail: React.FC = () => {
  const { id } = useParams();
  const { t, localePath } = useLanguage();
  const art = artworks.find((a) => a.id === id);

  if (!art) {
    return (
      <div className="detail">
        <div className="container">
          <Link to={localePath('/galerie')} className={`detail__back ${NavLinkStyle}`}>
            <ChevronLeft size={16} />
            <span>{t.gallery.backToGallery}</span>
          </Link>
          <p>{t.gallery.artworkNotFound}</p>
        </div>
      </div>
    );
  }

  // Find the collection slug for this artwork
  const collectionSlug = Object.entries(slugToCategory).find(
    ([, cat]) => cat === art.category
  )?.[0];

  // Filter artworks within same collection for prev/next navigation
  const collectionArtworks = artworks.filter((a) => a.category === art.category);
  const colIndex = collectionArtworks.findIndex((a) => a.id === art.id);
  const prevArt = colIndex > 0 ? collectionArtworks[colIndex - 1] : undefined;
  const nextArt = colIndex < collectionArtworks.length - 1 ? collectionArtworks[colIndex + 1] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="detail"
    >
      <div className="container">
        <Link
          to={collectionSlug ? localePath(`/galerie/collection/${collectionSlug}`) : localePath('/galerie')}
          className={`detail__back ${NavLinkStyle}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <ChevronLeft size={16} />
          <span>{t.gallery.backToCollection} {art.category}</span>
        </Link>

        <div className="detail__layout">
          <div className="detail__image-wrap">
            <ImageWithFallback
              src={art.image}
              alt={art.title}
              className="detail__image"
            />
          </div>

          <div className="detail__info">
            <div className="detail__title-group">
              <SectionLabel>{art.category}</SectionLabel>
              <h1 className="detail__title">{art.title}</h1>
              <div className="detail__dims">
                {art.year && <span>{art.year}</span>}
                {art.year && art.dimensions && <span className="detail__dot" />}
                {art.dimensions && <span>{art.dimensions}</span>}
              </div>
            </div>

            <div className="detail__technique-section">
              <div className="detail__separator" />
              <div className="detail__technique-row">
                <div className="detail__technique-col">
                  <DetailInfoLabel>{t.gallery.technique}</DetailInfoLabel>
                  <p className="text-sm">{art.technique}</p>
                </div>
                <div className="detail__technique-col">
                  <DetailInfoLabel>{t.gallery.availability}</DetailInfoLabel>
                  <p className="text-sm font-medium">{t.gallery.availableOnRequest}</p>
                </div>
              </div>
            </div>

            <Link to={localePath(`/contact?artwork=${art.id}`)} onClick={() => window.scrollTo(0, 0)}>
              <ButtonSubmit type="button">
                {t.gallery.acquire}
              </ButtonSubmit>
            </Link>

            {/* Navigation prev/next within collection */}
            {(prevArt || nextArt) && (
              <div className="detail__nav">
                {prevArt ? (
                  <Link
                    to={localePath(`/galerie/${prevArt.id}`)}
                    className={`detail__nav-btn ${NavLinkStyle}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <ChevronLeft size={16} />
                    <span className="detail__nav-title">{prevArt.title}</span>
                    <span className="detail__nav-title-short">{t.gallery.previous}</span>
                  </Link>
                ) : <div />}
                {nextArt ? (
                  <Link
                    to={localePath(`/galerie/${nextArt.id}`)}
                    className={`detail__nav-btn ${NavLinkStyle}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span className="detail__nav-title">{nextArt.title}</span>
                    <span className="detail__nav-title-short">{t.gallery.next}</span>
                    <ChevronRight size={16} />
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
