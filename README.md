# GeoTesta website (Next.js)

The GeoTesta site as a Next.js App Router project (React 19). Same design, copy and
pages as the static version; URLs lose the `.html` (`/services`, `/contact`, ...) and
old `.html` links redirect.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all 25 pages are prerendered as static HTML)
npm start        # serve the production build
```

Needs Node 20.9 or newer.

## Layout

| Path | What |
| --- | --- |
| `app/layout.jsx` | Shell: fonts, skip link, header, footer, review toggle |
| `app/<page>/page.jsx` | One folder per page, with its own title and description |
| `app/globals.css` | The site stylesheet (unchanged from the static site) |
| `components/Header.jsx` | Navigation, About submenu, mobile drawer, current-page state |
| `components/Footer.jsx` | Footer with FAQ strip, contact details, newsletter |
| `components/NewsForm.jsx` | Newsletter form (not connected to a mailing service yet) |
| `components/Behaviors.jsx` | Hero slideshow, quote forms, gallery lightbox, project register paging, Lab search |
| `components/PageClass.jsx` | Adds the per-page class (`contact-page`, `about-page`, ...) the stylesheet scopes to |
| `components/ReviewToggle.jsx` | "Open items" review aid. Delete at launch with the `.proto-*` CSS |
| `public/assets/` | Photos, logos, certificates and PDFs |

## Notes

- Quote forms still hand off to WhatsApp (no backend). Replace the submit handler in
  `components/Behaviors.jsx` (search `quote-form`) when a form service is chosen.
- Fonts (Inter, Manrope) load from Google Fonts in `app/layout.jsx`.
- Yellow "open item" notes mark content still to be confirmed. Use the button at the
  bottom-left of the page to show them.
