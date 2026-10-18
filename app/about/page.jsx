import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = {
  title: { absolute: "About | GeoTesta" },
  description: "GeoTesta company details, story, quality and impartiality, and certificates.",
  openGraph: { title: "About | GeoTesta", description: "GeoTesta company details, story, quality and impartiality, and certificates.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img alt="" className="ph-photo" height="750" loading="eager" src="/assets/hero-1-test-pit.jpg" width="1000" />
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
                  About
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            About GeoTesta
          </h1>
          <p className="lead">
            {"Company facts for checks and tenders. See also the "}
            <Link href="/team">
              Team page
            </Link>
            .
          </p>
          <div className="hero-acts">
            <Link href="/team" className="btn">
              Meet the team
            </Link>
            <a href="#quality" className="quiet">
              Quality and impartiality
            </a>
          </div>
        </div>
      </section>
      <nav aria-label="About sections" className="subnav">
        <div className="wrap">
          <ul>
            <li>
              <a href="#who-we-are">
                Overview
              </a>
            </li>
            <li>
              <a href="#story">
                Our story
              </a>
            </li>
            <li>
              <a href="#company-details">
                Company details
              </a>
            </li>
            <li>
              <a href="#our-lab">
                Laboratory
              </a>
            </li>
            <li>
              <a href="#quality">
                Quality
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="wrap">
        <section className="block" id="who-we-are">
          <h2>
            Who we are
          </h2>
          <p>
            GeoTesta LTD is a Rwanda-based geotechnical engineering, construction-materials testing and geo-environmental consultancy. We connect disciplined field investigation, laboratory evidence and engineering judgement so clients can make better-informed decisions about foundations, infrastructure and the ground beneath them.
          </p>
          <p>
            Formerly GEO-HOME SERVICES Ltd, our experience spans buildings, dams, irrigation, water supply, transport infrastructure, industrial facilities, power transmission infrastructure, structural assessments and environmental studies. Based at Gihara, Kamonyi District.
          </p>
          <p className="proto-only">
            Open item: Adapted from the company profile. The sitemap says the old About timeline used other years (2014, 2017, 2020, 2024) and must be rebuilt around 2018. Only dates in your documents appear here.
          </p>
        </section>
        <section className="block" id="story">
          <h2>
            Our story
          </h2>
          <ol className="timeline">
            <li>
              <b>
                18 December 2018
              </b>
              {" GEO-HOME SERVICES Ltd is established."}
            </li>
            <li>
              <b>
                <span className="tbc">
                  [Year]
                </span>
              </b>
              {" "}
              <span className="tbc">
                [Further milestones, for example expansion across the Southern Province and national projects]
              </span>
            </li>
            <li>
              <b>
                7 August 2023
              </b>
              {" Practicing certificate from the Institute of Engineering Rwanda, Engineering Consulting Firm. No. A238/REC/ECF/2023, valid till 30 June 2027."}
            </li>
            <li>
              <b>
                27 August 2026
              </b>
              {" RSB Certificate of Designation takes effect (ISO/IEC 17025:2017, for the test methods in the approved scope)."}
            </li>
          </ol>
        </section>
        <section className="block" id="mission">
          <h2>
            Mission, vision and values
          </h2>
          <div className="pcards">
            <div className="pcard">
              <h3>
                Our mission
              </h3>
              <p>
                Deliver dependable geotechnical and materials-testing intelligence, clear engineering recommendations and responsive service.
              </p>
            </div>
            <div className="pcard">
              <h3>
                Our vision
              </h3>
              <p>
                Become a reference laboratory in Rwanda and a respected regional centre for ground engineering, research and innovation.
              </p>
            </div>
            <div className="pcard">
              <h3>
                Our approach
              </h3>
              <p>
                Combine appropriate investigation, sound test methods, engineering interpretation and transparent communication.
              </p>
            </div>
            <div className="pcard">
              <h3>
                Our culture
              </h3>
              <p>
                Integrity, precision, technical discipline, accountability, speed and continuous learning.
              </p>
            </div>
          </div>
          <p className="proto-only">
            Open item: Mission and values are worded differently in the profile and in the sitemap's version of About and Who We Are. I used the profile. Pick one version.
          </p>
        </section>
        <section className="block" id="research">
          <h2>
            Research and innovation
          </h2>
          <p>
            {"Our founder's 2025 research on landslide early warning, and the use of machine learning in investigations, set GeoTesta apart from laboratories that only test. "}
            <span className="tbc">
              [Link to the research paper or a short summary]
            </span>
          </p>
        </section>
        <section className="block" id="company-details">
          <h2>
            Company details
          </h2>
          <div className="company-record">
            <dl className="facts">
              <div>
                <dt>
                  Company
                </dt>
                <dd>
                  GeoTesta LTD (formerly GEO-HOME SERVICES Ltd)
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="pin" />
                  Address
                </dt>
                <dd>
                  Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="phone" />
                  Phone
                </dt>
                <dd>
                  <span className="mono">
                    +250 788 354 909
                  </span>
                  {" or "}
                  <span className="mono">
                    +250 785 468 208
                  </span>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="mail" />
                  Email
                </dt>
                <dd>
                  <span className="mono">
                    info@geotesta.rw
                  </span>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="clock" />
                  Hours
                </dt>
                <dd>
                  Monday to Friday, 8:00 to 17:00. Saturday, 9:00 to 13:00. Sunday closed.
                </dd>
              </div>
              <div>
                <dt>
                  Practicing certificate
                </dt>
                <dd>
                  {"Institute of Engineering Rwanda, Engineering Consulting Firm, field of Civil Engineering. No. "}
                  <span className="mono">
                    A238/REC/ECF/2023
                  </span>
                  {". Valid till 30 June 2027. "}
                  <a href="/assets/ier-practicing-certificate.pdf" rel="noopener" target="_blank">
                    Open the certificate (PDF)
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  Established
                </dt>
                <dd>
                  18 December 2018
                </dd>
              </div>
              <div>
                <dt>
                  Company registration
                </dt>
                <dd>
                  <span className="tbc">
                    [Company registration number, for procurement checks]
                  </span>
                </dd>
              </div>
              <div>
                <dt>
                  Capability statement
                </dt>
                <dd>
                  <a href="/assets/geotesta-capability-statement.pdf" rel="noopener" target="_blank">
                    Download the capability statement (PDF)
                  </a>
                </dd>
              </div>
            </dl>
            <figure className="cert">
              <a href="/assets/ier-practicing-certificate.pdf" rel="noopener" target="_blank">
                <img alt="Institute of Engineering Rwanda practicing certificate no. A238/REC/ECF/2023 presented to GEOTESTA Ltd, field of Civil Engineering, valid till 30 June 2027." height="896" src="/assets/ier-practicing-certificate.jpg" width="1267" />
              </a>
              <figcaption>
                Institute of Engineering Rwanda practicing certificate. This is separate from the RSB laboratory designation.
              </figcaption>
            </figure>
          </div>
          <p className="proto-only">
            Open item: The practicing certificate expires 30 June 2027. Update this page when it is renewed.
          </p>
        </section>
        <section className="block" id="standards">
          <h2>
            Standards we follow
          </h2>
          <p>
            {"ASTM, BS and IS test methods, mapped to each test in the "}
            <Link href="/testing-lab#catalogue">
              test catalogue
            </Link>
            {". "}
            <span className="tbc">
              [Confirm the standards against Annex A]
            </span>
          </p>
        </section>
        <section className="block" id="our-lab">
          <h2>
            Our laboratory
          </h2>
          <div className="split">
            <div>
              <p>
                {"The laboratory at Gihara, Runda Sector, is RSB-designated for the test methods in its approved scope. "}
                <span className="tbc">
                  [Equipment list]
                </span>
              </p>
              <p>
                <Link href="/testing-lab">
                  See the Testing Lab
                </Link>
              </p>
            </div>
            <figure className="lab-photo">
              <img alt="Inside the GeoTesta laboratory with testing machines on benches." height="900" loading="lazy" src="/assets/lab-interior.jpg" width="1200" />
            </figure>
          </div>
        </section>
        <section className="block" id="quality">
          <h2>
            Quality and impartiality
          </h2>
          <p>
            GeoTesta LTD holds a Certificate of Designation issued by the Rwanda Standards Board (RSB), following demonstration of compliance with ISO/IEC 17025:2017 for the test methods in its approved scope of designation.
          </p>
          <div className="pcards">
            <div className="pcard cu">
              <h3>
                Method discipline
              </h3>
              <p>
                Documented methods, method verification and suitable testing controls.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                Traceability
              </h3>
              <p>
                Controlled equipment, samples, technical records and data review.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                Competence and impartiality
              </h3>
              <p>
                Defined responsibilities, personnel competence and confidentiality.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                Continual improvement
              </h3>
              <p>
                Customer feedback, internal audits, corrective actions and management review.
              </p>
            </div>
          </div>
          <p>
            Our commitments: technical integrity (conclusions supported by evidence, limitations and professional judgement), client communication, health, safety and environment, impartiality and confidentiality, learning and improvement, and practical engineering that considers risk, buildability and life-cycle performance.
          </p>
          <p>
            <a href="/assets/geotesta-quality-impartiality-policy.pdf" rel="noopener" target="_blank">
              Quality and impartiality document (PDF)
            </a>
          </p>
          <p className="proto-only">
            Open item: The quality and impartiality document is a placeholder. Supply the real document from the Quality Manager.
          </p>
        </section>
        <section className="block" id="why-us">
          <h2>
            Why clients choose us
          </h2>
          <div className="pcards">
            <div className="pcard cu">
              <h3>
                RSB designation
              </h3>
              <p>
                A designated testing laboratory under ISO/IEC 17025.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                Local soil knowledge
              </h3>
              <p>
                Based in Kamonyi, working across Rwanda's provinces.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                One team, start to finish
              </h3>
              <p>
                Field, laboratory and engineering teams working together, from investigation to design.
              </p>
            </div>
            <div className="pcard cu">
              <h3>
                Timely reports
              </h3>
              <p>
                Planned mobilisation and a clear focus on turnaround.
              </p>
            </div>
          </div>
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
                  Your request is ready to send
                </h3>
                <p>
                  It goes to GeoTesta on WhatsApp, +250 788 354 909. Nothing is sent until you press Send in WhatsApp.
                </p>
                <pre className="quote-msg"></pre>
                <div className="actions">
                  <a href="https://wa.me/250788354909" className="btn quote-wa" rel="noopener" target="_blank">
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
