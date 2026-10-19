'use client';

import { useRef, useState } from 'react';
import { FORMSPREE, sendToFormspree } from '@/lib/forms';

/* Newsletter signup. Sends the address to Formspree (see lib/forms.js). */
export default function NewsForm({ id }) {
  const input = useRef(null);
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const v = input.current.value.trim();
    if (!v || v.indexOf('@') < 1) {
      setInvalid(true);
      setMessage('Enter a valid email address.');
      input.current.focus();
      return;
    }
    setInvalid(false);
    setSending(true);
    setMessage('');
    const ok = await sendToFormspree(FORMSPREE.newsletter, {
      email: v,
      _subject: 'GeoTesta website: newsletter signup',
      page: window.location.pathname,
    });
    setSending(false);
    if (ok) {
      input.current.value = '';
      setMessage('Thank you. You are subscribed.');
    } else {
      setInvalid(true);
      setMessage('Could not subscribe just now. Please try again.');
    }
  }

  return (
    <form className="news-form" noValidate onSubmit={onSubmit}>
      <p className="news-note" id={`${id}-note`}>
        Get new Insights articles, project updates and company news from GeoTesta by email.
      </p>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email address</label>
        <input
          id={`${id}-email`}
          ref={input}
          type="email"
          aria-describedby={`${id}-note ${id}-status`}
          autoComplete="email"
          aria-invalid={invalid ? 'true' : undefined}
        />
        <p className="error" id={`${id}-status`} role="status">{message}</p>
      </div>
      <div>
        <button className="btn btn-quiet" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Subscribe'}</button>
      </div>
    </form>
  );
}
