import Link from 'next/link';

export const metadata = {
  title: { absolute: "Dewatering for deep excavation | GeoTesta" },
  description: "Technical note template: dewatering for deep excavation.",
  openGraph: { title: "Dewatering for deep excavation | GeoTesta", description: "Technical note template: dewatering for deep excavation.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-head">
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  Insights
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  Dewatering for deep excavation
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Dewatering for deep excavation
          </h1>
          <p className="lead">
            An engineering note from GeoTesta. This page is the template for every article.
          </p>
        </div>
      </section>
      <div className="wrap">
        <p className="proto-only">
          Open item: Article template: title, date, author, reading time, body and a related-services block. The body is not in the documents.
        </p>
        <div className="art-layout">
          <article className="art-main">
            <p className="art-meta">
              <span className="art-cat">
                Technical notes
              </span>
              <span className="tbc">
                [Date]
              </span>
              <span className="tbc">
                [Author]
              </span>
              <span className="tbc">
                [Reading time]
              </span>
            </p>
            <section className="block" id="body">
              <h2>
                Article
              </h2>
              <p>
                <span className="tbc">
                  [Article text]
                </span>
              </p>
            </section>
            <p className="art-back">
              <Link href="/insights" className="btn btn-quiet">
                ← Back to Insights
              </Link>
            </p>
          </article>
          <aside aria-label="Related" className="svc-aside">
            <div className="aside-box">
              <p className="eyebrow">
                Need this on your site?
              </p>
              <p className="aside-h">
                Talk to an engineer
              </p>
              <p>
                Tell us about your site and we reply with what we need to prepare a quote.
              </p>
              <a href="#tell-us" className="btn">
                Request a quote
              </a>
            </div>
            <div className="aside-box" id="related">
              <p className="aside-h">
                Related services
              </p>
              <ul className="aside-list">
                <li>
                  <Link href="/service-site-investigation">
                    Site investigation
                  </Link>
                </li>
                <li>
                  <Link href="/testing-lab">
                    Testing lab
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
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
