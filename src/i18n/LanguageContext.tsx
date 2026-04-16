import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router';
import { fr, type Translations } from './fr';
import { en } from './en';

type Lang = 'fr' | 'en';

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  /** Build a localised path: prefix with /en for English, keep as-is for French */
  localePath: (frPath: string) => string;
  /** The other language code (for the switcher) */
  otherLang: Lang;
  /** URL to switch to the other language on the same page */
  switchUrl: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Detect language from current URL pathname.
 * Anything starting with /en/ (or exactly /en) is English; everything else is French.
 */
function detectLang(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

/**
 * Map an English route back to its French equivalent (for the lang switcher).
 */
const enToFrSlug: Record<string, string> = {
  '/en': '/',
  '/en/gallery': '/galerie',
  '/en/biography': '/biographie',
  '/en/blog': '/blog',
  '/en/contact': '/contact',
  '/en/legal-notice': '/mentions-legales',
};

const frToEnSlug: Record<string, string> = {
  '/': '/en',
  '/galerie': '/en/gallery',
  '/biographie': '/en/biography',
  '/blog': '/en/blog',
  '/contact': '/en/contact',
  '/mentions-legales': '/en/legal-notice',
};

/**
 * Build the equivalent URL in the other language.
 * Handles dynamic segments like /galerie/collection/:slug and /galerie/:id.
 */
function buildSwitchUrl(pathname: string, currentLang: Lang): string {
  if (currentLang === 'fr') {
    // FR → EN: check static routes first
    if (frToEnSlug[pathname]) return frToEnSlug[pathname];
    // Dynamic: /galerie/collection/:slug → /en/gallery/collection/:slug
    if (pathname.startsWith('/galerie/collection/')) {
      return pathname.replace('/galerie/collection/', '/en/gallery/collection/');
    }
    // Dynamic: /galerie/:id → /en/gallery/:id
    if (pathname.startsWith('/galerie/')) {
      return pathname.replace('/galerie/', '/en/gallery/');
    }
    // Dynamic: /blog/:slug → /en/blog/:slug
    if (pathname.startsWith('/blog/')) {
      return pathname.replace('/blog/', '/en/blog/');
    }
    // Fallback
    return '/en' + pathname;
  } else {
    // EN → FR: check static routes first
    if (enToFrSlug[pathname]) return enToFrSlug[pathname];
    // Dynamic: /en/gallery/collection/:slug → /galerie/collection/:slug
    if (pathname.startsWith('/en/gallery/collection/')) {
      return pathname.replace('/en/gallery/collection/', '/galerie/collection/');
    }
    // Dynamic: /en/gallery/:id → /galerie/:id
    if (pathname.startsWith('/en/gallery/')) {
      return pathname.replace('/en/gallery/', '/galerie/');
    }
    // Dynamic: /en/blog/:slug → /blog/:slug
    if (pathname.startsWith('/en/blog/')) {
      return pathname.replace('/en/blog/', '/blog/');
    }
    // Fallback: strip /en prefix
    return pathname.replace(/^\/en/, '') || '/';
  }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const value = useMemo<LanguageContextValue>(() => {
    const lang = detectLang(pathname);
    const t = lang === 'en' ? en : fr;
    const otherLang: Lang = lang === 'en' ? 'fr' : 'en';
    const switchUrl = buildSwitchUrl(pathname, lang);

    const localePath = (frPath: string): string => {
      if (lang === 'fr') return frPath;
      // Convert French path to English path
      if (frToEnSlug[frPath]) return frToEnSlug[frPath];
      if (frPath.startsWith('/galerie/collection/')) {
        return frPath.replace('/galerie/collection/', '/en/gallery/collection/');
      }
      if (frPath.startsWith('/galerie/')) {
        return frPath.replace('/galerie/', '/en/gallery/');
      }
      if (frPath.startsWith('/blog/')) {
        return frPath.replace('/blog/', '/en/blog/');
      }
      if (frPath.startsWith('/contact')) {
        return frPath.replace('/contact', '/en/contact');
      }
      return '/en' + frPath;
    };

    return { lang, t, localePath, otherLang, switchUrl };
  }, [pathname]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to access the current language, translations, and helper functions.
 *
 * Usage:
 *   const { t, lang, localePath, switchUrl } = useLanguage();
 *   <h1>{t.hero.title}</h1>
 *   <Link to={localePath('/galerie')}>…</Link>
 *   <Link to={switchUrl}>{otherLang.toUpperCase()}</Link>
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a <LanguageProvider>');
  }
  return ctx;
}
