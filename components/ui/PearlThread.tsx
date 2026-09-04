'use client'

import { useEffect, useRef, useState } from 'react'

const PEARLS = [
  { x: 0.12, color: '#00d4ff', title: '2 projets en prod', desc: 'AfrikMode & TogoStartup, livrés et utilisés' },
  { x: 0.38, color: '#ff6b9d', title: 'GLSI', desc: 'Licence Génie Logiciel & SI — IAI-Togo, 2026' },
  { x: 0.64, color: '#fbbf24', title: 'Lomé, Togo', desc: 'Basée sur place, ouverte aux missions locales' },
  { x: 0.9, color: '#8b5cf6', title: 'Remote ready', desc: 'Disponible pour des missions à distance' },
]

const AMPLITUDE = 10
const HEIGHT = 72

// Fil de perles : fil ondulant + 4 perles-étapes, détail au survol
export default function PearlThread({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const pearlRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const path = pathRef.current
    if (!container || !path) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mid = HEIGHT / 2
    let raf = 0
    let t = 0

    const waveY = (ratio: number, time: number) =>
      mid + AMPLITUDE * Math.sin(ratio * Math.PI * 2.2 + time)

    const render = () => {
      const width = container.clientWidth
      if (width > 0) {
        const step = 16
        let d = ''
        for (let x = 0; x <= width + step; x += step) {
          const y = waveY(x / width, t)
          d += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`
        }
        path.setAttribute('d', d)

        PEARLS.forEach((pearl, i) => {
          const el = pearlRefs.current[i]
          if (el) el.style.top = `${waveY(pearl.x, t)}px`
        })
      }
    }

    const animate = () => {
      t += 0.012
      render()
      raf = requestAnimationFrame(animate)
    }

    render()
    if (!reducedMotion) raf = requestAnimationFrame(animate)

    const onResize = () => render()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className={className}>
      <div ref={containerRef} className="relative" style={{ height: HEIGHT }}>
        <svg className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
          <path ref={pathRef} fill="none" stroke="#2A2A36" strokeWidth="1.5" />
        </svg>

        {PEARLS.map((pearl, i) => (
          <button
            key={pearl.title}
            ref={el => { pearlRefs.current[i] = el }}
            type="button"
            aria-label={`${pearl.title} — ${pearl.desc}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-[width,height,box-shadow] duration-300"
            style={{
              left: `${pearl.x * 100}%`,
              top: HEIGHT / 2,
              width: active === i ? 26 : 22,
              height: active === i ? 26 : 22,
              background: `radial-gradient(circle at 35% 35%, ${pearl.color}, ${pearl.color}66)`,
              boxShadow: active === i ? `0 0 18px ${pearl.color}` : `0 0 6px ${pearl.color}55`,
            }}
          >
            {/* Carte détail au survol */}
            {active === i && (
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 p-3 rounded-lg bg-dark-surface border border-dark-border text-left shadow-xl z-20 pointer-events-none"
              >
                <span className="block text-sm font-section font-bold mb-1" style={{ color: pearl.color }}>
                  {pearl.title}
                </span>
                <span className="block text-xs text-dark-muted font-body leading-relaxed">
                  {pearl.desc}
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="text-xs text-dark-muted/70 font-body italic mt-1">chaque perle, une étape</p>
    </div>
  )
}
