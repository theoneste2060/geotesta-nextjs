'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

/* Static assistant: answers a fixed list of questions. No AI, no server.
   Edit the QA list to change what it says. Answers come from the site's own
   pages (FAQ, Lab, Contact). Items marked "to confirm" need the Lab Lead. */
const WA = 'https://wa.me/250788354909?text=' + encodeURIComponent('Hello GeoTesta, I have a question.');

const QA = [
  {
    q: 'Which services do you offer?',
    a: [
      'We offer eight services: site investigation, laboratory testing, foundation and concrete testing, slope stability and retaining walls, pavement design, structural audit, mining geotechnics, and environmental impact assessment.',
    ],
    link: { href: '/services', label: 'See all services' },
  },
  {
    q: 'Is your laboratory RSB-designated?',
    a: [
      'Yes. GeoTesta is an RSB-designated testing laboratory (ISO/IEC 17025), certificate 001/RSB/LDS/COD/2026-2027, valid 27 Aug 2026 to 26 Aug 2031.',
      'The designation covers only the test methods listed in Annex A of the certificate. It does not cover field investigation.',
    ],
    link: { href: '/testing-lab', label: 'See the Lab page' },
  },
  {
    q: 'How do I request a quote?',
    a: [
      'Tell us about your site and the type of work using the form on the Contact page. We reply with questions and what we need to prepare a quote. You can also send the details on WhatsApp.',
    ],
    link: { href: '/contact', label: 'Open the quote form' },
  },
  {
    q: 'Which tests does my project need?',
    a: [
      'It depends on the structure, the ground and the design questions. Send us the location and the type of work and our engineers recommend the tests.',
    ],
    link: { href: '/contact', label: 'Tell us about your site' },
  },
  {
    q: 'How do I submit samples?',
    a: [
      'The Lab page has a Submit samples section with the steps. If you are unsure what to send or how to pack it, contact us first and we will advise.',
    ],
    link: { href: '/testing-lab#submit-samples', label: 'How to submit samples' },
  },
  {
    q: 'How long does a report take?',
    a: [
      'It depends on the tests and the number of samples. Tell us what you need and we confirm a timeline when we reply to your request.',
    ],
  },
  {
    q: 'Which standards do you follow?',
    a: [
      'Test methods follow ASTM, BS and IS standards, within the approved scope. The test catalogue shows which tests are inside the RSB designation.',
    ],
    link: { href: '/testing-lab#catalogue', label: 'See the test catalogue' },
  },
  {
    q: 'What is Proctor compaction?',
    a: [
      'A laboratory test that finds how much water a soil needs to be compacted to its highest dry density. The results are the optimum moisture content (OMC) and the maximum dry density (MDD). They are used to specify and check compaction of fill, subgrades and embankments.',
    ],
  },
  {
    q: 'Where are you based?',
    a: [
      'GeoTesta LTD is at Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda. Open Monday to Friday 8:00 to 17:00 and Saturday 9:00 to 13:00.',
    ],
    link: { href: '/contact', label: 'Contact details' },
  },
  {
    q: 'How can I contact you?',
    a: [
      'Phone +250 788 354 909 or +250 785 468 208, email info@geotesta.rw, or message us on WhatsApp.',
    ],
    link: { href: '/contact', label: 'Open the Contact page' },
  },
  {
    q: 'How much work have you done?',
    a: [
      'More than 500 project assignments across Rwanda. The project register lists 67 references from 2022 to 2026 that you can search by district, client or type of work.',
    ],
    link: { href: '/projects', label: 'See the projects' },
  },
];

export default function FaqBot({ onClose }) {
  const [thread, setThread] = useState([]);
  const panel = useRef(null);
  const log = useRef(null);

  useEffect(() => {
    panel.current?.querySelector('.bot-qs button')?.focus();
  }, []);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [thread]);

  const asked = new Set(thread.map((t) => t.q));
  const remaining = QA.filter((x) => !asked.has(x.q));

  return (
    <section ref={panel} id="bot-panel" className="wa-panel bot-panel" aria-label="GeoTesta assistant: common questions">
      <header className="wa-head bot-head">
        <span className="wa-avatar bot-avatar"><Icon name="bot" /></span>
        <span className="wa-title">
          <b>GeoTesta assistant</b>
          <small>Quick answers to common questions</small>
        </span>
        <button type="button" className="wa-close" aria-label="Close assistant" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </header>
      <div className="bot-log" ref={log} aria-live="polite">
        <p className="bot-msg bot-a">Hello, I can answer common questions about GeoTesta. Pick a question below.</p>
        {thread.map((t) => (
          <div key={t.q}>
            <p className="bot-msg bot-q">{t.q}</p>
            <div className="bot-msg bot-a">
              {t.a.map((line, i) => <p key={i}>{line}</p>)}
              {t.link && <Link className="bot-link" href={t.link.href} onClick={onClose}>{t.link.label}</Link>}
            </div>
          </div>
        ))}
        {thread.length > 0 && (
          <p className="bot-msg bot-a">
            {remaining.length ? 'Anything else?' : 'That is everything I can answer here.'}{' '}
            <a className="bot-link" href={WA} target="_blank" rel="noopener">Ask a person on WhatsApp</a>
          </p>
        )}
      </div>
      <div className="bot-qs">
        {remaining.length > 0 ? (
          <>
            <p className="bot-qs-h">Questions</p>
            <ul>
              {remaining.map((x) => (
                <li key={x.q}><button type="button" onClick={() => setThread((t) => [...t, x])}>{x.q}</button></li>
              ))}
            </ul>
          </>
        ) : null}
        {thread.length > 0 && (
          <button type="button" className="bot-reset" onClick={() => setThread([])}>Start again</button>
        )}
      </div>
    </section>
  );
}
