import Link from 'next/link';

export const metadata = {
  title: { absolute: "Legal | GeoTesta" },
  description: "GeoTesta legal pages and sitemap.",
  openGraph: { title: "Legal | GeoTesta", description: "GeoTesta legal pages and sitemap.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-head">
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Legal
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Legal
          </h1>
          <p className="lead">
            Disclaimer, privacy, terms, accessibility and sitemap.
          </p>
        </div>
      </section>
      <div className="wrap editorial-layout legal-layout">
        <nav aria-label="Legal sections" className="section-index">
          <p className="eyebrow">
            Legal and site information
          </p>
          <a href="#disclaimer">
            Disclaimer
          </a>
          <a href="#privacy">
            Privacy Policy
          </a>
          <a href="#terms">
            Terms of Use
          </a>
          <a href="#accessibility">
            Accessibility
          </a>
          <a href="#sitemap">
            Sitemap
          </a>
        </nav>
        <div className="legal-content">
          <section className="block" id="disclaimer">
            <h2>
              Disclaimer
            </h2>
            <p>
              <span className="tbc">
                [Disclaimer text, from the MD or web team]
              </span>
            </p>
          </section>
          <section className="block" id="privacy">
            <h2>
              Privacy Policy
            </h2>
            <p>
              <span className="tbc">
                [Privacy Policy text, from the MD or web team]
              </span>
            </p>
          </section>
          <section className="block" id="terms">
            <h2>
              Terms of Use
            </h2>
            <p>
              <span className="tbc">
                [Terms of Use text, from the MD or web team]
              </span>
            </p>
          </section>
          <section className="block" id="accessibility">
            <h2>
              Accessibility
            </h2>
            <p>
              <span className="tbc">
                [Accessibility statement, to be written once the accessibility targets are tested]
              </span>
            </p>
          </section>
          <section className="block" id="sitemap">
            <h2>
              Sitemap
            </h2>
            <ul className="sitemap-links">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/service-site-investigation">
                  {"  Site investigation"}
                </Link>
              </li>
              <li>
                <Link href="/testing-lab">
                  {"  Laboratory testing"}
                </Link>
              </li>
              <li>
                <Link href="/service-foundation-concrete">
                  {"  Foundation and concrete testing"}
                </Link>
              </li>
              <li>
                <Link href="/service-slope-retaining">
                  {"  Slope stability and retaining walls"}
                </Link>
              </li>
              <li>
                <Link href="/service-pavement-design">
                  {"  Pavement design"}
                </Link>
              </li>
              <li>
                <Link href="/service-structural-audit">
                  {"  Structural audit"}
                </Link>
              </li>
              <li>
                <Link href="/service-mining-geotechnics">
                  {"  Mining geotechnics"}
                </Link>
              </li>
              <li>
                <Link href="/service-eia">
                  {"  Environmental impact assessment"}
                </Link>
              </li>
              <li>
                <Link href="/testing-lab">
                  Lab
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  Legal pages
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
