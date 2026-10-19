import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = {
  title: { absolute: "GeoTesta | Geotechnical investigation and RSB-designated testing lab, Rwanda" },
  description: "GeoTesta is an RSB-designated testing laboratory in Kamonyi District offering geotechnical investigation and laboratory testing for construction in Rwanda.",
  openGraph: { title: "GeoTesta | Geotechnical investigation and RSB-designated testing lab, Rwanda", description: "GeoTesta is an RSB-designated testing laboratory in Kamonyi District offering geotechnical investigation and laboratory testing for construction in Rwanda.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="hero hero-split slider" role="group" aria-roledescription="carousel" aria-label="GeoTesta work photos">
        <div className="hero-left">
          <div className="hero-copy">
            <h1>
              Precision you can build on.
            </h1>
            <p className="lead">
              Geotechnical investigation, construction-materials testing and geo-environmental consultancy in Rwanda, with an RSB-designated laboratory at Gihara.
            </p>
            <div className="actions">
              <Link href="/services" className="btn">
                Our Services
              </Link>
              <Link href="/contact" className="quiet">
                Reach Us
              </Link>
            </div>
          </div>
          <ul className="hero-stats">
            <li>
              <b>500+</b>
              <span>Project assignments</span>
            </li>
            <li>
              <b>15+</b>
              <span>Engineers, geologists and technicians</span>
            </li>
            <li>
              <b>2018</b>
              <span>Established</span>
            </li>
          </ul>
        </div>
        <div className="hero-photo">
          <div className="slider-viewport">
        <div className="slides">
            <figure className="slide" aria-roledescription="slide" aria-label="Photo 1 of 5">
              <img src="/assets/hero-1-test-pit.jpg" width="990" height="742" alt="GeoTesta team at a test pit dug through a floor inside a building, two people in hard hats and high-visibility vests working a testing rod in the pit while a third looks on." fetchPriority="high" />
            </figure>
            <figure className="slide" aria-roledescription="slide" aria-label="Photo 2 of 5">
              <img src="/assets/hero-2-drill-rig.jpg" width="990" height="742" alt="A blue drilling rig on a cleared, graded building site, with an excavator and a truck behind it and a worker standing beside the rig." loading="lazy" />
            </figure>
            <figure className="slide" aria-roledescription="slide" aria-label="Photo 3 of 5">
              <img src="/assets/hero-3-wall.jpg" width="990" height="794" alt="Two people in high-visibility vests at the exterior wall of a building, one holding a metal cylindrical instrument against the plaster while the other holds papers and a pen." style={{objectPosition: "center top"}} loading="lazy" />
            </figure>
            <figure className="slide" aria-roledescription="slide" aria-label="Photo 4 of 5">
              <img src="/assets/hero-4-ceiling.jpg" width="990" height="742" alt="A person in a hard hat and high-visibility vest on a stepladder, holding a yellow handheld device against a ceiling beam in a finished room." loading="lazy" />
            </figure>
            <figure className="slide" aria-roledescription="slide" aria-label="Photo 5 of 5">
              <img src="/assets/hero-5-office.jpg" width="990" height="742" alt="An office with several desks, laptops, a desktop computer showing a table of data, a printer and stacks of papers." loading="lazy" />
            </figure>
        </div>
          </div>
          <div className="hero-badge">
            <b>RSB</b>
            <span>Designated testing laboratory, ISO/IEC 17025. Certificate 001/RSB/LDS/COD/2026-2027.</span>
          </div>
        <div className="hero-ctrl">
          <button className="slider-btn prev" type="button" aria-label="Previous photo">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="dots">
            <button className="dot" type="button" aria-label="Show photo 1 of 5" aria-current="true"></button>
            <button className="dot" type="button" aria-label="Show photo 2 of 5"></button>
            <button className="dot" type="button" aria-label="Show photo 3 of 5"></button>
            <button className="dot" type="button" aria-label="Show photo 4 of 5"></button>
            <button className="dot" type="button" aria-label="Show photo 5 of 5"></button>
          </div>
          <button className="slider-btn next" type="button" aria-label="Next photo">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        </div>
        <p className="sr-only slider-status" aria-live="polite">
          Photo 1 of 5
        </p>
      </section>
      <p className="proto-only">
        Open item: The hero headline is now 'Precision you can build on.', as you asked. The sitemap's 'The home for Geo-Engineering solutions' and the profile's cover line 'Ground truth. Engineered with confidence.' are not used. The buttons (Our Services, Reach Us) follow the sitemap. The hero is a five-photo slideshow behind a navy gradient (no autoplay). Photos 1, 3 and 4 were cropped to remove a map and a GPS overlay. Confirm the people shown agree to their use.
      </p>
      <section id="designation" className="band" aria-labelledby="band-h">
        <div className="strata"></div>
        <div className="wrap">
          <h2 className="sr-only" id="band-h">
            Laboratory designation
          </h2>
          <dl className="band-grid">
            <div>
              <dt>
                <Icon name="shield" />
                Designation
              </dt>
              <dd>
                RSB-designated testing laboratory, ISO/IEC 17025
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="file" />
                Certificate no.
              </dt>
              <dd>
                <a href="/assets/rsb-designation-certificate.pdf" className="mono" target="_blank" rel="noopener">
                  001/RSB/LDS/COD/2026-2027
                </a>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="calendar" />
                Valid
              </dt>
              <dd>
                27 Aug 2026 to 26 Aug 2031
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="list" />
                Scope
              </dt>
              <dd>
                <Link href="/testing-lab#catalogue">
                  View the test methods in Annex A
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section" id="services" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">
                What we do
              </p>
              <h2 id="svc-h">
                From ground investigation to engineering decisions.
              </h2>
            </div>
            <Link href="/services" className="btn btn-quiet">
              See all services
            </Link>
          </div>
          <ul className="svc-grid">
            <li>
              <Link href="/service-site-investigation" className="svc-card">
                <Icon name="layers" />
                <b>
                  Site investigation
                </b>
                <span>
                  Desk study, trial pits, boreholes, in-situ testing, sampling and geotechnical reports.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/testing-lab" className="svc-card">
                <Icon name="flask" />
                <b>
                  Laboratory testing
                </b>
                <span>
                  Classification, compaction, CBR, permeability, concrete and specialist tests for the methods in our approved scope.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-foundation-concrete" className="svc-card">
                <Icon name="blocks" />
                <b>
                  Foundation and concrete testing
                </b>
                <span>
                  Foundation checks, concrete mix design and quality assurance records.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-slope-retaining" className="svc-card">
                <Icon name="mountain" />
                <b>
                  Slope stability and retaining walls
                </b>
                <span>
                  Slope assessment, retaining wall design, drainage and erosion control.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-pavement-design" className="svc-card">
                <Icon name="road" />
                <b>
                  Pavement design
                </b>
                <span>
                  Performance studies, distress investigation and maintenance planning.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-structural-audit" className="svc-card">
                <Icon name="clipboard" />
                <b>
                  Structural audit
                </b>
                <span>
                  Non-destructive and destructive testing, and the condition of an existing building.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-mining-geotechnics" className="svc-card">
                <Icon name="gem" />
                <b>
                  Mining geotechnics
                </b>
                <span>
                  Pit slope stability and underground rock mechanics.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/service-eia" className="svc-card">
                <Icon name="leaf" />
                <b>
                  Environmental impact assessment
                </b>
                <span>
                  EIA test reports, and environmental work run together with site investigation.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="section tint" id="how" aria-labelledby="how-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">
                How we work
              </p>
              <h2 id="how-h">
                One disciplined process, from question to report.
              </h2>
            </div>
          </div>
          <ol className="flow">
            <li>
              <Icon name="target" />
              <b>
                Define
              </b>
              <span>
                Agree engineering questions, project requirements and investigation scope.
              </span>
            </li>
            <li>
              <Icon name="search" />
              <b>
                Investigate
              </b>
              <span>
                Capture representative ground and site information.
              </span>
            </li>
            <li>
              <Icon name="flask" />
              <b>
                Test
              </b>
              <span>
                Apply suitable methods, quality controls and records.
              </span>
            </li>
            <li>
              <Icon name="chart" />
              <b>
                Interpret
              </b>
              <span>
                Translate data into project-specific engineering understanding.
              </span>
            </li>
            <li>
              <Icon name="file" />
              <b>
                Report
              </b>
              <span>
                Issue clear results, findings, recommendations and limitations.
              </span>
            </li>
            <li>
              <Icon name="users" />
              <b>
                Support
              </b>
              <span>
                Respond to technical queries and assist implementation as agreed.
              </span>
            </li>
          </ol>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: Eight services, as in the lab sitemap. Pavement design, mining geotechnics and EIA were held back earlier and are shown now because the sitemap lists them. Confirm each with the Lab Lead. The register of 67 projects has no mining project.
        </p>
      </div>
      <section className="section why" id="why">
        <div className="wrap why-grid">
          <div className="why-copy">
            <p className="eyebrow">
              Why GeoTesta
            </p>
            <h2>
              Evidence you can rely on.
            </h2>
            <p>
              GeoTesta connects disciplined field investigation, laboratory evidence and engineering judgement, so clients can make better-informed decisions about foundations, infrastructure and the ground beneath them.
            </p>
            <ul className="stats">
              <li className="stat">
                <b>
                  2018
                </b>
                <span>
                  Established as GEO-HOME SERVICES Ltd
                </span>
              </li>
              <li className="stat">
                <b>
                  RSB
                </b>
                <span>
                  Designated testing laboratory
                </span>
              </li>
              <li className="stat">
                <b>
                  15+
                </b>
                <span>
                  Engineers, geologists and technicians
                </span>
              </li>
              <li className="stat">
                <b>
                  500+
                </b>
                <span>
                  Project assignments
                </span>
              </li>
            </ul>
            <dl className="facts">
              <div>
                <dt>
                  Projects
                </dt>
                <dd>
                  500+ project assignments
                </dd>
              </div>
              <div>
                <dt>
                  Coverage
                </dt>
                <dd>
                  Country-wide
                </dd>
              </div>
              <div>
                <dt>
                  Test methods
                </dt>
                <dd>
                  ASTM, BS and IS, within the approved scope
                </dd>
              </div>
              <div>
                <dt>
                  Laboratory
                </dt>
                <dd>
                  RSB-designated, ISO/IEC 17025
                </dd>
              </div>
            </dl>
            <p className="more">
              <Link href="/about">
                About GeoTesta
              </Link>
            </p>
          </div>
          <figure className="why-photo">
            <img src="/assets/lab-interior.jpg" alt="Testing machines on benches in the GeoTesta laboratory at Gihara." width="1200" height="900" loading="lazy" />
          </figure>
        </div>
      </section>
      <section className="section tint" id="recent-projects">
        <div className="wrap">
          <p className="eyebrow">
            Projects
          </p>
          <h2>
            Breadth across Rwanda's built environment
          </h2>
          <ul className="chart" aria-label="Projects by sector">
            <li>
              <span className="c-label">
                Public and social infrastructure
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "1.000"}}></i>
              </span>
              <b className="c-num">
                14
              </b>
            </li>
            <li>
              <span className="c-label">
                Industrial and logistics
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.643"}}></i>
              </span>
              <b className="c-num">
                9
              </b>
            </li>
            <li>
              <span className="c-label">
                Buildings and developments
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.643"}}></i>
              </span>
              <b className="c-num">
                9
              </b>
            </li>
            <li>
              <span className="c-label">
                Flood resilience and slopes
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.643"}}></i>
              </span>
              <b className="c-num">
                9
              </b>
            </li>
            <li>
              <span className="c-label">
                Water and irrigation
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.429"}}></i>
              </span>
              <b className="c-num">
                6
              </b>
            </li>
            <li>
              <span className="c-label">
                Environment and energy
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.571"}}></i>
              </span>
              <b className="c-num">
                8
              </b>
            </li>
            <li>
              <span className="c-label">
                Structural assessments
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.357"}}></i>
              </span>
              <b className="c-num">
                5
              </b>
            </li>
            <li>
              <span className="c-label">
                Transport and bridges
              </span>
              <span className="c-bar" aria-hidden="true">
                <i style={{"--w": "0.286"}}></i>
              </span>
              <b className="c-num">
                4
              </b>
            </li>
          </ul>
          <p className="proto-only">
            Open item: Sector counts are copied from the company profile. They add up to 64, but the register lists 67 projects. Confirm the counts.
          </p>
          <h3 className="sub-h">
            Selected assignments
          </h3>
          <ul className="atiles">
            <li>
              <Link href="/project-vunga-corridor">
                <b>
                  Vunga Corridor flood and sediment control
                </b>
                <span>
                  Geotechnical investigations for flood and sediment-control design.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-kanyegenyege-gishanda-dams">
                <b>
                  Kanyegenyege and Gishanda Dams
                </b>
                <span>
                  Ground investigations for irrigation and dam studies.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-bwishyura-substation">
                <b>
                  Bwishyura Substation
                </b>
                <span>
                  Slope stability analysis of designated cutting sections.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-ev-charging-hub">
                <b>
                  Gikondo–Rugando EV Charging Hub
                </b>
                <span>
                  Geo-environmental assessment for a proposed charging facility.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-cyivugiza-bridge">
                <b>
                  Cyivugiza Bridge
                </b>
                <span>
                  Construction supervision in Nyamasheke District.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/project-airtel-headquarters">
                <b>
                  Airtel Headquarters
                </b>
                <span>
                  Structural audit of the headquarters building in Kigali.
                </span>
              </Link>
            </li>
          </ul>
          <p className="more">
            <Link href="/projects">
              See all projects
            </Link>
          </p>
        </div>
      </section>
      <section className="section" id="blog-preview">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">
                Insights
              </p>
              <h2>
                From the engineering blog
              </h2>
            </div>
            <Link href="/insights" className="btn btn-quiet">
              Read all Insights
            </Link>
          </div>
          <ul className="posts post-cards">
            <li>
              <p className="label">
                Technical note
              </p>
              <h3>
                <Link href="/article">
                  Dewatering for deep excavation
                </Link>
              </h3>
            </li>
            <li>
              <p className="label">
                Technical note
              </p>
              <h3 className="soon">
                Landslide risk and slope monitoring in Rwanda's hilly terrain
              </h3>
            </li>
            <li>
              <p className="label">
                Technical note
              </p>
              <h3 className="soon">
                Site investigation for high-rise buildings in Kigali
              </h3>
            </li>
          </ul>
          <p className="more">
            <Link href="/insights">
              Read all Insights
            </Link>
          </p>
        </div>
      </section>
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
