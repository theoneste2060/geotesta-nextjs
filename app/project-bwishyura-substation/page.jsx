import Link from 'next/link';

export const metadata = {
  title: { absolute: "Bwishyura Substation | GeoTesta" },
  description: "Slope stability analysis of designated cutting sections.",
  openGraph: { title: "Bwishyura Substation | GeoTesta", description: "Slope stability analysis of designated cutting sections.", type: "website" },
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
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Bwishyura Substation
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Bwishyura Substation
          </h1>
          <p className="lead">
            Slope stability analysis of designated cutting sections.
          </p>
          <p className="hero-tag">
            Slope stability and retaining walls
          </p>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: Summary comes from the company profile and the register. Challenge, findings and photos are not in either document. Add them from the project report, and confirm GeoTesta may name the client.
        </p>
        <div className="case-layout">
          <div className="case-main">
            <section className="block" id="approach">
              <h2>
                Challenge and approach
              </h2>
              <p>
                <span className="tbc">
                  [What the site conditions were and which investigation or tests were run]
                </span>
              </p>
            </section>
            <section className="block" id="findings">
              <h2>
                Findings and outcome
              </h2>
              <p>
                <span className="tbc">
                  [What the results meant for the design or decision. Only if the report backs it]
                </span>
              </p>
            </section>
            <section className="block" id="photos">
              <h2>
                Photos
              </h2>
              <p>
                <span className="tbc">
                  [Site and laboratory images for this project]
                </span>
              </p>
            </section>
          </div>
          <aside className="case-aside">
            <section className="case-facts" id="summary">
              <p className="eyebrow">
                Project summary
              </p>
              <dl className="facts">
                <div>
                  <dt>
                    Project
                  </dt>
                  <dd>
                    Bwishyura Substation
                  </dd>
                </div>
                <div>
                  <dt>
                    Location
                  </dt>
                  <dd>
                    Bwishyura, Karongi District
                  </dd>
                </div>
                <div>
                  <dt>
                    Client
                  </dt>
                  <dd>
                    EDCL
                  </dd>
                </div>
                <div>
                  <dt>
                    Date
                  </dt>
                  <dd>
                    2025
                  </dd>
                </div>
                <div>
                  <dt>
                    Type of work
                  </dt>
                  <dd>
                    Slope stability
                  </dd>
                </div>
                <div>
                  <dt>
                    Service
                  </dt>
                  <dd>
                    <Link href="/service-slope-retaining">
                      Slope stability and retaining walls
                    </Link>
                  </dd>
                </div>
              </dl>
              <Link href="/contact?service=Slope%20stability%20and%20retaining%20walls" className="btn">
                Discuss a similar project
              </Link>
              <Link href="/service-slope-retaining" className="quiet">
                About slope stability and retaining walls
              </Link>
            </section>
          </aside>
        </div>
        <nav className="case-pager" aria-label="More projects">
          <Link href="/project-kanyegenyege-gishanda-dams">
            <span>
              Previous project
            </span>
            <b>
              Kanyegenyege and Gishanda Dams
            </b>
          </Link>
          <Link href="/projects#featured" className="all">
            All projects
          </Link>
          <Link href="/project-ev-charging-hub" className="nx">
            <span>
              Next project
            </span>
            <b>
              Gikondo–Rugando EV Charging Hub
            </b>
          </Link>
        </nav>
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
                  Thank you, your request has been sent
                </h3>
                <p>
                  We will reply to the phone number or email you gave. You can also message us on WhatsApp, +250 788 354 909.
                </p>
                <pre className="quote-msg"></pre>
                <div className="actions">
                  <a href="https://wa.me/250788354909" className="btn quote-wa" target="_blank" rel="noopener">
                    Message us on WhatsApp too
                  </a>
                  <button className="btn btn-quiet quote-edit" type="button">
                    Send another request
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
