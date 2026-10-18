'use client';

import { useRef, useState } from 'react';

/* Newsletter signup. Not connected to a mailing service yet: it validates the
   address and says so. Replace onSubmit with a call to your provider. */
export default function NewsForm({ id }) {
  const input = useRef(null);
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const v = input.current.value.trim();
    if (!v || v.indexOf('@') < 1) {
      setInvalid(true);
      setMessage('Enter a valid email address.');
      input.current.focus();
      return;
    }
    setInvalid(false);
    setMessage('Prototype only: this signup is not connected yet, so nothing was saved.');
  }

  return (
    <form className="news-form" noValidate onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email address</label>
        <input
          id={`${id}-email`}
          ref={input}
          type="email"
          autoComplete="email"
          aria-invalid={invalid ? 'true' : undefined}
        />
        <p className="error" id={`${id}-status`} role="status">{message}</p>
      </div>
      <div>
        <button className="btn btn-quiet" type="submit">Subscribe</button>
      </div>
    </form>
  );
}
