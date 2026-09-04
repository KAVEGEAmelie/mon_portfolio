import type { Metadata } from 'next'
import { Space_Grotesk, Sora, Outfit, Dancing_Script } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

// Polices pour le thème sombre moderne
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-signature',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://amelie-portfolio.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'KAVEGE Akou Amélie - Développeuse Web & Mobile',
    template: '%s | KAVEGE Akou Amélie',
  },
  description: 'Portfolio professionnel de KAVEGE Akou Amélie, développeuse web et mobile spécialisée en React, Next.js, Flutter et Node.js',
  keywords: ['développeuse web', 'développeuse mobile', 'React', 'Next.js', 'Flutter', 'portfolio'],
  authors: [{ name: 'KAVEGE Akou Amélie' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'KAVEGE Akou Amélie - Développeuse Web & Mobile',
    description: 'Portfolio professionnel - Développement Web & Mobile',
    type: 'website',
    url: siteUrl,
    siteName: 'Portfolio de KAVEGE Akou Amélie',
    locale: 'fr_FR',
    images: [{ url: '/images/profile.webp', width: 1200, height: 1200, alt: 'KAVEGE Akou Amélie' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAVEGE Akou Amélie - Développeuse Web & Mobile',
    description: 'Portfolio professionnel - Développement Web & Mobile',
    images: ['/images/profile.webp'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'KAVEGE Akou Amélie',
  jobTitle: 'Développeuse Web & Mobile',
  url: siteUrl,
  email: 'mailto:amekentreprise@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Lomé', addressCountry: 'TG' },
  sameAs: [
    'https://github.com/KAVEGEAmelie',
    'https://www.linkedin.com/in/amkvg/',
    'https://www.instagram.com/amelie_kaa/',
  ],
  knowsAbout: ['React', 'Next.js', 'Flutter', 'Node.js', 'TypeScript'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`
      ${spaceGrotesk.variable}
      ${sora.variable}
      ${outfit.variable}
      ${dancingScript.variable}
    `}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider>
          <div className="min-h-screen transition-colors duration-300">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
