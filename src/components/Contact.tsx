import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Send } from 'lucide-react';
import { ButtonSubmit, FormInput, FormTextarea, FormLabel, SectionLabel } from './ui/ArtistUI';
import { artworks } from './Gallery';
import { useLanguage } from '../i18n';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const artwork = useMemo(() => {
    const artworkId = searchParams.get('artwork');
    if (!artworkId) return null;
    return artworks.find((a) => a.id === artworkId) || null;
  }, [searchParams]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(
    artwork ? t.contact.prefilledSubject : ''
  );
  const [message, setMessage] = useState(
    artwork ? t.contact.prefilledMessage(artwork.title) : ''
  );
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        subject,
        message,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(t.contact.networkError);
        setSent(true);
      })
      .catch(() => setError(t.contact.error));
  };

  return (
    <section className="contact">
      <div className="contact__layout">
        {/* Info Column */}
        <div className="contact__info">
          <div className="contact__title-group">
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="contact__title">
              {t.contact.title} <br />
              un <span className="italic font-serif">{t.contact.titleItalic}</span> ?
            </h2>
          </div>

          <div className="contact__details">
            <div className="contact__detail-row">
              <div className="contact__detail-icon">
                <Mail size={18} />
              </div>
              <div>
                <FormLabel className="form-label">{t.contact.emailLabel}</FormLabel>
                <a href="mailto:contact@example.com" className="contact__detail-link">contact@example.com</a>
              </div>
            </div>
            <div className="contact__detail-row">
            </div>
          </div>

          <div className="contact__social">
             <a href="https://instagram.com/artiste" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <Instagram size={20} />
              <span className="contact__social-label">{t.contact.instagram}</span>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact__form-wrap"
        >
          {sent ? (
            <div className="contact__sent">
              <div className="contact__sent-icon">
                <Send size={20} color="white" />
              </div>
              <h3 className="contact__sent-title">{t.contact.sentTitle}</h3>
              <p className="contact__sent-text">{t.contact.sentText}</p>
              <button onClick={() => setSent(false)} className="contact__sent-reset">
                {t.contact.newMessage}
              </button>
            </div>
          ) : (
          <form className="contact__form" name="contact" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="contact__form-row">
              <div className="contact__field">
                <FormLabel>{t.contact.firstNameLastName}</FormLabel>
                <FormInput
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="contact__field">
                <FormLabel>{t.contact.email}</FormLabel>
                <FormInput
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div className="contact__field">
              <FormLabel>{t.contact.subject}</FormLabel>
              <select
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contact__select"
              >
                <option value="" disabled>{t.contact.selectSubject}</option>
                {t.contact.subjectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="contact__field">
              <FormLabel>{t.contact.yourMessage}</FormLabel>
              <FormTextarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {error && <p className="contact__error">{error}</p>}

            <ButtonSubmit type="submit" className="btn-submit-group">
              <span>{t.contact.send}</span>
              <Send size={14} className="btn-submit-icon" />
            </ButtonSubmit>
          </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
