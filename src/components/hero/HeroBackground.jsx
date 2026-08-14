import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

const HeroBackground = () => {
  const canvasRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let frame = 0
    let raf = 0
    let visible = true

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.00008,
      vy: (Math.random() - 0.5) * 0.00008,
      a: Math.random() * 0.35 + 0.08,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!visible) return
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(92, 225, 230, ${p.a})`
        ctx.fill()
      })

      frame += 1
      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      visible = document.visibilityState === 'visible'
      if (visible) raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduceMotion])

  return (
    <div className='hero-bg absolute inset-0 overflow-hidden pointer-events-none' aria-hidden='true'>
      <div className='hero-bg-grid absolute inset-0' />
      <div className='hero-bg-glow absolute inset-0' />
      {!reduceMotion && <canvas ref={canvasRef} className='absolute inset-0 w-full h-full opacity-60' />}
    </div>
  )
}

export default HeroBackground
