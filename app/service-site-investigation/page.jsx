import Link from 'next/link';

export const metadata = {
  title: { absolute: "Site investigation | GeoTesta" },
  description: "Site investigation. Site investigation is the first step of any project. It tells you what is in the ground before you design or build.",
  openGraph: { title: "Site investigation | GeoTesta", description: "Site investigation. Site investigation is the first step of any project. It tells you what is in the ground before you design or build.", type: "website" },
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
                  Site investigation
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Site investigation
          </h1>
          <p className="lead">
            Site investigation is the first step of any project. It tells you what is in the ground before you design or build.
          </p>
          <p className="actions hero-acts">
            <Link href="/contact?service=Site%20investigation" className="btn">
              Request a site investigation
            </Link>
            <Link href="/testing-lab#catalogue" className="quiet">
              See the test catalogue
            </Link>
          </p>
        </div>
      </section>
      <div className="wrap svc-layout">
        <div className="svc-main">
          <section className="block" id="phase-1">
            <h2>
              Phase 1: desk study and walkover
            </h2>
            <p>
              We review the information that already exists for your site and walk it. This is often the quickest way to spot ground risks early.
            </p>
          </section>
          <section className="block" id="phase-2">
            <h2>
              Phase 2: detailed investigation
            </h2>
            <p>
              Detailed geotechnical and environmental investigation with sampling and testing. Field methods include trial pits, boreholes, DCP, DPL and SPT, and in-situ testing. Samples are tested in our laboratory and reported with the findings you need to design.
            </p>
          </section>
          <section className="block" id="why-rwanda">
            <h2>
              Why investigate a site in Rwanda?
            </h2>
            <p>
              Steep terrain, heavy rain and variable soils across Kigali and the provinces make site-specific data essential.
            </p>
          </section>
          <section className="block" id="which-tests">
            <h2>
              Which tests does my project need?
            </h2>
            <p>
              {"It depends on the structure and the ground. Tell us about your site and we recommend the tests. You can also browse the "}
              <Link href="/testing-lab#catalogue">
                laboratory test catalogue
              </Link>
              .
            </p>
          </section>
        </div>
        <aside className="svc-aside" aria-label="Next steps">
          <div className="aside-box">
            <h2 className="aside-h">
              Need site investigation?
            </h2>
            <p>
              Tell us about your site. We reply with questions and what we need to prepare a quote.
            </p>
            <Link href="/contact?service=Site%20investigation" className="btn">
              Request a site investigation
            </Link>
            <a href="https://wa.me/250788354909" className="btn btn-quiet" target="_blank" rel="noopener">
              Chat on WhatsApp
            </a>
          </div>
          <div className="aside-box">
            <ul className="aside-list">
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
                <Link href="/service-pavement-design">
                  Pavement design
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
          <h2>
            Featured projects
          </h2>
          <ul className="cards">
            <li>
              <article className="card">
                <p className="label">
                  Geotechnical investigation
                </p>
                <h3>
                  <Link href="/project-vunga-corridor">
                    Vunga Corridor flood and sediment control
                  </Link>
                </h3>
                <p>
                  Geotechnical investigations for flood and sediment-control design.
                </p>
                <p>
                  <b>
                    Location
                  </b>
                  Vunga Corridor, Northern and Western Rwanda
                </p>
              </article>
            </li>
            <li>
              <article className="card">
                <p className="label">
                  Geotechnical investigation
                </p>
                <h3>
                  <Link href="/project-kanyegenyege-gishanda-dams">
                    Kanyegenyege and Gishanda Dams
                  </Link>
                </h3>
                <p>
                  Ground investigations for irrigation and dam studies.
                </p>
                <p>
                  <b>
                    Location
                  </b>
                  Kayonza District
                </p>
              </article>
            </li>
            <li>
              <article className="card">
                <p className="label">
                  Construction supervision
                </p>
                <h3>
                  <Link href="/project-cyivugiza-bridge">
                    Cyivugiza Bridge
                  </Link>
                </h3>
                <p>
                  Construction supervision in Nyamasheke District.
                </p>
                <p>
                  <b>
                    Location
                  </b>
                  Nyamasheke District
                </p>
              </article>
            </li>
          </ul>
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
