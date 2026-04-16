import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Calendar, ChevronDown } from 'lucide-react';
import Markdown from 'markdown-to-jsx';
import { SectionLabel, NavLinkStyle } from './ui/ArtistUI';
import { ImageWithFallback } from './figma/ImageWithFallback';
import articlesData from '../blog-articles.json';
import { useLanguage } from '../i18n';

export const articles = articlesData;

/* ── FAQ Item Component ──────────────────────────────────────── */

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown size={20} className="faq-item__icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-item__answer">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Blog listing ─────────────────────────────── */

export const Blog: React.FC = () => {
  const { t, localePath } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(t.locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="blog">
      <div className="container">
        <div className="blog__header">
          <SectionLabel>{t.blog.label}</SectionLabel>
          <h1 className="blog__title">{t.blog.title}</h1>
          <p className="blog__intro">
            {t.blog.intro}
          </p>
        </div>

        <div className="blog__grid">
          {articles.map((article, index) => {
            const translated = t.blogArticles[article.slug];
            const title = translated ? translated.title : article.title;
            const description = translated ? translated.description : article.description;
            return (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={localePath(`/blog/${article.slug}`)}
                  className="blog-card"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="blog-card__image-wrap">
                    <ImageWithFallback
                      src={article.image}
                      alt={title}
                      className="blog-card__image"
                    />
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__date">
                      <Calendar size={14} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h2 className="blog-card__title">{title}</h2>
                    <p className="blog-card__desc">{description}</p>
                    <span className="blog-card__read">{t.blog.readArticle}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {articles.length === 0 && (
          <p className="blog__empty">{t.blog.empty}</p>
        )}
      </div>
    </section>
  );
};

/* ── Blog article detail ──────────────────────── */

export const BlogArticle: React.FC = () => {
  const { slug } = useParams();
  const { t, localePath } = useLanguage();
  const article = articles.find((a) => a.slug === slug);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(t.locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (!article) {
    return (
      <div className="blog-article">
        <div className="container">
          <Link to={localePath('/blog')} className={`detail__back ${NavLinkStyle}`}>
            <ChevronLeft size={16} />
            <span>{t.blog.backToBlog}</span>
          </Link>
          <p>{t.blog.notFound}</p>
        </div>
      </div>
    );
  }

  const translated = t.blogArticles[article.slug];
  const content = translated ? translated.content : article.content;
  const faqItems = translated ? translated.faq : (article as any).faq;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-article"
    >
      <div className="container">
        <Link
          to={localePath('/blog')}
          className={`detail__back ${NavLinkStyle}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <ChevronLeft size={16} />
          <span>{t.blog.backToBlog}</span>
        </Link>

        <article className="blog-article__layout">
          <div className="blog-article__hero">
            <ImageWithFallback
              src={article.image}
              alt={translated ? translated.title : article.title}
              className="blog-article__hero-img"
            />
          </div>

          <div className="blog-article__meta">
            <div className="blog-card__date">
              <Calendar size={14} />
              <span>{formatDate(article.date)}</span>
            </div>
          </div>

          <div className="blog-article__prose">
            <Markdown
              options={{
                overrides: {
                  a: { props: { target: '_blank', rel: 'noopener noreferrer' } },
                },
              }}
            >
              {content}
            </Markdown>
          </div>

          {/* FAQ Section */}
          {faqItems && faqItems.length > 0 && (
            <div className="blog-article__faq">
              <div className="blog-article__faq-header">
                <SectionLabel>{t.blog.faqLabel}</SectionLabel>
                <h2 className="blog-article__faq-title">{t.blog.faqTitle}</h2>
              </div>
              <div className="blog-article__faq-list">
                {faqItems.map((item: { question: string; answer: string }, index: number) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </motion.div>
  );
};
