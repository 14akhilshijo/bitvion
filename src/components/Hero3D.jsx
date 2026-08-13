import React, { useEffect, useRef } from 'react'

const Hero3D = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []
    let time = 0

    const resize = () => {
      const parent = canvas.parentElement
      const dpr = window.devicePixelRatio || 1
      const isMobile = window.innerWidth < 768
      const size = Math.min(parent.offsetWidth, isMobile ? 320 : 520)
      canvas.width = size * dpr
      canvas.height = size * dpr
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const nodeCount = isMobile ? 6 : 10
      nodes = Array.from({ length: nodeCount }, (_, i) => ({
        angle: (i / nodeCount) * Math.PI * 2,
        radius: size * 0.32 + (i % 3) * 12,
        size: isMobile ? 3 : 4 + (i % 2),
        speed: 0.003 + (i % 4) * 0.001,
        layer: i % 3,
      }))
    }

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      const cx = w / 2
      const cy = h / 2

      ctx.clearRect(0, 0, w, h)

      // Outer glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45)
      glow.addColorStop(0, 'rgba(92, 225, 230, 0.15)')
      glow.addColorStop(0.5, 'rgba(33, 77, 118, 0.08)')
      glow.addColorStop(1, 'rgba(0, 4, 15, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Core rings
      for (let r = 3; r >= 1; r--) {
        ctx.beginPath()
        ctx.arc(cx, cy, 28 + r * 18, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(92, 225, 230, ${0.08 + r * 0.06})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Connection lines to nodes
      nodes.forEach((node) => {
        const angle = node.angle + (prefersReducedMotion ? 0 : time * node.speed)
        const nx = cx + Math.cos(angle) * node.radius
        const ny = cy + Math.sin(angle) * node.radius

        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = `rgba(92, 225, 230, ${0.15 + node.layer * 0.08})`
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Data pulse along line
        if (!prefersReducedMotion) {
          const pulse = (Math.sin(time * 0.02 + node.angle * 3) + 1) / 2
          const px = cx + (nx - cx) * pulse
          const py = cy + (ny - cy) * pulse
          ctx.beginPath()
          ctx.arc(px, py, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(92, 225, 230, 0.8)'
          ctx.fill()
        }

        // Node
        ctx.beginPath()
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(92, 225, 230, ${0.5 + node.layer * 0.15})`
        ctx.fill()
      })

      // Central AI core
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40)
      coreGlow.addColorStop(0, 'rgba(92, 225, 230, 0.9)')
      coreGlow.addColorStop(0.4, 'rgba(92, 225, 230, 0.4)')
      coreGlow.addColorStop(1, 'rgba(92, 225, 230, 0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 40, 0, Math.PI * 2)
      ctx.fillStyle = coreGlow
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, 16, 0, Math.PI * 2)
      ctx.fillStyle = '#5CE1E6'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, 8, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()

      // Orbiting panel elements
      if (!prefersReducedMotion) {
        for (let i = 0; i < 3; i++) {
          const a = time * 0.008 + (i * Math.PI * 2) / 3
          const ox = cx + Math.cos(a) * 90
          const oy = cy + Math.sin(a) * 90
          ctx.strokeStyle = 'rgba(92, 225, 230, 0.25)'
          ctx.lineWidth = 1
          ctx.strokeRect(ox - 14, oy - 8, 28, 16)
        }
      }

      if (!prefersReducedMotion) time++
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className='relative w-full h-full flex items-center justify-center' role='img' aria-label='Animated visualization of an intelligent technology system with interconnected nodes'>
      <canvas ref={canvasRef} className='relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' aria-hidden='true' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' aria-hidden='true' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' aria-hidden='true' />
    </div>
  )
}

export default Hero3D
