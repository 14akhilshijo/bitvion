import React, { useCallback, useId, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../../assets'

const NODES = [
  { label: 'AI', angle: -90 },
  { label: 'SOFTWARE', angle: -18 },
  { label: 'AUTOMATION', angle: 54 },
  { label: 'CLOUD', angle: 126 },
  { label: 'DATA', angle: 162 },
  { label: 'PRODUCT', angle: 198 },
]

const polar = (cx, cy, r, deg) => {
  const rad = (deg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const EngineeringCore = ({ variant = 'desktop' }) => {
  const reduceMotion = useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const wrapRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const isMobile = variant === 'mobile'
  const cx = 210
  const cy = 210
  const orbitR = isMobile ? 128 : 142

  const applyTilt = useCallback(
    (clientX, clientY) => {
      if (reduceMotion || !wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      setTilt({
        x: ((clientX - rect.left) / rect.width - 0.5) * (isMobile ? 6 : 10),
        y: ((clientY - rect.top) / rect.height - 0.5) * (isMobile ? 6 : 10),
      })
    },
    [reduceMotion, isMobile],
  )

  return (
    <div
      ref={wrapRef}
      className={`engineering-core relative mx-auto w-full ${
        isMobile ? 'max-w-[min(100%,340px)] min-h-[220px]' : 'max-w-[420px]'
      }`}
      onMouseMove={(e) => applyTilt(e.clientX, e.clientY)}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onTouchMove={(e) => {
        const touch = e.touches[0]
        if (touch) applyTilt(touch.clientX, touch.clientY)
      }}
      onTouchEnd={() => setTilt({ x: 0, y: 0 })}
      role='img'
      aria-label='Bitvion Engineering Core network visualization'
    >
      <div className='bitvion-core-field absolute inset-[4%] rounded-full' aria-hidden='true' />
      <div
        className={reduceMotion ? '' : 'bitvion-core-tilt'}
        style={
          reduceMotion
            ? undefined
            : { transform: `perspective(900px) rotateX(${-tilt.y * 0.35}deg) rotateY(${tilt.x * 0.35}deg)` }
        }
      >
        <svg viewBox='0 0 420 420' className='w-full h-auto mx-auto' style={{ maxHeight: isMobile ? 320 : 400 }} aria-hidden='true'>
          <defs>
            <radialGradient id={`${uid}-eng-glow`} cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#5CE1E6' stopOpacity='0.32' />
              <stop offset='100%' stopColor='#00040f' stopOpacity='0' />
            </radialGradient>
          </defs>
          <circle cx={cx} cy={cy} r='180' fill={`url(#${uid}-eng-glow)`} />
          <circle cx={cx} cy={cy} r='150' fill='none' stroke='rgba(92,225,230,0.12)' strokeWidth='1' />
          <circle cx={cx} cy={cy} r='118' fill='none' stroke='rgba(92,225,230,0.18)' strokeWidth='1' strokeDasharray='4 8' />
          <g className={reduceMotion ? '' : 'bitvion-core-orbit'} style={{ transformOrigin: `${cx}px ${cy}px` }}>
            {NODES.map((node, i) => {
              const p = polar(cx, cy, orbitR, node.angle)
              return (
                <g key={node.label}>
                  <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke='rgba(92,225,230,0.22)' strokeWidth='1' />
                  <circle cx={p.x} cy={p.y} r='3.5' fill='#5CE1E6' className={reduceMotion ? '' : 'bitvion-core-node'} style={{ animationDelay: `${i * 0.5}s` }} />
                </g>
              )
            })}
          </g>
        </svg>
        <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
          <p className='font-poppins text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-secondary/80 mb-2'>
            Bitvion Engineering Core
          </p>
          <img src={bitvionMark} alt='' width={568} height={458} draggable={false} className={`object-contain drop-shadow-[0_0_24px_rgba(92,225,230,0.2)] ${isMobile ? 'w-[92px]' : 'w-[108px]'}`} />
        </div>
      </div>
      <div className='absolute inset-0 pointer-events-none'>
        {NODES.map((node) => {
          const p = polar(50, 50, isMobile ? 42 : 40, node.angle)
          return (
            <span
              key={node.label}
              className='absolute font-poppins text-[8px] sm:text-[9px] uppercase tracking-[0.14em] text-dimWhite/80 px-1.5 py-1 rounded-full bg-[#030912]/55 border border-white/5'
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {node.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default EngineeringCore
