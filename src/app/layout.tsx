import type {Metadata} from "next";
import {ReactNode} from "react";
import AppShell from "@/components/AppShell/AppShell";
import config from "@/config/sites";

const siteTitle = `${config.meta.title} | ${config.meta.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(config.url),
  title: {
    default: siteTitle,
    template: `${config.meta.title} | %s`,
  },
  description: config.meta.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: config.url,
    siteName: 'Thomas K Bird',
    title: siteTitle,
    description: config.meta.pages.home,
    images: [{ url: config.meta.ogImage, width: 1200, height: 630, alt: 'Production AI. Strong Engineering Teams. Measurable Outcomes.' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thomaskbird',
    creator: '@thomaskbird',
    title: siteTitle,
    description: config.meta.pages.home,
    images: [config.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console ownership; keep it, or Search Console loses verification.
  verification: {
    google: '6ykj4Bc_9yN9tmTt7Hss001L9FhTMU7vmn1l_XvtTO0',
  },
};

// Structured data describing the person behind the site. Every value here is
// also visible on the rendered pages (hero, resume, footer, socials).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thomas Bird',
  alternateName: 'Thomas K Bird',
  url: config.url,
  image: `${config.url}/thomas-bird.png`,
  jobTitle: 'Solutions Architect',
  description: config.meta.pages.home,
  worksFor: {
    '@type': 'Organization',
    name: 'Betco Corporation',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bowling Green',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Applied AI',
    'AI agent platforms',
    'Retrieval-augmented generation',
    'AI evaluation and observability',
    'Solution architecture',
    'Engineering leadership',
    'TypeScript',
    'React',
    'Next.js',
  ],
  sameAs: [
    'https://linkedin.com/in/thomaskbird',
    'https://github.com/thomaskbird',
    'https://twitter.com/thomaskbird',
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <AppShell>{children}</AppShell>
    </html>
  )
}
