'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import FaqBot from './FaqBot';

/* Floating WhatsApp chat. There is no bot behind it: each quick option opens
   WhatsApp with a ready-made message to the GeoTesta number. */
const NUMBER = '250788354909';
const OPTIONS = [
  { label: 'Request a quote', text: 'Hello GeoTesta, I would like a quote for a project.' },
  { label: 'Submit samples', text: 'Hello GeoTesta, I would like to know how to submit samples to the laboratory.' },
  { label: 'Ask about a test', text: 'Hello GeoTesta, I have a question about a laboratory test.' },
  { label: 'Something else', text: 'Hello GeoTesta, I have a question.' },
];
const href = (text) => `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;

export default function FloatingChat() {
  const [active, setActive] = useState(null); // 'wa' | 'bot' | null
  const open = active === 'wa';
  const bot = active === 'bot';
  const setOpen = (v) => setActive(typeof v === 'function' ? (v(open) ? 'wa' : null) : v ? 'wa' : null);
  const btn = useRef(null);
  const botBtn = useRef(null);
  const panel = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    panel.current?.querySelector('a')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!bot) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { setActive(null); botBtn.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [bot]);

  return (
    <div className="wa-widget">
      {bot && <FaqBot onClose={() => { setActive(null); botBtn.current?.focus(); }} />}
      {open && (
        <section ref={panel} id="wa-panel" className="wa-panel" aria-label="Chat with GeoTesta on WhatsApp">
          <header className="wa-head">
            <span className="wa-avatar"><Icon name="chat" /></span>
            <span className="wa-title">
              <b>GeoTesta</b>
              <small>WhatsApp, Mon to Fri 8:00 to 17:00, Sat 9:00 to 13:00</small>
            </span>
            <button type="button" className="wa-close" aria-label="Close chat" onClick={() => { setOpen(false); btn.current?.focus(); }}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </header>
          <div className="wa-body">
            <p className="wa-bubble">Hello, welcome to GeoTesta. How can we help you today?</p>
            <ul className="wa-options">
              {OPTIONS.map((o) => (
                <li key={o.label}>
                  <a href={href(o.text)} target="_blank" rel="noopener">{o.label}</a>
                </li>
              ))}
            </ul>
            <p className="wa-note">Choosing an option opens WhatsApp with a message ready to send.</p>
          </div>
        </section>
      )}
      <button
        ref={btn}
        type="button"
        className="wa-fab"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls="wa-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
          <path d="M9.2 8.6c.3-.6.8-.7 1.1-.2l.7 1.2c.2.4.1.7-.2 1l-.4.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.4c.3-.3.6-.3 1 0l1.2.7c.5.3.4.8-.2 1.1-1.1.7-2.5.5-3.8-.2-1.7-.9-3-2.3-3.7-4-.3-1-.2-1.9.3-2.4Z" fill="currentColor" stroke="none" />
        </svg>
        <span className="sr-only">{open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}</span>
      </button>
      <button
        ref={botBtn}
        type="button"
        className="wa-fab bot-fab"
        aria-expanded={bot ? 'true' : 'false'}
        aria-controls="bot-panel"
        onClick={() => setActive(bot ? null : 'bot')}
      >
        <Icon name="bot" className="bot-ic" />
        <span className="sr-only">{bot ? 'Close assistant' : 'Ask the GeoTesta assistant'}</span>
      </button>
    </div>
  );
}
