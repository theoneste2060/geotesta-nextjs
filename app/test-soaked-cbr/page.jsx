import Link from 'next/link';

export const metadata = {
  title: { absolute: "Soaked CBR | GeoTesta" },
  description: "Soaked CBR test: what it measures, sample requirements, turnaround and what you receive.",
  openGraph: { title: "Soaked CBR | GeoTesta", description: "Soaked CBR test: what it measures, sample requirements, turnaround and what you receive.", type: "website" },
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
                <Link href="/testing-lab">
                  Testing Lab
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Soaked CBR
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Soaked CBR
          </h1>
          <p className="lead">
            A test detail page, shown here as the template for every test in the catalogue.
          </p>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: This is one test detail page as a template. Fill the yellow fields for each test and make one page per test, or keep only the common tests.
        </p>
        <dl className="facts">
          <div>
            <dt>
              Test name and standard
            </dt>
            <dd>
              {"Soaked CBR (California Bearing Ratio) "}
              <span className="tbc">
                [Standard number]
              </span>
            </dd>
          </div>
          <div>
            <dt>
              What it measures and why
            </dt>
            <dd>
              {"How well a soil resists penetration after soaking. It is used to design road subgrades, embankments and fill. "}
              <span className="tbc">
                [Confirm wording with the Lab Lead]
              </span>
            </dd>
          </div>
          <div>
            <dt>
              In the RSB designation?
            </dt>
            <dd></dd>
          </div>
          <div>
            <dt>
              Sample requirements
            </dt>
            <dd>
              <span className="tbc">
                [Quantity, container, moisture handling and labelling]
              </span>
            </dd>
          </div>
          <div>
            <dt>
              Turnaround time
            </dt>
            <dd>
              <span className="tbc">
                [Typical turnaround]
              </span>
            </dd>
          </div>
          <div>
            <dt>
              What you receive
            </dt>
            <dd>
              <span className="tbc">
                [Report format, data sheets and who signs the result]
              </span>
            </dd>
          </div>
        </dl>
        <p className="actions">
          <Link href={"/contact?service=Laboratory%20testing&test=Soaked%20CBR"} className="btn">
            Request this test
          </Link>
          <Link href="/contact" className="btn btn-quiet">
            Speak with a lab engineer
          </Link>
        </p>
        <p>
          <Link href="/testing-lab#catalogue">
            Back to the test catalogue
          </Link>
        </p>
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
