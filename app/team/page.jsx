import Link from 'next/link';

export const metadata = {
  title: { absolute: "Team | GeoTesta" },
  description: "The GeoTesta team: engineers, quality manager and laboratory technician.",
  openGraph: { title: "Team | GeoTesta", description: "The GeoTesta team: engineers, quality manager and laboratory technician.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img alt="" className="ph-photo" height="750" loading="eager" src="/assets/field-drilling-warehouse.jpg" width="1000" />
        <div className="wrap page-head">
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Team
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Team
          </h1>
          <p className="lead">
            Qualified people, disciplined execution.
          </p>
          <div className="hero-acts">
            <Link href="/contact" className="btn">
              Talk to our team
            </Link>
            <a href="#people" className="quiet">
              Meet the people
            </a>
          </div>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: Names, positions and qualifications come from the company profile. The sitemap lists different specialist roles (Laboratory Quality Manager, Lab Technician, Quality Control Engineer, Soil Scientist, Researcher, Business Development Manager, IT Specialist) and says 15+ people. Confirm the list. Add a short bio and a photo for each person, with their permission. Check the 'A0' and 'A1' qualification wording.
        </p>
        <section className="block" id="people">
          <div className="sec-head">
            <div>
              <h2>
                Engineering, quality and laboratory
              </h2>
            </div>
          </div>
          <ul className="people">
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                NIYIBIZI Jean Pierre
              </h3>
              <p className="role">
                Managing Director / Lead Geotechnical Engineer
              </p>
              <p>
                PhD research in Geotechnical and Transportation Engineering
              </p>
              <p>
                Company founder and technical leader.
              </p>
            </li>
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                NIZIGIYIMANA Fiston Dieu Merci
              </h3>
              <p className="role">
                Quality Manager
              </p>
              <p>
                A0 in Geotechnical Engineering
              </p>
              <p>
                Quality system and laboratory oversight.
              </p>
            </li>
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                MUSANGWA Fulgence
              </h3>
              <p className="role">
                Geotechnical Engineer
              </p>
              <p>
                A0 in Geotechnical Engineering
              </p>
              <p>
                Geotechnical investigation, interpretation and reporting.
              </p>
            </li>
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                NSHIMIYIMANA Michel
              </h3>
              <p className="role">
                Geotechnical Engineer
              </p>
              <p>
                A0 in Geotechnical Engineering
              </p>
              <p>
                Geotechnical investigation and project delivery.
              </p>
            </li>
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                NIYIBIZI Bareke Orlando
              </h3>
              <p className="role">
                Geotechnical Engineer
              </p>
              <p>
                A0 in Geotechnical Engineering
              </p>
              <p>
                Laboratory testing, interpretation and reporting.
              </p>
            </li>
            <li className="person">
              <div className="photo-ph">
                <span className="tbc">
                  [Team photo to be supplied]
                </span>
              </div>
              <h3>
                DUSENGIMANA Emmanuel
              </h3>
              <p className="role">
                Senior Laboratory Technician
              </p>
              <p>
                A1 in Civil Engineering
              </p>
              <p>
                Laboratory testing, sample handling and testing operations.
              </p>
            </li>
          </ul>
        </section>
        <section className="block" id="leadership-message">
          <h2>
            A message from our leadership
          </h2>
          <blockquote className="msg">
            <p>
              “Every reliable structure begins with decisions that respect the ground. Our responsibility is to give clients the evidence, engineering judgement and service discipline they need to make those decisions confidently. We are building GEOTESTA to be a reference laboratory and technical partner whose work earns trust every day.”
            </p>
            <footer>
              Eng. NIYIBIZI Jean Pierre, Managing Director, GEOTESTA Ltd
            </footer>
          </blockquote>
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
