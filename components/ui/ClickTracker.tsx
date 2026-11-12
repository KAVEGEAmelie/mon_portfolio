'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

/**
 * Suit les clics importants sur tout le site, sans modifier chaque lien :
 * téléchargement du CV, liens externes (GitHub, LinkedIn, démos…), e-mail et téléphone.
 * Les événements apparaissent dans Vercel > Analytics > Events.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''
      const page = window.location.pathname

      if (href.includes('cv-amelie-kavege.pdf')) {
        track('CV téléchargé', { page })
      } else if (href.startsWith('mailto:')) {
        track('Clic e-mail', { page })
      } else if (href.startsWith('tel:') || href.includes('wa.me')) {
        track('Clic téléphone / WhatsApp', { page })
      } else if (/^https?:\/\//.test(href) && !href.includes(window.location.host)) {
        const host = new URL(href).hostname.replace(/^www\./, '')
        track('Lien externe', { site: host, url: href.slice(0, 200), page })
      }
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
