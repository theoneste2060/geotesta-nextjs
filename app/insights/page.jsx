import Link from 'next/link';
import NewsForm from '@/components/NewsForm';

export const metadata = {
  title: { absolute: "Insights | GeoTesta" },
  description: "The GeoTesta engineering blog: technical notes, news and internal notices.",
  openGraph: { title: "Insights | GeoTesta", description: "The GeoTesta engineering blog: technical notes, news and internal notices.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-photo">
        <img alt="" className="ph-photo" height="750" loading="eager" src="/assets/field-slope-drain.jpg" width="1000" />
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
                  Insights
                </span>
              </li>
            </ol>
          </nav>
          <h1>
            Insights
          </h1>
          <p className="lead">
            The GeoTesta engineering blog: technical notes from project findings, news and internal notices.
          </p>
        </div>
      </section>
      <div className="wrap">
        <section className="block" id="latest">
          <p className="eyebrow">
            Engineering blog
          </p>
          <h2>
            Latest posts
          </h2>
          <p className="proto-only">
            Open item: Insights is an engineering blog with categories. The three technical titles are articles already on the current site, as listed in the sitemap, and need dates, authors and summaries. News and Internal news come from the brand team: News informs, not educates or influences, and Internal news carries job vacancies and company notices. Other categories were mentioned in a document I have not seen: please send it.
          </p>
          <div aria-label="Filter posts by category" className="filters" role="group">
            <button aria-pressed="true" className="chip" data-filter="all" type="button">
              All
            </button>
            <button aria-pressed="false" className="chip" data-filter="technical" type="button">
              Technical notes
            </button>
            <button aria-pressed="false" className="chip" data-filter="news" type="button">
              News
            </button>
            <button aria-pressed="false" className="chip" data-filter="internal" type="button">
              Internal news
            </button>
          </div>
          <p aria-live="polite" className="sr-only" id="filter-status" role="status"></p>
          <ul className="posts post-grid">
            <li data-cat="technical">
              <p className="label">
                {"Technical notes · "}
                <span className="tbc">
                  [Date]
                </span>
              </p>
              <h3>
                <Link href="/article">
                  Dewatering for deep excavation
                </Link>
              </h3>
              <p>
                <span className="tbc">
                  [Two-line summary]
                </span>
              </p>
              <Link href="/article" aria-hidden="true" className="post-more" tabIndex="-1">
                Read the note
              </Link>
            </li>
            <li data-cat="technical">
              <p className="label">
                {"Technical notes · "}
                <span className="tbc">
                  [Date]
                </span>
              </p>
              <h3>
                Landslide risk and slope monitoring in Rwanda's hilly terrain
              </h3>
              <p>
                <span className="tbc">
                  [Two-line summary]
                </span>
              </p>
              <span className="post-soon">
                Coming soon
              </span>
            </li>
            <li data-cat="technical">
              <p className="label">
                {"Technical notes · "}
                <span className="tbc">
                  [Date]
                </span>
              </p>
              <h3>
                Site investigation for high-rise buildings in Kigali
              </h3>
              <p>
                <span className="tbc">
                  [Two-line summary]
                </span>
              </p>
              <span className="post-soon">
                Coming soon
              </span>
            </li>
            <li data-cat="news">
              <p className="label">
                {"News · "}
                <span className="tbc">
                  [Date]
                </span>
              </p>
              <h3>
                <span className="tbc">
                  [News headline: what happened and who it affects]
                </span>
              </h3>
              <p>
                <span className="tbc">
                  [Two-line factual summary. News informs. It does not teach or persuade]
                </span>
              </p>
            </li>
            <li data-cat="internal">
              <p className="label">
                {"Internal news · "}
                <span className="tbc">
                  [Date]
                </span>
              </p>
              <h3>
                <span className="tbc">
                  [Vacancy or company notice title]
                </span>
              </h3>
              <p>
                <span className="tbc">
                  [Role, location and how to apply]
                </span>
              </p>
            </li>
          </ul>
        </section>
        <section className="block" id="categories">
          <h2>
            About the categories
          </h2>
          <dl className="facts cat-grid">
            <div>
              <dt>
                Technical notes
              </dt>
              <dd>
                Short notes from real project findings on ground conditions, test methods and structural condition. Anonymised by default.
              </dd>
            </div>
            <div>
              <dt>
                News
              </dt>
              <dd>
                Company and industry news that informs the reader. It does not teach or try to influence.
              </dd>
            </div>
            <div>
              <dt>
                Internal news
              </dt>
              <dd>
                Vacancies and notices from inside GeoTesta.
              </dd>
            </div>
          </dl>
        </section>
        <section className="block" id="faqs">
          <h2>
            FAQs
          </h2>
          <p>
            {"Answers to the questions clients ask most. "}
            <Link href="/faq">
              Read the FAQs
            </Link>
          </p>
        </section>
        <section className="block news-panel" id="newsletter">
          <h2>
            Get new posts by email
          </h2>
          <p>
            One email when a new post is published.
          </p>
          <div style={{maxWidth: "28rem"}}>
            <NewsForm id="i-news" />
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
