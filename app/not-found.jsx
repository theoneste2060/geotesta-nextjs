import Link from 'next/link';

export const metadata = { title: { absolute: 'Page not found | GeoTesta' } };

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap page-head">
        <h1>Page not found</h1>
        <p className="lead">The page you asked for does not exist or has moved.</p>
        <p className="actions">
          <Link href="/" className="btn">Go to the home page</Link>
          <Link href="/contact" className="quiet">Contact us</Link>
        </p>
      </div>
    </section>
  );
}
