'use client';

import { usePathname } from 'next/navigation';

/* A few pages carry a page class that the stylesheet scopes its rules to
   (.contact-page, .about-page, ...). The class sits on a wrapper that wraps the
   whole page (header to footer) and takes no space of its own (display: contents),
   so it is correct in the prerendered HTML and after client-side navigation. */
const BODY_CLASS = {
  '/about': 'about-page',
  '/contact': 'contact-page',
  '/faq': 'faq-page',
  '/legal': 'legal-page',
  '/team': 'team-page',
};

export default function PageClass({ children }) {
  const path = usePathname() || '/';
  return (
    <div className={BODY_CLASS[path]} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
