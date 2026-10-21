/* Brand glyphs for the social links. Decorative: the link carries the name. */
export default function SocialIcon({ name, className = '' }) {
  const common = { viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false', className: 'social-icon ' + className };
  if (name === 'instagram') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === 'x') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  /* whatsapp */
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.2 8.6c.3-.6.8-.7 1.1-.2l.7 1.2c.2.4.1.7-.2 1l-.4.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.4c.3-.3.6-.3 1 0l1.2.7c.5.3.4.8-.2 1.1-1.1.7-2.5.5-3.8-.2-1.7-.9-3-2.3-3.7-4-.3-1-.2-1.9.3-2.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
