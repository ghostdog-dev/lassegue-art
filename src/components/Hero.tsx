import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionLabel } from './ui/ArtistUI';
import { articles } from './Blog';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const collectionImages = [
  { pillarImage: '/images/gallery/l-observateur-chapeaute.jpg', pillarTitle: "L'Observateur chapeauté" },
  { pillarImage: '/images/gallery/silence-mineral.jpg', pillarTitle: 'Silence minéral' },
  { pillarImage: '/images/gallery/ombres-de-l-alhambra.jpg', pillarTitle: "Ombres de l'Alhambra" },
];

export const Hero: React.FC = () => {
  const { t, localePath } = useLanguage();

  const collections = t.collections.map((col, i) => ({
    ...col,
    ...collectionImages[i],
  }));

  return (
    <div className="hero">
      <section className="hero__banner">
        <div className="hero__grid">
          {/* Title + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero__text"
          >
            <h1 className="hero__title">
              {t.hero.title} <br /> {t.hero.titleBreak} <span className="italic font-serif">{t.hero.titleItalic}</span>.
            </h1>
            <p className="hero__subtitle">
              {t.hero.subtitle}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero__image-wrap"
          >
            <ImageWithFallback
              src="/images/hero-placeholder.png"
              alt={t.hero.heroImageAlt}
              className="hero__image"
              style={{ objectPosition: 'left center' }}
            />
          </motion.div>

          {/* Buttons */}
          <div className="hero__buttons">
            <Link to={localePath('/galerie')} className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
              {t.hero.ctaGallery}
            </Link>
            <Link to={localePath('/biographie')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
              {t.hero.ctaArtist}
            </Link>
          </div>
        </div>
      </section>

      {/* Citation artistique */}
      <section className="hero__quote">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero__quote-text"
        >
          <p>{t.hero.quoteL1}</p>
          <p>{t.hero.quoteL2} <span className="italic font-serif">{t.hero.quoteL2Italic}</span>{t.hero.quoteL2End}</p>
          <footer className="hero__quote-author">{t.hero.quoteAuthor}</footer>
        </motion.blockquote>
      </section>

      {/* Section 2: Collections Preview */}
      <section className="hero__collections">
        <div className="hero__collections-inner">
          <div className="hero__collections-header">
            <div className="hero__gallery-title-group">
              <SectionLabel>{t.hero.collectionsLabel}</SectionLabel>
              <h2 className="bio__section-title">
                {t.hero.collectionsTitle} <span className="italic font-serif">{t.hero.collectionsTitleItalic}</span>
              </h2>
            </div>
            <div className="hero__gallery-cta">
              <Link to={localePath('/galerie')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                {t.hero.collectionsCtaGallery}
              </Link>
            </div>
          </div>

          <div className="hero__collections-grid">
            {collections.map((col) => (
              <Link
                key={col.slug}
                to={localePath(`/galerie/collection/${col.slug}`)}
                className="hero-collection-card"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="hero-collection-card__image-wrap">
                  <ImageWithFallback
                    src={col.pillarImage}
                    alt={col.pillarTitle}
                    className="hero-collection-card__image"
                  />
                </div>
                <div className="hero-collection-card__content">
                  <h3 className="hero-collection-card__title">{col.title}</h3>
                  <div className="hero-collection-card__curatorial">
                    {col.curatorial.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <span className="hero-collection-card__cta">
                    <span>{t.hero.collectionsCtaDiscover}</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="hero__gallery-cta-mobile">
            <Link to={localePath('/galerie')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
              {t.hero.collectionsCtaGallery}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Immersion */}
      <section className="hero__immersion">
        <div className="hero__immersion-grid">
          <div className="hero__immersion-text">
            <SectionLabel>{t.hero.immersionLabel}</SectionLabel>
            <h2 className="bio__section-title">
            {t.hero.immersionTitle} <span className="italic font-serif">{t.hero.immersionTitleItalic}</span>.
            </h2>
            <p className="hero__subtitle">
              {t.hero.immersionText}
            </p>
          </div>

          <div className="hero__immersion-image-wrap">
            <ImageWithFallback
              src="/images/portrait.webp"
              alt={t.hero.portraitAlt}
              className="hero__immersion-image"
            />
          </div>

          <div>
            <Link to={localePath('/biographie')} className="hero__immersion-cta" onClick={() => window.scrollTo(0, 0)}>
              <span className="hero__cta-label">{t.hero.immersionCta}</span>
              <div className="hero__cta-line" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Blog Preview */}
      {articles.length > 0 && (
        <section className="hero__blog">
          <div className="hero__blog-inner">
            <div className="hero__blog-header">
              <div className="hero__blog-title-group">
                <SectionLabel>{t.hero.blogLabel}</SectionLabel>
                <h2 className="bio__section-title">
                  {t.hero.blogTitle} <span className="italic font-serif">{t.hero.blogTitleItalic}</span>
                </h2>
              </div>
              <div className="hero__blog-cta">
                <Link to={localePath('/blog')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                  {t.hero.blogCtaAll}
                </Link>
              </div>
            </div>

            <div className="hero__blog-grid">
              {articles.slice(0, 3).map((article) => {
                const translated = t.blogArticles[article.slug];
                const title = translated ? translated.title : article.title;
                return (
                  <Link
                    key={article.slug}
                    to={localePath(`/blog/${article.slug}`)}
                    className="blog-preview-card"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="blog-preview-card__image-wrap">
                      <ImageWithFallback
                        src={article.image}
                        alt={title}
                        className="blog-preview-card__image"
                      />
                    </div>
                    <div className="blog-preview-card__content">
                      <div className="blog-preview-card__date">
                        <Calendar size={12} />
                        <span>{new Date(article.date).toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <h3 className="blog-preview-card__title">{title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="hero__blog-cta-mobile">
              <Link to={localePath('/blog')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                {t.hero.blogCtaAll}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
