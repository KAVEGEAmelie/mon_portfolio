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

export const metadata: Metadata = {
  title: 'KAVEGE Akou Amélie - Développeuse Web & Mobile',
  description: 'Portfolio professionnel de KAVEGE Akou Amélie, développeuse web et mobile spécialisée en React, Next.js, Flutter et Node.js',
  keywords: ['développeuse web', 'développeuse mobile', 'React', 'Next.js', 'Flutter', 'portfolio'],
  authors: [{ name: 'KAVEGE Akou Amélie' }],
  openGraph: {
    title: 'KAVEGE Akou Amélie - Développeuse Web & Mobile',
    description: 'Portfolio professionnel - Développement Web & Mobile',
    type: 'website',
  },
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
        <ThemeProvider>
          <div className="min-h-screen transition-colors duration-300">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
