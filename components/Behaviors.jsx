'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* Page behaviours that enhance the server-rendered markup. They are bound after
   each navigation and fully removed on cleanup (AbortController), so they are
   safe under React Strict Mode and client-side routing.

   Covers: hero slideshow, scroll reveal, quote forms (WhatsApp hand-off) and
   prefill, Insights filter, project gallery and lightbox, project register
   (search, filters, pagination) and the Lab test catalogue search. */
const WA = '250788354909';

function init(signal) {
  const d = document;
  const on = (el, type, fn) => el && el.addEventListener(type, fn, { signal });
  const $ = (s, r = d) => r.querySelector(s);
  const $$ = (s, r = d) => Array.prototype.slice.call(r.querySelectorAll(s));
  const cleanups = [];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky header depth: mark the page once it has scrolled */
  const root = d.documentElement;
  const onScroll = () => { if (window.scrollY > 8) root.setAttribute('data-scrolled', ''); else root.removeAttribute('data-scrolled'); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true, signal });
  cleanups.push(() => root.removeAttribute('data-scrolled'));

  /* Number counters: count up to the written value when scrolled into view.
     The markup keeps the final text, so nothing changes without scripting. */
  const counted = new WeakSet();
  const countUp = (el) => {
    if (counted.has(el)) return;
    counted.add(el);
    const m = /^(\d+)(\+?)$/.exec(el.textContent.trim());
    if (!m) return;
    const end = parseInt(m[1], 10);
    if (end >= 1900 || end < 3) return;          /* skip years and tiny values */
    const t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * e) + m[2];
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    cleanups.push(() => { cancelAnimationFrame(raf); el.textContent = m[1] + m[2]; });
  };

  /* Scroll reveal with stagger. Skipped when reduced motion is requested. */
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(
      (es) => es.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add('in');
        $$('.stat b, .c-num', el).forEach(countUp);
        io.unobserve(el);
      }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    const groups = ['.svc-grid > li', '.flow > li', '.band-grid > div', '.atiles > li', '.post-cards > li', '.stats > li', '.facts > div'];
    const singles = ['main .block', 'main .card', 'main .pcard', 'main .tile', 'main .person', 'main .sec-head', '.why-copy', '.why-photo',
      '.cta-copy', '.cta-form', '.chart', 'main .sub-h'];
    const seen = new Set();
    const watch = (el, delay) => {
      if (seen.has(el)) return;
      seen.add(el);
      if (el.classList.contains('in') || el.getBoundingClientRect().top <= window.innerHeight) {
        /* already on screen at load: run counters and bars straight away */
        el.classList.add('anim', 'in');
        $$('.stat b, .c-num', el).forEach(countUp);
        return;
      }
      el.classList.add('reveal', 'anim');
      if (delay) el.style.setProperty('--d', delay);
      io.observe(el);
    };
    groups.forEach((g) => $$('main ' + g + ', ' + g).forEach((el, i, all) => watch(el, i % (g.includes('flow') ? 6 : g.includes('stats') ? 2 : 4))));
    singles.forEach((s) => $$(s).forEach((el) => watch(el, 0)));
    $$('.chart .c-bar i').forEach((bar, i) => bar.style.setProperty('--i', i));
    cleanups.push(() => io.disconnect());
  }

  /* Hero slideshow: advances every 20 seconds. Pauses on hover and keyboard focus,
     when the tab is hidden, after the pause button is used, and never autoplays
     when reduced motion is requested. */
  const slider = $('.slider');
  if (slider) {
    const track = $('.slides', slider), slides = $$('.slide', slider), dots = $$('.dot', slider),
      status = $('.slider-status', slider), n = slides.length;
    let cur = 0;
    const show = (k, announce) => {
      cur = (k + n) % n;
      track.style.transform = 'translateX(-' + cur * 100 + '%)';
      slides.forEach((s, j) => s.setAttribute('aria-hidden', j === cur ? 'false' : 'true'));
      dots.forEach((b, j) => { if (j === cur) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
      if (announce) status.textContent = 'Photo ' + (cur + 1) + ' of ' + n;
    };
    on($('.prev', slider), 'click', () => show(cur - 1, true));
    on($('.next', slider), 'click', () => show(cur + 1, true));
    dots.forEach((b, j) => on(b, 'click', () => show(j, true)));
    on(slider, 'keydown', (e) => {
      if (e.key === 'ArrowLeft') { show(cur - 1, true); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { show(cur + 1, true); e.preventDefault(); }
    });
    let x0 = null;
    on(slider, 'pointerdown', (e) => { x0 = e.clientX; });
    on(slider, 'pointerup', (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1), true);
    });
    on(slider, 'pointercancel', () => { x0 = null; });
    show(0, false);

    const INTERVAL = 20000;
    let timer = null, userPaused = false, hovering = false, focusing = false;
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const canRun = () => !userPaused && !hovering && !focusing && !d.hidden;
    const start = () => { stop(); if (canRun()) timer = setInterval(() => show(cur + 1, false), INTERVAL); };
    const ctrl = $('.hero-ctrl', slider);
    let toggle = null;
    const paint = () => {
      if (!toggle) return;
      toggle.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
      toggle.innerHTML = userPaused
        ? '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>'
        : '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg>';
    };
    if (!reduce && n > 1) {
      if (ctrl) {
        toggle = d.createElement('button');
        toggle.type = 'button';
        toggle.className = 'slider-btn slider-toggle';
        ctrl.appendChild(toggle);
        paint();
        on(toggle, 'click', () => { userPaused = !userPaused; paint(); start(); });
        cleanups.push(() => toggle.remove());
      }
      on(slider, 'pointerenter', () => { hovering = true; stop(); });
      on(slider, 'pointerleave', () => { hovering = false; start(); });
      on(slider, 'focusin', () => { focusing = true; stop(); });
      on(slider, 'focusout', () => { focusing = false; start(); });
      on(d, 'visibilitychange', start);
      /* any manual change restarts the 20 second count */
      ['click', 'keydown', 'pointerup'].forEach((t) => on(slider, t, () => { if (timer) start(); }));
      start();
      cleanups.push(stop);
    }
    const eager = () => $$('img[loading="lazy"]', slider).forEach((im) => { im.loading = 'eager'; });
    if (d.readyState === 'complete') eager(); else on(window, 'load', eager);
  }

  /* Quote forms: build a WhatsApp message for now */
  $$('form.quote-form').forEach((form) => {
    const done = form.parentNode.querySelector('.done');
    const els = $$('[data-label]', form);
    on(form, 'submit', (e) => {
      e.preventDefault();
      let first = null;
      const lines = ['Quote request from the GeoTesta website'];
      els.forEach((el) => {
        const err = d.getElementById(el.id + '-err'), v = (el.value || '').trim();
        if (!v) {
          if (el.hasAttribute('data-optional')) return;
          el.setAttribute('aria-invalid', 'true');
          if (err) err.textContent = el.getAttribute('data-msg');
          if (!first) first = el;
        } else {
          el.removeAttribute('aria-invalid');
          if (err) err.textContent = '';
          lines.push(el.getAttribute('data-label') + ': ' + v);
        }
      });
      if (first) { first.focus(); return; }
      const text = lines.join('\n');
      $('.quote-msg', done).textContent = text;
      $('.quote-wa', done).href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text);
      form.hidden = true; done.hidden = false; done.focus();
    });
    on($('.quote-edit', done), 'click', () => { done.hidden = true; form.hidden = false; els[0].focus(); });
  });

  /* Insights category filter */
  const chips = $$('.chip');
  if (chips.length) {
    const items = $$('.posts li'), fs = d.getElementById('filter-status');
    chips.forEach((ch) => on(ch, 'click', () => {
      const k = ch.getAttribute('data-filter');
      let shown = 0;
      chips.forEach((o) => o.setAttribute('aria-pressed', o === ch ? 'true' : 'false'));
      items.forEach((li) => { const ok = k === 'all' || li.getAttribute('data-cat') === k; li.hidden = !ok; if (ok) shown++; });
      if (fs) fs.textContent = shown + (shown === 1 ? ' post' : ' posts') + ' shown';
    }));
  }

  /* Prefill the quote form from ?service= and ?test= */
  try {
    const qs = new URLSearchParams(location.search), qt = d.getElementById('q-type'), qx = d.getElementById('q-tests');
    if (qt && qs.get('service')) {
      Array.prototype.forEach.call(qt.options, (o) => { if (o.text === qs.get('service')) qt.value = o.value || o.text; });
    }
    if (qx && qs.get('test')) qx.value = qs.get('test');
  } catch (e) {}

  /* Project gallery: filter + lightbox */
  const gal = $('.gallery');
  if (gal) {
    const gitems = $$('li', gal), gch = $$('.gchip'), lb = d.getElementById('lightbox');
    let shown = [], gi = 0;
    gch.forEach((ch) => on(ch, 'click', () => {
      const k = ch.getAttribute('data-gfilter');
      gch.forEach((o) => o.setAttribute('aria-pressed', o === ch ? 'true' : 'false'));
      gitems.forEach((li) => { li.hidden = !(k === 'all' || li.getAttribute('data-gcat') === k); });
    }));
    const lbShow = (k) => {
      shown = gitems.filter((li) => !li.hidden);
      gi = (k + shown.length) % shown.length;
      const im = $('img', shown[gi]);
      d.getElementById('lb-img').src = im.src; d.getElementById('lb-img').alt = im.alt;
      d.getElementById('lb-cap').textContent = im.alt;
      d.getElementById('lb-count').textContent = gi + 1 + ' of ' + shown.length;
    };
    gitems.forEach((li) => on($('.g-item', li), 'click', () => {
      shown = gitems.filter((x) => !x.hidden);
      if (lb && lb.showModal) { lbShow(shown.indexOf(li)); lb.showModal(); }
    }));
    if (lb) {
      on(d.getElementById('lb-prev'), 'click', () => lbShow(gi - 1));
      on(d.getElementById('lb-next'), 'click', () => lbShow(gi + 1));
      on(d.getElementById('lb-close'), 'click', () => lb.close());
      on(lb, 'click', (e) => { if (e.target === lb) lb.close(); });
      on(lb, 'keydown', (e) => {
        if (e.key === 'ArrowLeft') { lbShow(gi - 1); e.preventDefault(); }
        else if (e.key === 'ArrowRight') { lbShow(gi + 1); e.preventDefault(); }
      });
      cleanups.push(() => { if (lb.open) lb.close(); });
    }
  }

  /* Project register: filter + pagination */
  const rt = d.getElementById('reg-table');
  if (rt) {
    const rq = d.getElementById('reg-q'), ry = d.getElementById('reg-year'), rty = d.getElementById('reg-type'),
      rrows = $$('tbody tr', rt), rc = d.getElementById('reg-count'), rs = d.getElementById('reg-status'),
      pager = d.getElementById('reg-pager'), SIZE = 10;
    let page = 1, hits = [];
    const draw = (focusTop) => {
      const pages = Math.max(1, Math.ceil(hits.length / SIZE));
      if (page > pages) page = pages;
      const from = (page - 1) * SIZE, to = Math.min(from + SIZE, hits.length);
      rrows.forEach((tr) => { tr.hidden = true; });
      hits.slice(from, to).forEach((tr) => { tr.hidden = false; });
      const msg = hits.length
        ? 'Showing ' + (from + 1) + ' to ' + to + ' of ' + hits.length + ' projects'
        : 'No projects match. Clear a filter or change the search.';
      rc.textContent = msg;
      rs.textContent = msg + (pages > 1 ? '. Page ' + page + ' of ' + pages : '');
      pager.replaceChildren();
      pager.hidden = pages < 2;
      if (pages > 1) {
        const mk = (label, p, isCur, dis, aria) => {
          const b = d.createElement('button');
          b.type = 'button'; b.className = 'pg'; b.textContent = label;
          if (aria) b.setAttribute('aria-label', aria);
          if (isCur) b.setAttribute('aria-current', 'page');
          if (dis) b.disabled = true;
          on(b, 'click', () => { page = p; draw(true); });
          pager.appendChild(b);
        };
        mk('Previous', page - 1, false, page === 1, 'Previous page');
        for (let k = 1; k <= pages; k++) mk(String(k), k, k === page, false, 'Page ' + k + (k === page ? ', current page' : ''));
        mk('Next', page + 1, false, page === pages, 'Next page');
      }
      if (focusTop) rt.parentNode.scrollIntoView({ block: 'nearest' });
    };
    const run = () => {
      const q = rq.value.trim().toLowerCase();
      hits = rrows.filter((tr) =>
        (!q || tr.textContent.toLowerCase().indexOf(q) > -1) &&
        (!ry.value || tr.getAttribute('data-year') === ry.value) &&
        (!rty.value || tr.getAttribute('data-type') === rty.value));
      page = 1; draw(false);
    };
    on(rq, 'input', run); on(ry, 'change', run); on(rty, 'change', run); run();
  }

  /* Lab: filter the test catalogue */
  const cq = d.getElementById('cat-q');
  if (cq) {
    const rows = $$('table.cat tbody tr:not(.grp)'), st = d.getElementById('cat-status');
    on(cq, 'input', () => {
      const v = cq.value.trim().toLowerCase();
      let n = 0;
      rows.forEach((r) => { const ok = !v || r.textContent.toLowerCase().indexOf(v) > -1; r.hidden = !ok; if (ok) n++; });
      $$('table.cat tbody').forEach((tb) => { tb.hidden = !$$('tr:not(.grp)', tb).some((r) => !r.hidden); });
      st.textContent = v ? (n ? n + (n === 1 ? ' test' : ' tests') + ' found' : 'No tests match "' + cq.value + '". Ask us, we may still run it.') : '';
    });
  }

  return () => cleanups.forEach((fn) => fn());
}

export default function Behaviors() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);

  /* Every page change starts at the very top, unless the link points at a #section */
  useEffect(() => {
    if (window.location.hash) return;
    const html = document.documentElement;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    html.style.scrollBehavior = '';
  }, [pathname]);

  useEffect(() => {
    const ac = new AbortController();
    const cleanup = init(ac.signal);
    return () => { ac.abort(); cleanup(); };
  }, [pathname]);

  return null;
}
