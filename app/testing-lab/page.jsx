import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = {
  title: { absolute: "Testing Lab | GeoTesta" },
  description: "GeoTesta's RSB-designated testing laboratory: designation details, test catalogue, sample submission and reporting.",
  openGraph: { title: "Testing Lab | GeoTesta", description: "GeoTesta's RSB-designated testing laboratory: designation details, test catalogue, sample submission and reporting.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img className="ph-photo" src="/assets/lab-interior.jpg" alt="" width="1000" height="750" loading="eager" />
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
                  Testing Lab
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Testing Lab
          </h1>
          <p className="lead">
            GeoTesta's laboratory at Gihara is an RSB-designated testing laboratory (ISO/IEC 17025) for the test methods in its approved scope.
          </p>
          <p className="actions hero-acts">
            <Link href="/contact?service=Laboratory%20testing" className="btn">
              Request a test
            </Link>
            <a href="#submit-samples" className="quiet">
              How to submit samples
            </a>
          </p>
        </div>
      </section>
      <nav className="subnav" aria-label="On this page">
        <div className="wrap">
          <ul>
            <li>
              <a href="#what-we-do">
                Overview
              </a>
            </li>
            <li>
              <a href="#designation">
                Designation
              </a>
            </li>
            <li>
              <a href="#catalogue">
                Test catalogue
              </a>
            </li>
            <li>
              <a href="#submit-samples">
                Submit samples
              </a>
            </li>
            <li>
              <a href="#reporting">
                Reports
              </a>
            </li>
            <li>
              <a href="#equipment">
                Equipment
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="wrap">
        <section className="block" id="what-we-do">
          <p className="eyebrow">
            Overview
          </p>
          <h2>
            What the laboratory does
          </h2>
          <div className="split">
            <div>
              <p>
                The laboratory tests soil, rock, aggregate and concrete samples from your site, and answers the questions a design depends on: how the ground is classified, how it compacts, how strong it is and how water moves through it.
              </p>
              <p>
                Fieldwork by our geologists and engineers feeds the laboratory, and the laboratory feeds the report.
              </p>
              <p>
                The laboratory is at Gihara, Runda Sector, Kamonyi District.
              </p>
              <ul className="mats">
                <li>
                  Soil
                </li>
                <li>
                  Rock
                </li>
                <li>
                  Aggregate
                </li>
                <li>
                  Concrete
                </li>
              </ul>
            </div>
            <figure className="lab-photo">
              <img src="/assets/lab-interior.jpg" width="1200" height="900" alt="Inside the GeoTesta laboratory: a drying oven, a direct shear machine, a compression frame with a digital controller, balances and sample tools on benches." loading="lazy" />
              <figcaption>
                The GeoTesta laboratory at Gihara.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="block" id="designation">
          <p className="eyebrow">
            Credentials
          </p>
          <h2>
            Designation
          </h2>
          <div className="cred">
            <dl className="facts">
              <div>
                <dt>
                  <Icon name="shield" />
                  Designation
                </dt>
                <dd>
                  RSB-designated testing laboratory, ISO/IEC 17025, for the test methods in its approved scope
                </dd>
              </div>
              <div>
                <dt>
                  Issued by
                </dt>
                <dd>
                  Rwanda Standards Board (RSB)
                </dd>
              </div>
              <div>
                <dt>
                  Designated body
                </dt>
                <dd>
                  GeoTesta LTD, Gihara, Runda Sector, Kamonyi District
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
                  27 Aug 2026 to 26 Aug 2031 (effective date to expiry date)
                </dd>
              </div>
              <div>
                <dt>
                  What it covers
                </dt>
                <dd>
                  Laboratory test methods listed in Annex A. It does not cover field investigation.
                </dd>
              </div>
            </dl>
            <figure className="cert">
              <a href="/assets/rsb-designation-certificate.pdf" target="_blank" rel="noopener">
                <img src="/assets/rsb-designation-certificate.jpg" width="1287" height="910" alt="Rwanda Standards Board Certificate of Designation no. 001/RSB/LDS/COD/2026-2027, issued to GEOTESTA LTD, Kamonyi District, Runda Sector. Effective 27 Aug 2026, expiry 26 Aug 2031." />
              </a>
              <figcaption>
                {"Rwanda Standards Board Certificate of Designation. "}
                <a href="/assets/rsb-designation-certificate.pdf" target="_blank" rel="noopener">
                  Open the certificate (PDF)
                </a>
              </figcaption>
            </figure>
          </div>
          <p className="proto-only">
            Open item: The certificate is one page and does not include Annex A, and the sitemap says Annex A was not readable. Send Annex A so each test below can be marked inside or outside the designation.
          </p>
        </section>
        <section className="block" id="catalogue">
          <p className="eyebrow">
            Scope
          </p>
          <h2>
            Test catalogue
          </h2>
          <p>
            Tests grouped by purpose, each with its standard. A test is inside the RSB designation only if it is in Annex A of the certificate. The designation covers laboratory test methods only, not field investigation.
          </p>
          <p className="proto-only">
            Open item: Test names come from the lab sitemap. Standards and the inside/outside column are blank until matched to Annex A. Mention ASTM, BS or IS only after checking.
          </p>
          <div className="cat-tools">
            <label htmlFor="cat-q">
              Find a test
            </label>
            <input id="cat-q" type="search" placeholder="e.g. CBR, slump, permeability" autoComplete="off" />
            <p id="cat-status" className="cat-status" aria-live="polite"></p>
          </div>
          <div className="table-scroll">
            <table className="cat">
              <thead>
                <tr>
                  <th scope="col">
                    Test
                  </th>
                  <th scope="col">
                    Standard (ASTM, BS or IS)
                  </th>
                  <th scope="col">
                    RSB designation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Classification and index tests
                  </th>
                </tr>
                <tr>
                  <td>
                    Engineering classification
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Liquid and plastic limits
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Linear shrinkage
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Particle size analysis
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Compaction and bearing tests
                  </th>
                </tr>
                <tr>
                  <td>
                    OMC/MDD (Proctor compaction)
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/test-soaked-cbr">
                      Soaked CBR
                    </Link>
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Permeability tests
                  </th>
                </tr>
                <tr>
                  <td>
                    Permeability
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Concrete tests
                  </th>
                </tr>
                <tr>
                  <td>
                    Slump
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Unit weight (density)
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Compressive strength
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Structural audit tests
                  </th>
                </tr>
                <tr>
                  <td>
                    Rebound hammer
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Core testing
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Penetration resistance
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Chemical tests
                  </td>
                  <td>
                    <span className="tbc">
                      [Standard]
                    </span>
                  </td>
                  <td>
                    <span className="tbc">
                      [Inside / outside Annex A]
                    </span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="grp">
                  <th scope="rowgroup" colSpan="3">
                    Other tests offered
                  </th>
                </tr>
                <tr>
                  <td colSpan="3">
                    <span className="tbc">
                      [Add strength, consolidation or aggregate tests only if the lab runs them]
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="block" id="submit-samples">
          <p className="eyebrow">
            Samples
          </p>
          <h2>
            How to submit samples
          </h2>
          <ol className="flow sample-flow">
            <li>
              <b>
                How to deliver
              </b>
              <span>
                <span className="tbc">
                  [Drop-off at Gihara, and whether pickup from Kigali or upcountry sites is available]
                </span>
              </span>
            </li>
            <li>
              <b>
                Minimum quantities
              </b>
              <span>
                <span className="tbc">
                  [To be supplied by the Lab Lead]
                </span>
              </span>
            </li>
            <li>
              <b>
                Container, moisture handling and labelling
              </b>
              <span>
                <span className="tbc">
                  [To be supplied by the Lab Lead]
                </span>
              </span>
            </li>
            <li>
              <b>
                Documents to send
              </b>
              <span>
                <span className="tbc">
                  [To be supplied by the Lab Lead]
                </span>
              </span>
            </li>
            <li>
              <b>
                Turnaround
              </b>
              <span>
                <span className="tbc">
                  [Typical turnaround, to be supplied]
                </span>
              </span>
            </li>
          </ol>
          <p>
            The profile says: we pursue fast turnaround through planning and coordination without bypassing required testing durations or technical review.
          </p>
        </section>
        <div className="duo">
          <section className="block panel" id="reporting">
            <p className="eyebrow">
              Deliverables
            </p>
            <h2>
              What you receive
            </h2>
            <p>
              Each report gives the test data, our interpretation and recommendations, issued as a controlled report. Results are traceable to controlled equipment, samples, technical records and data review.
            </p>
            <p>
              <span className="tbc">
                [Report format, data sheets and who signs the result, to be supplied by the Lab Lead]
              </span>
            </p>
          </section>
          <section className="block panel" id="equipment">
            <p className="eyebrow">
              Facilities
            </p>
            <h2>
              Equipment
            </h2>
            <p>
              <span className="tbc">
                [Equipment list, to be supplied by the Lab Lead]
              </span>
            </p>
          </section>
        </div>
        <p className="actions lab-end">
          <Link href="/contact?service=Laboratory%20testing" className="btn">
            Request a test
          </Link>
          <Link href="/contact" className="btn btn-quiet">
            Speak with a lab engineer
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
