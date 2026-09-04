'use client'

import { useEffect, useRef } from 'react'

// Tresses de code : lignes fibre optique entrelacées (cyan/rose) qui réagissent à la souris
export default function CodeBraids({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let raf = 0
    let t = 0

    // Position souris lissée (en coordonnées canvas)
    const mouse = { x: -9999, y: -9999 }
    const smooth = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const CYAN = '0, 212, 255'
    const ROSE = '255, 107, 157'

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // interpolation douce vers la souris
      smooth.x += (mouse.x - smooth.x) * 0.06
      smooth.y += (mouse.y - smooth.y) * 0.06

      const groups = 4
      const strandsPerGroup = 3
      const amp = Math.min(34, height * 0.045)
      const step = 10

      for (let g = 0; g < groups; g++) {
        const baseY = height * ((g + 1) / (groups + 1))

        for (let s = 0; s < strandsPerGroup; s++) {
          const phase = (s * Math.PI * 2) / strandsPerGroup
          const isRose = (g + s) % 3 === 0
          const rgb = isRose ? ROSE : CYAN

          ctx.beginPath()
          for (let x = 0; x <= width + step; x += step) {
            // entrelacement : deux sinusoïdes légèrement désaccordées
            let y =
              baseY +
              amp * Math.sin(x * 0.008 + t + phase) +
              amp * 0.4 * Math.sin(x * 0.02 - t * 0.7 + phase)

            // la souris écarte doucement les fibres
            const dx = x - smooth.x
            const dy = y - smooth.y
            const dist2 = dx * dx + dy * dy
            const push = Math.exp(-dist2 / 18000) * 40
            y += dy >= 0 ? push : -push

            if (x === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.strokeStyle = `rgba(${rgb}, ${isRose ? 0.22 : 0.18})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      }

      t += 0.008
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reducedMotion) {
      // une seule frame statique, sans animation ni souris
      t = 1.5
      const id = requestAnimationFrame(() => {
        ctx.clearRect(0, 0, width, height)
        draw()
        cancelAnimationFrame(raf)
      })
      return () => {
        cancelAnimationFrame(id)
        cancelAnimationFrame(raf)
        window.removeEventListener('resize', resize)
      }
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
