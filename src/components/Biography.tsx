import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionLabel } from './ui/ArtistUI';
import { useLanguage } from '../i18n';

export const Biography: React.FC = () => {
  const { t, localePath } = useLanguage();

  return (
    <section className="bio">
      {/* Section 1: Full-width hero with overlaid text card */}
      <section className="bio__hero">
        <div className="bio__hero-bg">
          <img
            src="/images/biographie-section-1.png"
            alt={t.biography.studioAlt}
            className="bio__hero-bg-img"
          />
        </div>
        <div className="bio__hero-overlay" />
        <div className="bio__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bio__hero-card"
          >
            <h2 className="bio__hero-title">
              {t.biography.heroTitle} <br />
              <span className="italic font-serif">{t.biography.heroTitleItalic}</span>
            </h2>
            <p className="bio__hero-text">
              {t.biography.heroText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Parcours */}
      <section className="bio__parcours">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bio__parcours-image-wrap"
        >
          <ImageWithFallback
            src="/images/portrait2.jpeg"
            alt={t.biography.portraitAlt}
            className="bio__parcours-image"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bio__parcours-text"
        >
          <SectionLabel>{t.biography.parcoursLabel}</SectionLabel>
          <h2 className="bio__section-title">{t.biography.parcoursTitle}</h2>
          <div className="bio__prose">
            <p>{t.biography.parcoursP1}</p>
            <p>{t.biography.parcoursP2}</p>
          </div>
        </motion.div>
      </section>

      {/* Section: Manifeste */}
      <section className="bio__manifeste">
        <SectionLabel>{t.biography.manifesteLabel}</SectionLabel>
        <h2 className="bio__section-title">
          {t.biography.manifesteTitle} <span className="italic font-serif">{t.biography.manifesteTitleItalic}</span>
        </h2>
        <div className="bio__manifeste-separator" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bio__manifeste-body"
        >
          {t.biography.manifeste.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <div className="bio__manifeste-axes">
            {t.biography.manifesteAxes.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          {t.biography.manifesteEnd.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>
        <div className="bio__manifeste-separator" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bio__manifeste-closing"
        >
          {t.biography.manifesteClosing}
        </motion.p>
        <span className="bio__manifeste-author">{t.biography.manifesteAuthor}</span>
      </section>

      {/* Section 3: Cards */}
      <section className="bio__cards-section">
        <div className="container">
          <div className="bio__cards-header">
            <SectionLabel>{t.biography.inspirationsLabel}</SectionLabel>
            <h2 className="bio__section-title">{t.biography.inspirationsTitle}</h2>
          </div>

          <div className="bio__cards-row">
            {t.biography.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bio__card"
              >
                <h3 className="bio__card-title">{milestone.title}</h3>
                <p className="bio__card-text">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bio__cta container--narrow">
        <h2 className="bio__cta-title">
          {t.biography.ctaTitle}
        </h2>
        <div className="bio__cta-buttons">
          <Link to={localePath('/galerie')} className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
            {t.biography.ctaGallery}
          </Link>
          <Link to={localePath('/contact')} className="btn-secondary" onClick={() => window.scrollTo(0, 0)}>
            {t.biography.ctaContact}
          </Link>
        </div>
      </section>
    </section>
  );
};
