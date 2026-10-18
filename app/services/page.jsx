import Link from 'next/link';

export const metadata = {
  title: { absolute: "Services | GeoTesta" },
  description: "GeoTesta services: site investigation, laboratory testing, foundation and concrete testing, slope stability, pavement design, structural audit, mining geotechnics and EIA.",
  openGraph: { title: "Services | GeoTesta", description: "GeoTesta services: site investigation, laboratory testing, foundation and concrete testing, slope stability, pavement design, structural audit, mining geotechnics and EIA.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img className="ph-photo" src="/assets/hero-2-drill-rig.jpg" alt="" width="1000" height="750" loading="eager" />
        <div className="wrap page-head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Services
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Services
          </h1>
          <p className="lead">
            Eight services, organised by what you need to know or decide. Laboratory test methods are listed once, on the Testing Lab page.
          </p>
          <p className="actions hero-acts">
            <Link href="/contact" className="btn">
              Request a quote
            </Link>
            <Link href="/testing-lab#catalogue" className="quiet">
              Browse the test catalogue
            </Link>
          </p>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: Service list and descriptions follow the lab sitemap and the company profile. The six-stage workflow is from the profile. The Lab Lead should confirm scope for each service.
        </p>
        <section className="block" id="all-services">
          <div className="sec-head">
            <div>
              <p className="eyebrow">
                Our services
              </p>
              <h2>
                Choose by what you need to know.
              </h2>
            </div>
          </div>
          <ul className="svc-grid">
            <li>
              <Link href="/service-site-investigation" className="svc-card">
                <span className="svc-n">
                  01
                </span>
                <b>
                  Site investigation
                </b>
                <span>
                  Desk study, trial pits, boreholes, in-situ testing, sampling and geotechnical reports.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/testing-lab" className="svc-card">
                <span className="svc-n">
                  02
                </span>
                <b>
                  Laboratory testing
                </b>
                <span>
                  Classification, compaction, CBR, permeability, concrete and specialist tests for the methods in our approved scope.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-foundation-concrete" className="svc-card">
                <span className="svc-n">
                  03
                </span>
                <b>
                  Foundation and concrete testing
                </b>
                <span>
                  Foundation checks, concrete mix design and quality assurance records.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-slope-retaining" className="svc-card">
                <span className="svc-n">
                  04
                </span>
                <b>
                  Slope stability and retaining walls
                </b>
                <span>
                  Slope assessment, retaining wall design, drainage and erosion control.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-pavement-design" className="svc-card">
                <span className="svc-n">
                  05
                </span>
                <b>
                  Pavement design
                </b>
                <span>
                  Performance studies, distress investigation and maintenance planning.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-structural-audit" className="svc-card">
                <span className="svc-n">
                  06
                </span>
                <b>
                  Structural audit
                </b>
                <span>
                  Non-destructive and destructive testing, and the condition of an existing building.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-mining-geotechnics" className="svc-card">
                <span className="svc-n">
                  07
                </span>
                <b>
                  Mining geotechnics
                </b>
                <span>
                  Pit slope stability and underground rock mechanics.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-eia" className="svc-card">
                <span className="svc-n">
                  08
                </span>
                <b>
                  Environmental impact assessment
                </b>
                <span>
                  EIA test reports, and environmental work run together with site investigation.
                </span>
                <span className="svc-go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="block" id="how-it-works">
          <p className="eyebrow">
            How we work
          </p>
          <h2>
            How every engagement runs
          </h2>
          <ol className="flow">
            <li>
              <b>
                Define
              </b>
              <span>
                Agree engineering questions, project requirements and investigation scope.
              </span>
            </li>
            <li>
              <b>
                Investigate
              </b>
              <span>
                Capture representative ground and site information.
              </span>
            </li>
            <li>
              <b>
                Test
              </b>
              <span>
                Apply suitable methods, quality controls and records.
              </span>
            </li>
            <li>
              <b>
                Interpret
              </b>
              <span>
                Translate data into project-specific engineering understanding.
              </span>
            </li>
            <li>
              <b>
                Report
              </b>
              <span>
                Issue clear results, findings, recommendations and limitations.
              </span>
            </li>
            <li>
              <b>
                Support
              </b>
              <span>
                Respond to technical queries and assist implementation as agreed.
              </span>
            </li>
          </ol>
          <p>
            We pursue fast turnaround through planning, discipline and efficient coordination, without bypassing required testing durations or technical review.
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
