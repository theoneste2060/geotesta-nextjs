import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = {
  title: { absolute: "Contact | GeoTesta" },
  description: "Contact GeoTesta: quote form, phone, WhatsApp, email, address, hours and how we work.",
  openGraph: { title: "Contact | GeoTesta", description: "Contact GeoTesta: quote form, phone, WhatsApp, email, address, hours and how we work.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img alt="" className="ph-photo" height="750" loading="eager" src="/assets/hero-3-wall.jpg" width="1000" />
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
                  Contact
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Contact
          </h1>
          <p className="lead">
            Ready for your geotechnical assessment? Tell us about your site and the type of work.
          </p>
          <div className="hero-acts">
            <a href="#form" className="btn">
              Request a quote
            </a>
            <Link href="/testing-lab#submit-samples" className="quiet">
              Submit samples
            </Link>
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="block" id="form">
          <div className="quote-layout">
            <div>
              <h2>
                Your request
              </h2>
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
                  <label htmlFor="q-tests">
                    {"Tests needed "}
                    <span className="opt">
                      (optional)
                    </span>
                  </label>
                  <input data-label="Tests needed" data-optional="" id="q-tests" name="tests" placeholder="For example: soaked CBR, particle size analysis" />
                  <p className="error" id="q-tests-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-samples">
                    {"Number of samples "}
                    <span className="opt">
                      (optional)
                    </span>
                  </label>
                  <input data-label="Number of samples" data-optional="" id="q-samples" inputMode="numeric" name="samples" />
                  <p className="error" id="q-samples-err"></p>
                </div>
                <div className="field">
                  <label htmlFor="q-when">
                    Deadline or when you need it
                  </label>
                  <input data-label="Deadline" data-msg="Tell us when you need the work." id="q-when" name="when" placeholder="For example: site work starts in December" />
                  <p className="error" id="q-when-err"></p>
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
                <p className="fine">
                  {"For now, your request is prepared as a WhatsApp message to GeoTesta on +250 788 354 909. "}
                  <span className="tbc">
                    [Final receiving address to be confirmed]
                  </span>
                </p>
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
            <aside aria-label="Contact details" className="aside-card">
              <h3>
                Contact details
              </h3>
              <dl>
                <div>
                  <dt>
                    <Icon name="phone" />
                    Phone
                  </dt>
                  <dd className="mono">
                    <a href="tel:+250788354909">
                      +250 788 354 909
                    </a>
                  </dd>
                  <dd className="mono">
                    <a href="tel:+250785468208">
                      +250 785 468 208
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="chat" />
                    WhatsApp
                  </dt>
                  <dd>
                    <a href="https://wa.me/250788354909" rel="noopener" target="_blank">
                      Chat on WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="mail" />
                    Email
                  </dt>
                  <dd className="mono">
                    <a href="mailto:info@geotesta.rw">
                      info@geotesta.rw
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="pin" />
                    Address
                  </dt>
                  <dd>
                    GeoTesta LTD, Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda
                  </dd>
                </div>
                <div>
                  <dt>
                    <Icon name="clock" />
                    Hours
                  </dt>
                  <dd>
                    Mon to Fri 8:00 to 17:00
                    <br />
                    Sat 9:00 to 13:00
                    <br />
                    Sunday closed
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
        <section className="block" id="how-we-work">
          <h2>
            How we work with you
          </h2>
          <ol className="steps contact-steps">
            <li>
              <h3>
                Share the brief
              </h3>
              <p>
                Project drawings, location, design questions, existing data and timeline.
              </p>
            </li>
            <li>
              <h3>
                Agree the plan
              </h3>
              <p>
                Investigation methods, test schedule, deliverables, access and responsibilities.
              </p>
            </li>
            <li>
              <h3>
                Execute
              </h3>
              <p>
                Fieldwork, testing, progress updates and technical review.
              </p>
            </li>
            <li>
              <h3>
                Deliver
              </h3>
              <p>
                Controlled reports, results, recommendations and agreed follow-up.
              </p>
            </li>
          </ol>
          <p className="proto-only">
            Open item: The quote form now also asks for tests needed, number of samples and a deadline, as the sitemap suggests, so the team can quote without a follow-up call. It still ends in a WhatsApp message until a receiving address and form service are chosen.
          </p>
        </section>
        <section className="block" id="map">
          <h2>
            Address and map
          </h2>
          <p>
            Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda
          </p>
          <p>
            <span className="tbc">
              [Embed one map with a single pin on the Gihara laboratory. Page titles and metadata say Kamonyi, not Kigali]
            </span>
          </p>
        </section>
        <section className="block" id="drop-off">
          <h2>
            Sample drop-off and collection
          </h2>
          <p>
            <span className="tbc">
              [How to bring samples to Gihara, whether pickup from Kigali or upcountry sites is available, and sample handling rules]
            </span>
          </p>
          <p>
            <Link href="/testing-lab#submit-samples" className="quiet">
              Sample submission instructions
            </Link>
          </p>
        </section>
        <section className="block" id="pricing">
          <h2>
            Pricing approach
          </h2>
          <p>
            <span className="tbc">
              [Decide between quote-only and a published rate card]
            </span>
          </p>
        </section>
        <section className="block" id="social">
          <h2>
            Social
          </h2>
          <p>
            {"Facebook, X (@geotesta1), LinkedIn, Instagram, YouTube. "}
            <span className="tbc">
              [Links to the social channels]
            </span>
          </p>
        </section>
      </div>
    </>
  );
}
