import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n';

const FlagFR: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 30 20" aria-hidden="true" style={{ borderRadius: 2, display: 'block' }}>
    <rect width="10" height="20" fill="#002395" />
    <rect x="10" width="10" height="20" fill="#fff" />
    <rect x="20" width="10" height="20" fill="#ED2939" />
  </svg>
);

const FlagGB: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 50 30" aria-hidden="true" style={{ borderRadius: 2, display: 'block' }}>
    <rect width="50" height="30" fill="#012169" />
    <path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L50,30 M50,0 L0,30" stroke="#C8102E" strokeWidth="2" />
    <path d="M25,0 V30 M0,15 H50" stroke="#fff" strokeWidth="10" />
    <path d="M25,0 V30 M0,15 H50" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const DESKTOP_BREAKPOINT = 768;

const isActive = (pathname: string, to: string) => {
  if (to === '/' || to === '/en') return pathname === to;
  return pathname.startsWith(to);
};

export const Header: React.FC = () => {
  const location = useLocation();
  const { t, localePath, switchUrl, otherLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: localePath('/'), label: t.nav.home },
    { to: localePath('/galerie'), label: t.nav.gallery },
    { to: localePath('/biographie'), label: t.nav.biography },
    { to: localePath('/blog'), label: t.nav.blog },
    { to: localePath('/contact'), label: t.nav.contact },
  ];

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handleChange = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setMobileMenuOpen(false);
    };
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="header__logo"
        >
          <Link to={localePath('/')} onClick={handleNavClick}>
            <img src="/images/logo.png" alt={t.nav.logoAlt} className="header__logo-img" />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <ul className="header__desktop-nav">
          {navItems.map((item) => (
            <li key={item.to}>
              <div className="header__nav-link-wrap">
                <Link
                  to={item.to}
                  onClick={handleNavClick}
                  className={`header__nav-link ${isActive(location.pathname, item.to) ? 'header__nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
                <span className="header__underline" />
              </div>
            </li>
          ))}
          {/* Language switcher */}
          <li>
            <Link
              to={switchUrl}
              className="header__lang-switch"
              onClick={() => window.scrollTo(0, 0)}
              aria-label={otherLang === 'en' ? 'English' : 'Français'}
            >
              {otherLang === 'en' ? <FlagGB /> : <FlagFR />}
            </Link>
          </li>
        </ul>

        {/* Burger */}
        <button
          className="header__burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={t.nav.menuAriaLabel}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="header__backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="header__mobile-panel"
            >
              <ul className="header__mobile-list">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={handleNavClick}
                      className={`header__mobile-link ${
                        isActive(location.pathname, item.to) ? 'header__mobile-link--active' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* Mobile language switcher */}
                <li>
                  <Link
                    to={switchUrl}
                    onClick={handleNavClick}
                    className="header__mobile-link"
                    aria-label={otherLang === 'en' ? 'English' : 'Français'}
                  >
                    {otherLang === 'en' ? <FlagGB size={18} /> : <FlagFR size={18} />}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
