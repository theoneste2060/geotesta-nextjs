import Link from 'next/link';

export const metadata = {
  title: { absolute: "FAQs | GeoTesta" },
  description: "Frequently asked questions about geotechnical laboratory testing and GeoTesta.",
  openGraph: { title: "FAQs | GeoTesta", description: "Frequently asked questions about geotechnical laboratory testing and GeoTesta.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img alt="" className="ph-photo" height="750" loading="eager" src="/assets/lab-2-sieves.jpg" width="1000" />
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
                  Frequently asked questions
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Frequently asked questions
          </h1>
          <p className="lead">
            Short answers to what a geotechnical laboratory does, who needs one, and how to know which tests are required.
          </p>
          <div className="hero-acts">
            <Link href="/contact" className="btn">
              Ask our engineers
            </Link>
            <Link href="/testing-lab#catalogue" className="quiet">
              Test catalogue
            </Link>
          </div>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: The sitemap says the current site shows these questions without answers. The general answers are written from standard practice. Yellow items need the Lab Lead.
        </p>
        <div className="editorial-layout">
          <nav aria-label="FAQ topics" className="section-index">
            <a href="#testing-questions">
              Testing and project decisions
            </a>
            <a href="#quality-questions">
              Standards and designation
            </a>
            <a href="#reports-questions">
              Reports and test methods
            </a>
          </nav>
          <div className="faq-content">
            <section className="faq-group" id="testing-questions">
              <h2>
                Testing and project decisions
              </h2>
              <details>
                <summary>
                  What does a geotechnical laboratory do?
                </summary>
                <p>
                  {"It tests soil, rock, aggregate and concrete samples to measure the properties engineers design with, such as grading, plasticity, density, compaction, strength and permeability. GeoTesta's laboratory is at Gihara, Kamonyi District. See the "}
                  <Link href="/testing-lab#catalogue">
                    test catalogue
                  </Link>
                  .
                </p>
              </details>
              <details>
                <summary>
                  Which tests does my project need?
                </summary>
                <p>
                  {"It depends on the structure, the ground and the design questions. Send us the location and the type of work and our engineers recommend the tests. "}
                  <Link href="/contact">
                    Tell us about your site
                  </Link>
                  .
                </p>
              </details>
              <details>
                <summary>
                  Who needs laboratory services?
                </summary>
                <p>
                  Developers, contractors, design engineers, road and water agencies, and owners of existing buildings, whenever a design, a purchase or an approval depends on knowing the ground or the material.
                </p>
              </details>
              <details>
                <summary>
                  Why is testing necessary?
                </summary>
                <p>
                  Ground and materials vary from site to site and even within one site. Testing replaces assumptions with measured values, so the design is based on evidence.
                </p>
              </details>
              <details>
                <summary>
                  How can testing reduce project cost?
                </summary>
                <p>
                  Good data can help avoid over-designing a foundation, and can help catch problems before construction, when they are cheaper to fix than after.
                </p>
              </details>
            </section>
            <section className="faq-group" id="quality-questions">
              <h2>
                Standards and designation
              </h2>
              <details>
                <summary>
                  Does the RSB designation cover every test you offer?
                </summary>
                <p>
                  {"No. The designation covers only the test methods in Annex A of the certificate. The "}
                  <Link href="/testing-lab#catalogue">
                    test catalogue
                  </Link>
                  {" shows which tests are inside that scope and which are not."}
                </p>
              </details>
              <details>
                <summary>
                  Which standards do GeoTesta's procedures follow?
                </summary>
                <p>
                  {"Test methods follow ASTM, BS and IS standards within the approved scope. "}
                  <span className="tbc">
                    [Match each test to its standard against Annex A]
                  </span>
                </p>
              </details>
            </section>
            <section className="faq-group" id="reports-questions">
              <h2>
                Reports and test methods
              </h2>
              <details>
                <summary>
                  How long does a report take?
                </summary>
                <p>
                  <span className="tbc">
                    [Typical turnaround, to be supplied by the Lab Lead once the lab can commit to a figure]
                  </span>
                </p>
              </details>
              <details>
                <summary>
                  What is Proctor compaction?
                </summary>
                <p>
                  A laboratory test that finds how much water a soil needs to be compacted to its highest dry density. The results are the optimum moisture content (OMC) and the maximum dry density (MDD). They are used to specify and check compaction of fill, subgrades and embankments.
                </p>
              </details>
            </section>
          </div>
        </div>
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
                <a href="https://wa.me/250788354909" className="btn btn-quiet" rel="noopener" target="_blank">
                  Chat on WhatsApp
                </a>
                <Link href="/contact#how-we-work" className="quiet">
                  See how we work with you
                </Link>
              </p>
            </div>
            <div className="cta-form">
              <form className="quote-form" id="quote-form" noValidate>
                <div className="field">
                  <label htmlFor="q-name">
                    Name
                  </label>
                  <input autoComplete="name" data-label="Name" data-msg="Enter your name." id="q-name" name="name" />
                  <p className="error" id="q-name-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-contact">
                    Phone or email
                  </label>
                  <input autoComplete="email" data-label="Phone or email" data-msg="Enter a phone number or email so we can reply." id="q-contact" name="contact" />
                  <p className="error" id="q-contact-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-location">
                    Project location
                  </label>
                  <input data-label="Project location" data-msg="Enter the project location." id="q-location" name="location" />
                  <p className="error" id="q-location-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-type">
                    Type of work
                  </label>
                  <select data-label="Type of work" data-msg={"Choose the type of work, or \"Not sure yet\"."} id="q-type" name="type">
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
                  <textarea data-label="Anything else" data-optional="" id="q-notes" name="notes"></textarea>
                </div>
                <div className="actions">
                  <button className="btn" type="submit">
                    Send request
                  </button>
                </div>
              </form>
              <div className="done" hidden role="status" tabIndex="-1">
                <h3>
                  Thank you, your request has been sent
                </h3>
                <p>
                  We will reply to the phone number or email you gave. You can also message us on WhatsApp, +250 788 354 909.
                </p>
                <pre className="quote-msg"></pre>
                <div className="actions">
                  <a href="https://wa.me/250788354909" className="btn quote-wa" rel="noopener" target="_blank">
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
