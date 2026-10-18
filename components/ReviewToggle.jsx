'use client';

import { useEffect, useState } from 'react';

/* Prototype review aid: highlights open items (yellow notes). Remember the
   choice per browser. Delete this component and the .proto-* CSS at launch. */
export default function ReviewToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    try { setOn(localStorage.getItem('geotesta-review') === '1'); } catch (e) {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('show-tbc', on);
  }, [on]);

  function toggle() {
    const next = !on;
    setOn(next);
    try { localStorage.setItem('geotesta-review', next ? '1' : '0'); } catch (e) {}
  }

  return (
    <button
      className="proto-toggle"
      id="proto-toggle"
      type="button"
      aria-pressed={on ? 'true' : 'false'}
      onClick={toggle}
    >
      Open items: {on ? 'shown' : 'hidden'}
    </button>
  );
}
