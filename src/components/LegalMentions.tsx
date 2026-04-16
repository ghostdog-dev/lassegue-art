import React from 'react';
import { SectionLabel } from './ui/ArtistUI';
import { useLanguage } from '../i18n';

export const LegalMentions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="legal">
      <div className="container">
        <SectionLabel>{t.legal.sectionLabel}</SectionLabel>
        <h1 className="legal__title">{t.legal.title}</h1>

        <div className="legal__content">
          {t.legal.sections.map((section, index) => (
            <div key={index} className="legal__section">
              <h2 className="legal__heading">{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
