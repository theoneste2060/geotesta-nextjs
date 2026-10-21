import Link from 'next/link';
import Icon from '@/components/Icon';
import NewsForm from '@/components/NewsForm';
import SocialIcon from '@/components/SocialIcon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h">
            Frequently asked questions
          </h2>
          <p className="proto-only">
            Open item: the first answers are written from standard practice. Items in yellow need the Lab Lead. Review all before launch.
          </p>
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
              How long does a report take?
            </summary>
            <p>
              <span className="tbc">
                [Typical turnaround, to be supplied by the Lab Lead once the lab can commit to a figure]
              </span>
            </p>
          </details>
          <p className="faq-more">
            <Link href="/faq">
              See all questions
            </Link>
          </p>
        </div>
      </section>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <img src="/assets/logo-primary-white.png" alt="GeoTesta, Precision you can build on" width="192" height="58" />
            </div>
            <address>
              <span>
                GeoTesta LTD
              </span>
              <span className="with-icon">
                <Icon name="pin" />
                <span>
                  Gihara, Runda Sector, Kamonyi District, Southern Province, Rwanda
                </span>
              </span>
              <span className="with-icon">
                <Icon name="phone" />
                <span>
                  +250 788 354 909
                </span>
              </span>
              <span className="with-icon">
                <Icon name="phone" />
                <span>
                  +250 785 468 208
                </span>
              </span>
              <span className="with-icon">
                <Icon name="mail" />
                <span>
                  info@geotesta.rw
                </span>
              </span>
              <span className="with-icon">
                <Icon name="clock" />
                <span>
                  Mon to Fri 8:00 to 17:00, Sat 9:00 to 13:00
                </span>
              </span>
            </address>
            <div className="follow">
              <p className="follow-h">Follow us</p>
              <ul className="social-row">
                <li>
                  <a href="https://www.instagram.com/geotesta_rw" target="_blank" rel="noopener" aria-label="GeoTesta on Instagram">
                    <SocialIcon name="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/geotesta1" target="_blank" rel="noopener" aria-label="GeoTesta on X">
                    <SocialIcon name="x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/geotesta-rwanda/" target="_blank" rel="noopener" aria-label="GeoTesta on LinkedIn">
                    <SocialIcon name="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/250788354909" target="_blank" rel="noopener" aria-label="GeoTesta on WhatsApp">
                    <SocialIcon name="whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
            <figure className="foot-qr">
              <img src="/assets/qr-geotesta.svg" width="104" height="104" alt="QR code that opens the GeoTesta website, www.geotesta.rw" loading="lazy" />
              <figcaption>
                <b>Scan to open our website</b>
                <span>www.geotesta.rw</span>
              </figcaption>
            </figure>
          </div>
          <div>
            <h3>
              Explore
            </h3>
            <ul>
              <li>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testing-lab">
                  Lab
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              Company
            </h3>
            <ul>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about#quality">
                  Quality and impartiality
                </Link>
              </li>
              <li>
                <a href="/assets/geotesta-company-profile.pdf" download="GeoTesta-Company-Profile.pdf">
                  Company profile (PDF)
                </a>
              </li>
              <li>
                <a href="/assets/geotesta-capability-statement.pdf" target="_blank" rel="noopener">
                  Capability statement (PDF)
                </a>
              </li>
              <li>
                <a href="/assets/rsb-designation-certificate.pdf" target="_blank" rel="noopener">
                  RSB designation certificate (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              Contact and samples
            </h3>
            <ul>
              <li>
                <Link href="/contact">
                  Request a quote
                </Link>
              </li>
              <li>
                <Link href="/contact#how-we-work">
                  How we work with you
                </Link>
              </li>
              <li>
                <Link href="/testing-lab#submit-samples">
                  How to submit samples
                </Link>
              </li>
            </ul>
            <h3 className="news-h">
              Newsletter
            </h3>
            <NewsForm id="f-news" />
          </div>
        </div>
        <div className="foot-bottom">
          <p>
            © 2026 GeoTesta LTD
          </p>
          <ul>
            <li>
              <Link href="/legal#disclaimer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/legal#privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal#terms">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/legal#accessibility">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/legal#sitemap">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
