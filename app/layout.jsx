import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewToggle from '@/components/ReviewToggle';
import Behaviors from '@/components/Behaviors';
import WhatsAppChat from '@/components/WhatsAppChat';
import PageClass from '@/components/PageClass';

export const metadata = {
  title: {
    default: 'GeoTesta | Geotechnical investigation and RSB-designated testing lab, Rwanda',
    template: '%s',
  },
  description:
    'GeoTesta is an RSB-designated testing laboratory in Kamonyi District offering geotechnical investigation and laboratory testing for construction in Rwanda.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        />
      </head>
      <body>
        <PageClass>
          <a className="skip" href="#main">Skip to content</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ReviewToggle />
          <WhatsAppChat />
          <Behaviors />
        </PageClass>
      </body>
    </html>
  );
}
