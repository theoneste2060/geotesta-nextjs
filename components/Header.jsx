'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { useCallback, useEffect, useRef, useState } from 'react';

const starts = (path, ...prefixes) => prefixes.some((p) => path === p || path.startsWith(p + '-'));

export default function Header() {
  const path = usePathname() || '/';
  const [navOpen, setNavOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const nav = useRef(null);
  const btn = useRef(null);
  const sub = useRef(null);
  const subBtn = useRef(null);

  const current = {
    home: path === '/',
    services: starts(path, '/services', '/service'),
    lab: starts(path, '/testing-lab', '/test'),
    projects: starts(path, '/projects', '/project'),
    insights: ['/insights', '/article', '/faq'].includes(path),
    about: path === '/about',
    team: path === '/team',
  };
  const cur = (k) => (current[k] ? 'page' : undefined);

  const closeNav = useCallback((refocus) => {
    setNavOpen(false);
    if (refocus) btn.current?.focus();
  }, []);

  // Close menus after any navigation
  useEffect(() => {
    setNavOpen(false);
    setSubOpen(false);
  }, [path]);

  // Page scroll lock + focus the first link when the drawer opens
  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', navOpen);
    if (navOpen) nav.current?.querySelector('a')?.focus();
    return () => document.documentElement.classList.remove('nav-open');
  }, [navOpen]);

  // Escape and focus trap while the mobile drawer is open
  useEffect(() => {
    if (!navOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { closeNav(true); return; }
      if (e.key !== 'Tab') return;
      const f = [btn.current, ...nav.current.querySelectorAll('a,button')].filter((x) => x && x.offsetParent !== null);
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { f[f.length - 1].focus(); e.preventDefault(); }
      else if (!e.shiftKey && i === f.length - 1) { f[0].focus(); e.preventDefault(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [navOpen, closeNav]);

  // Drawer closes when the layout switches back to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 52.01rem)');
    const onChange = (m) => { if (m.matches) setNavOpen(false); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // About submenu: close on outside click
  useEffect(() => {
    if (!subOpen) return undefined;
    const onDoc = (e) => { if (sub.current && !sub.current.contains(e.target)) setSubOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [subOpen]);

  return (
    <>
    <div className="info-bar">
      <div className="wrap info-bar-in">
        <p className="ib-item ib-addr"><Icon name="pin" /><span>Gihara, Runda Sector, Kamonyi District, Rwanda</span></p>
        <p className="ib-item ib-hours"><Icon name="clock" /><span>Mon to Fri 8:00 to 17:00, Sat 9:00 to 13:00</span></p>
        <p className="ib-item ib-phone"><Icon name="phone" /><span><a href="tel:+250788354909">+250 788 354 909</a><span className="ib-sep"> / </span><a className="ib-phone2" href="tel:+250785468208">+250 785 468 208</a></span></p>
        <p className="ib-item ib-mail"><Icon name="mail" /><span><a href="mailto:info@geotesta.rw">info@geotesta.rw</a></span></p>
      </div>
    </div>
    <header className="site-header">
      <div className="wrap bar">
        <Link className="logo" href="/" aria-label="GeoTesta home">
          <img src="/assets/logo-primary.png" alt="" width="152" height="46" />
        </Link>
        <nav
          id="site-nav"
          ref={nav}
          className={'site-nav' + (navOpen ? ' open' : '')}
          aria-label="Main"
          onClick={(e) => { if (e.target.closest('a')) setNavOpen(false); }}
        >
          <ul>
            <li><Link href="/" aria-current={cur('home')}><Icon name="home" />Home</Link></li>
            <li><Link href="/services" aria-current={cur('services')}><Icon name="layers" />Services</Link></li>
            <li><Link href="/testing-lab" aria-current={cur('lab')}><Icon name="flask" />Lab</Link></li>
            <li><Link href="/projects" aria-current={cur('projects')}><Icon name="briefcase" />Projects</Link></li>
            <li><Link href="/insights" aria-current={cur('insights')}><Icon name="book" />Insights</Link></li>
            <li
              ref={sub}
              className={'has-sub' + (subOpen ? ' open' : '')}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && subOpen) { setSubOpen(false); subBtn.current?.focus(); }
              }}
            >
              <Link
                href="/about"
                aria-current={cur('about')}
                className={current.team ? 'parent-current' : undefined}
              >
                <Icon name="info" />
                About
              </Link>
              <button
                ref={subBtn}
                className="sub-toggle"
                type="button"
                aria-expanded={subOpen ? 'true' : 'false'}
                aria-controls="about-sub"
                aria-label="About submenu"
                onClick={() => setSubOpen((o) => !o)}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                  <path d="m5 9 7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className="sub" id="about-sub">
                <li><Link href="/about#company-details"><Icon name="file" />Company details</Link></li>
                <li><Link href="/about#quality"><Icon name="shield" />Quality and impartiality</Link></li>
                <li><Link href="/team" aria-current={cur('team')}><Icon name="users" />Team</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <button
          ref={btn}
          className="menu-btn"
          type="button"
          aria-expanded={navOpen ? 'true' : 'false'}
          aria-controls="site-nav"
          onClick={() => (navOpen ? closeNav(true) : setNavOpen(true))}
        >
          <span className="sr-only">{navOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="bars" aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
    </header>
    </>
  );
}
