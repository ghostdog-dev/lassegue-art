import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery, CollectionPage, ArtworkDetail } from './components/Gallery';
import { Biography } from './components/Biography';
import { Contact } from './components/Contact';
import { Blog, BlogArticle } from './components/Blog';
import { LegalMentions } from './components/LegalMentions';
import { FooterLinkStyle } from './components/ui/ArtistUI';
import { Instagram } from 'lucide-react';
import { useLanguage } from './i18n';

export default function App() {
  const location = useLocation();
  const { t, localePath } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: 'Newsletter',
        email: newsletterEmail,
        subject: t.footer.newsletterSubject,
        message: t.footer.newsletterSubject,
      }).toString(),
    })
      .then(() => setNewsletterStatus('sent'))
      .catch(() => setNewsletterStatus('error'));
  };

  const footerNav = [
    { to: localePath('/'), label: t.nav.home },
    { to: localePath('/galerie'), label: t.nav.gallery },
    { to: localePath('/biographie'), label: t.nav.biography },
    { to: localePath('/blog'), label: t.nav.blog },
    { to: localePath('/contact'), label: t.nav.contact },
  ];

  return (
    <div className="app-root">
      <Header />

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Routes location={location}>
              {/* French routes */}
              <Route path="/" element={<Hero />} />
              <Route path="/galerie" element={<Gallery />} />
              <Route path="/galerie/collection/:slug" element={<CollectionPage />} />
              <Route path="/galerie/:id" element={<ArtworkDetail />} />
              <Route path="/biographie" element={<Biography />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalMentions />} />

              {/* English routes */}
              <Route path="/en" element={<Hero />} />
              <Route path="/en/gallery" element={<Gallery />} />
              <Route path="/en/gallery/collection/:slug" element={<CollectionPage />} />
              <Route path="/en/gallery/:id" element={<ArtworkDetail />} />
              <Route path="/en/biography" element={<Biography />} />
              <Route path="/en/blog" element={<Blog />} />
              <Route path="/en/blog/:slug" element={<BlogArticle />} />
              <Route path="/en/contact" element={<Contact />} />
              <Route path="/en/legal-notice" element={<LegalMentions />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__columns">
            {/* Col 1: Brand */}
            <div className="footer__col">
              <img src="/images/logo.png" alt={t.nav.logoAlt} className="footer__logo" />
              <p className="footer__brand-text">
                {t.footer.brandText.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
                ))}
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div className="footer__col">
              <h4 className="footer__heading">{t.footer.navigationHeading}</h4>
              <ul className="footer__nav-list">
                {footerNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="footer-link-style" onClick={() => window.scrollTo(0, 0)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Newsletter */}
            <div className="footer__col">
              <h4 className="footer__heading">{t.footer.newsletterHeading}</h4>
              <p className="footer__text">
                {t.footer.newsletterText}
              </p>
              {newsletterStatus === 'sent' ? (
                <p className="footer__text" style={{ opacity: 0.8 }}>
                  {t.footer.newsletterSuccess}
                </p>
              ) : (
                <form name="contact" method="POST" onSubmit={handleNewsletter} className="footer__newsletter">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.footer.newsletterPlaceholder}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="footer__newsletter-input"
                  />
                  <button type="submit" className="footer__newsletter-btn">
                    {t.footer.newsletterButton}
                  </button>
                  {newsletterStatus === 'error' && (
                    <p className="footer__text" style={{ color: '#e74c3c', marginTop: '0.5rem' }}>
                      {t.footer.newsletterError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <div className="footer__copyright">
              {t.footer.copyright}
            </div>
            <div className="footer__links">
              <Link to={localePath('/mentions-legales')} className={FooterLinkStyle} onClick={() => window.scrollTo(0, 0)}>{t.footer.legalLink}</Link>
              <a href="https://instagram.com/artiste" target="_blank" rel="noopener noreferrer" className={`${FooterLinkStyle} footer__instagram-link`}>
                <Instagram size={16} />
                <span>{t.contact.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
