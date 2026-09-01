import type { Metadata } from 'next';
import { club } from '@/content/club';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(club.siteUrl),
  title: {
    default: `${club.name} — ${club.tagline}`,
    template: `%s — Leo Saegis Campus`,
  },
  description: club.description,
  applicationName: club.name,
  /* Dark-first site: tell the browser so form controls and scrollbars match. */
  themeColor: '#08090c',
  openGraph: {
    type: 'website',
    siteName: club.name,
    title: club.name,
    description: club.description,
    url: club.siteUrl,
    locale: 'en_LK',
    images: [
      {
        url: club.heroImage.src,
        width: club.heroImage.width,
        height: club.heroImage.height,
        alt: club.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: club.name,
    description: club.description,
  },
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: club.name,
  description: club.description,
  url: club.siteUrl,
  foundingDate: club.charterDate,
  email: club.contact.email,
  parentOrganization: { '@type': 'Organization', name: club.district, url: club.districtUrl },
  sameAs: [club.socials.instagram, club.socials.facebook, club.socials.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontVariables}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-page"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
