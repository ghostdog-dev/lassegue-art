import React from 'react';

/* ── Buttons ─────────────────────────────────────────────────────── */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/** Black CTA button — used across Hero, Gallery, Biography, Footer */
export const ButtonPrimary: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`btn-primary ${className}`} {...props}>
    {children}
  </button>
);

/** Border CTA button — Hero "Découvrir", Biography CTA */
export const ButtonSecondary: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`btn-secondary ${className}`} {...props}>
    {children}
  </button>
);

/** Full-width black submit button — Contact form, ArtworkDetail */
export const ButtonSubmit: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`btn-submit ${className}`} {...props}>
    {children}
  </button>
);

/* ── Form elements ───────────────────────────────────────────────── */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Transparent input with bottom border — Contact form */
export const FormInput: React.FC<InputProps> = ({ className = '', ...props }) => (
  <input className={`form-input ${className}`} {...props} />
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Transparent textarea with bottom border — Contact form */
export const FormTextarea: React.FC<TextareaProps> = ({ className = '', ...props }) => (
  <textarea className={`form-textarea ${className}`} {...props} />
);

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase label — form fields, info fields */
export const FormLabel: React.FC<LabelProps> = ({ children, className = '' }) => (
  <label className={`form-label ${className}`}>
    {children}
  </label>
);

/* ── Typography ──────────────────────────────────────────────────── */

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div';
}

/** Section label — "Parcours", "Contact", "Immersion" */
export const SectionLabel: React.FC<TextProps> = ({ children, className = '', as: Tag = 'span' }) => (
  <Tag className={`section-label ${className}`}>
    {children}
  </Tag>
);

/** Detail info label — ArtworkDetail "Technique", "Disponibilité" */
export const DetailInfoLabel: React.FC<TextProps> = ({ children, className = '', as: Tag = 'p' }) => (
  <Tag className={`detail-info-label ${className}`}>
    {children}
  </Tag>
);

/** Navigation link style class name */
export const NavLinkStyle = "nav-link-style";

/** Small footer link style class name */
export const FooterLinkStyle = "footer-link-style";
