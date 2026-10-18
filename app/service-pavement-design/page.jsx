import Link from 'next/link';

export const metadata = {
  title: { absolute: "Pavement design | GeoTesta" },
  description: "Pavement design. For road agencies, contractors and estate developers.",
  openGraph: { title: "Pavement design | GeoTesta", description: "Pavement design. For road agencies, contractors and estate developers.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
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
                <span aria-current="page">
                  Pavement design
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Pavement design
          </h1>
          <p className="lead">
            For road agencies, contractors and estate developers.
          </p>
          <p className="actions hero-acts">
            <Link href="/contact?service=Pavement%20design" className="btn">
              Talk to a pavement engineer
            </Link>
            <Link href="/testing-lab#catalogue" className="quiet">
              See the test catalogue
            </Link>
          </p>
        </div>
      </section>
      <div className="wrap svc-layout">
        <div className="svc-main">
          <p className="proto-only">
            Open item: The register has road-related work (feeder roads, indicative roads) but no pavement design project. Add a reference if one exists.
          </p>
          <section className="block" id="performance">
            <h2>
              Pavement performance studies
            </h2>
            <p>
              Performance studies and distress investigation for roads and infrastructure.
            </p>
          </section>
          <section className="block" id="maintenance">
            <h2>
              Maintenance management
            </h2>
            <p>
              Helps owners plan maintenance based on pavement condition and subgrade data.
            </p>
          </section>
          <section className="block" id="subgrade">
            <h2>
              Subgrade and material tests
            </h2>
            <p>
              {"Links to the CBR, compaction and classification tests in the "}
              <Link href="/testing-lab#catalogue">
                laboratory catalogue
              </Link>
              .
            </p>
          </section>
        </div>
        <aside className="svc-aside" aria-label="Next steps">
          <div className="aside-box">
            <p className="eyebrow">
              Start a project
            </p>
            <h2 className="aside-h">
              Need pavement design?
            </h2>
            <p>
              Tell us about your site. We reply with questions and what we need to prepare a quote.
            </p>
            <Link href="/contact?service=Pavement%20design" className="btn">
              Talk to a pavement engineer
            </Link>
            <a href="https://wa.me/250788354909" className="btn btn-quiet" target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
          <div className="aside-box">
            <p className="eyebrow">
              Other services
            </p>
            <ul className="aside-list">
              <li>
                <Link href="/service-site-investigation">
                  Site investigation
                </Link>
              </li>
              <li>
                <Link href="/testing-lab">
                  Laboratory testing
                </Link>
              </li>
              <li>
                <Link href="/service-foundation-concrete">
                  Foundation and concrete testing
                </Link>
              </li>
              <li>
                <Link href="/service-slope-retaining">
                  Slope stability and retaining walls
                </Link>
              </li>
              <li>
                <Link href="/service-structural-audit">
                  Structural audit
                </Link>
              </li>
              <li>
                <Link href="/service-mining-geotechnics">
                  Mining geotechnics
                </Link>
              </li>
              <li>
                <Link href="/service-eia">
                  Environmental impact assessment
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="wrap">
        <section className="block" id="featured">
          <p className="eyebrow">
            Proof
          </p>
          <h2>
            Featured projects
          </h2>
          <p>
            <span className="tbc">
              [Project reference to be added]
            </span>
          </p>
        </section>
      </div>
      <section className="section cta" id="tell-us">
        <div className="wrap">
          <div className="cta-inner">
            <div className="cta-copy">
              <h2>
                Ready for your geotechnical assessment?
              </h2>
              <p>
                Tell us about your site and the type of work. We reply with questions and what we need to prepare a quote.
              </p>
              <p className="contact">
                <span>
                  +250 788 354 909
                </span>
                <span>
                  +250 785 468 208
                </span>
                <span>
                  info@geotesta.rw
                </span>
              </p>
              <p className="actions">
                <a href="https://wa.me/250788354909" className="btn btn-quiet" target="_blank" rel="noopener">
                  Chat on WhatsApp
                </a>
                <Link href="/contact#how-we-work" className="quiet">
                  See how we work with you
                </Link>
              </p>
            </div>
            <div className="cta-form">
              <form id="quote-form" className="quote-form" noValidate>
                <div className="field">
                  <label htmlFor="q-name">
                    Name
                  </label>
                  <input id="q-name" name="name" autoComplete="name" data-label="Name" data-msg="Enter your name." />
                  <p className="error" id="q-name-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-contact">
                    Phone or email
                  </label>
                  <input id="q-contact" name="contact" autoComplete="email" data-label="Phone or email" data-msg="Enter a phone number or email so we can reply." />
                  <p className="error" id="q-contact-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-location">
                    Project location
                  </label>
                  <input id="q-location" name="location" data-label="Project location" data-msg="Enter the project location." />
                  <p className="error" id="q-location-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-type">
                    Type of work
                  </label>
                  <select id="q-type" name="type" data-label="Type of work" data-msg={"Choose the type of work, or \"Not sure yet\"."}>
                    <option value="">
                      Select the type of work
                    </option>
                    <option>
                      Site investigation
                    </option>
                    <option>
                      Laboratory testing
                    </option>
                    <option>
                      Foundation and concrete testing
                    </option>
                    <option>
                      Slope stability and retaining walls
                    </option>
                    <option>
                      Pavement design
                    </option>
                    <option>
                      Structural audit
                    </option>
                    <option>
                      Mining geotechnics
                    </option>
                    <option>
                      Environmental impact assessment
                    </option>
                    <option>
                      Not sure yet
                    </option>
                  </select>
                  <p className="error" id="q-type-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-notes">
                    {"Anything else we should know "}
                    <span className="opt">
                      (optional)
                    </span>
                  </label>
                  <textarea id="q-notes" name="notes" data-label="Anything else" data-optional=""></textarea>
                </div>
                <div className="actions">
                  <button className="btn" type="submit">
                    Send request
                  </button>
                </div>
              </form>
              <div className="done" role="status" tabIndex="-1" hidden>
                <h3>
                  Your request is ready to send
                </h3>
                <p>
                  It goes to GeoTesta on WhatsApp, +250 788 354 909. Nothing is sent until you press Send in WhatsApp.
                </p>
                <pre className="quote-msg"></pre>
                <div className="actions">
                  <a href="https://wa.me/250788354909" className="btn quote-wa" target="_blank" rel="noopener">
                    Open WhatsApp to send
                  </a>
                  <button className="btn btn-quiet quote-edit" type="button">
                    Edit request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
