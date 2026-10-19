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
    kw: 'service offer do you do provide work site investigation boreholes trial pit',
    a: [
      'We offer eight services: site investigation, laboratory testing, foundation and concrete testing, slope stability and retaining walls, pavement design, structural audit, mining geotechnics, and environmental impact assessment.',
    ],
    link: { href: '/services', label: 'See all services' },
  },
  {
    q: 'Is your laboratory RSB-designated?',
    kw: 'rsb designat accredit iso 17025 certificate licens approved annex',
    a: [
      'Yes. GeoTesta is an RSB-designated testing laboratory (ISO/IEC 17025), certificate 001/RSB/LDS/COD/2026-2027, valid 27 Aug 2026 to 26 Aug 2031.',
      'The designation covers only the test methods listed in Annex A of the certificate. It does not cover field investigation.',
    ],
    link: { href: '/testing-lab', label: 'See the Lab page' },
  },
  {
    q: 'How do I request a quote?',
    kw: 'quote price cost estimate request fee how much charge pay',
    a: [
      'Tell us about your site and the type of work using the form on the Contact page. We reply with questions and what we need to prepare a quote. You can also send the details on WhatsApp.',
    ],
    link: { href: '/contact', label: 'Open the quote form' },
  },
  {
    q: 'Which tests does my project need?',
    kw: 'which test need recommend what test',
    a: [
      'It depends on the structure, the ground and the design questions. Send us the location and the type of work and our engineers recommend the tests.',
    ],
    link: { href: '/contact', label: 'Tell us about your site' },
  },
  {
    q: 'How do I submit samples?',
    kw: 'sample submit send bring deliver pack drop',
    a: [
      'The Lab page has a Submit samples section with the steps. If you are unsure what to send or how to pack it, contact us first and we will advise.',
    ],
    link: { href: '/testing-lab#submit-samples', label: 'How to submit samples' },
  },
  {
    q: 'How long does a report take?',
    kw: 'report take long time turnaround days results ready when how soon',
    a: [
      'It depends on the tests and the number of samples. Tell us what you need and we confirm a timeline when we reply to your request.',
    ],
  },
  {
    q: 'Which standards do you follow?',
    kw: 'standard astm bs is method follow',
    a: [
      'Test methods follow ASTM, BS and IS standards, within the approved scope. The test catalogue shows which tests are inside the RSB designation.',
    ],
    link: { href: '/testing-lab#catalogue', label: 'See the test catalogue' },
  },
  {
    q: 'What is Proctor compaction?',
    kw: 'proctor compaction compact omc mdd density moisture',
    a: [
      'A laboratory test that finds how much water a soil needs to be compacted to its highest dry density. The results are the optimum moisture content (OMC) and the maximum dry density (MDD). They are used to specify and check compaction of fill, subgrades and embankments.',
    ],
  },
  {
    q: 'Where are you based?',
    kw: 'where based located location address office find directions visit hours open',
    a: [
      'GeoTesta LTD is at Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda. Open Monday to Friday 8:00 to 17:00 and Saturday 9:00 to 13:00.',
    ],
    link: { href: '/contact', label: 'Contact details' },
  },
  {
    q: 'How can I contact you?',
    kw: 'contact phone call email whatsapp reach number',
    a: [
      'Phone +250 788 354 909 or +250 785 468 208, email info@geotesta.rw, or message us on WhatsApp.',
    ],
    link: { href: '/contact', label: 'Open the Contact page' },
  },
  {
    q: 'How much work have you done?',
    kw: 'experience project assignment how many much work done record clients',
    a: [
      'More than 500 project assignments across Rwanda. The project register lists 67 references from 2022 to 2026 that you can search by district, client or type of work.',
    ],
    link: { href: '/projects', label: 'See the projects' },
  },
];

const STOP = new Set(['the','a','an','do','you','your','i','we','is','are','to','of','and','or','for','in','on','can','how','what','which','my','me','it','with','at','be','does','will','would','please','hi','hello']);

/* Match typed text to the closest answer by shared keywords. */
function findAnswer(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 1 && !STOP.has(w));
  let best = null, top = 0;
  QA.forEach((x) => {
    const keys = x.kw.split(' ');
    let score = 0;
    words.forEach((w) => { if (keys.some((k) => k === w || (w.length > 3 && (k.startsWith(w) || w.startsWith(k) && k.length > 3)))) score += 1; });
    if (x.q.toLowerCase().includes(text.toLowerCase().trim()) && text.trim().length > 3) score += 3;
    if (score > top) { top = score; best = x; }
  });
  return top > 0 ? best : null;
}

export default function FaqBot({ onClose }) {
  const [thread, setThread] = useState([]);
  const [draft, setDraft] = useState('');
  const idc = useRef(0);
  const panel = useRef(null);
  const log = useRef(null);

  useEffect(() => {
    panel.current?.querySelector('#bot-input')?.focus();
  }, []);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [thread]);

  const asked = new Set(thread.map((t) => t.src));
  const remaining = QA.filter((x) => !asked.has(x.q));
  const add = (q, x, typed) => setThread((t) => [...t, { id: ++idc.current, q, src: x ? x.q : null, a: x ? x.a : null, link: x ? x.link : null, typed }]);
  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    add(text, findAnswer(text), text);
  };
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
        <p className="bot-msg bot-a">Hello, I can answer common questions about GeoTesta. Pick a question below or type your own.</p>
        {thread.map((t) => (
          <div key={t.id}>
            <p className="bot-msg bot-q">{t.q}</p>
            <div className="bot-msg bot-a">
              {t.a ? t.a.map((line, i) => <p key={i}>{line}</p>) : (
                <>
                  <p>I do not have a ready answer for that. A person can help, so send your question on WhatsApp and the team will reply.</p>
                  <a className="bot-link" href={'https://wa.me/250788354909?text=' + encodeURIComponent('Hello GeoTesta, ' + t.typed)} target="_blank" rel="noopener">Send this on WhatsApp</a>
                </>
              )}
              {t.link && <Link className="bot-link" href={t.link.href} onClick={onClose}>{t.link.label}</Link>}
            </div>
          </div>
        ))}
        {thread.length > 0 && (
          <p className="bot-msg bot-a">
            {remaining.length ? 'Anything else?' : 'Ask another question, or reach the team directly.'}{' '}
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
                <li key={x.q}><button type="button" onClick={() => add(x.q, x)}>{x.q}</button></li>
              ))}
            </ul>
          </>
        ) : null}
        {thread.length > 0 && (
          <button type="button" className="bot-reset" onClick={() => setThread([])}>Start again</button>
        )}
      </div>
      <form className="bot-form" onSubmit={send}>
        <label htmlFor="bot-input" className="sr-only">Type your question</label>
        <input id="bot-input" type="text" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type your question" autoComplete="off" maxLength={200} />
        <button type="submit" className="bot-send" aria-label="Send question" disabled={!draft.trim()}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M3 11.5 20 4l-5 16-3.5-6.5L3 11.5Z" fill="currentColor" />
          </svg>
        </button>
      </form>
    </section>
  );
}
