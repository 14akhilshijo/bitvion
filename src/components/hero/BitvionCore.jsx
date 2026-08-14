import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { bitvionMark } from '../../assets'

const PRIMARY = [
  { label: 'AI', angle: -90, path: '/solutions/artificial-intelligence' },
  { label: 'SOFTWARE', angle: 0, path: '/solutions/software-development' },
  { label: 'AUTOMATION', angle: 90, path: '/solutions/intelligent-automation' },
  { label: 'CLOUD', angle: 180, path: '/solutions/cloud-technology' },
]

const SECONDARY = [
  { label: 'DATA', angle: -135 },
  { label: 'APIs', angle: -45 },
  { label: 'SYSTEMS', angle: 45 },
  { label: 'PRODUCTS', angle: 135 },
]

const polar = (cx, cy, r, deg) => {
  const rad = (deg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

const BitvionCore = ({ compact = false }) => {
  const reduceMotion = useReducedMotion()
  const wrapRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = useCallback(
    (e) => {
      if (reduceMotion || !wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
      setTilt({ x, y })
    },
    [reduceMotion],
  )

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  const cx = 210
  const cy = 210
  const orbitR = compact ? 108 : 148

  return (
    <div
      ref={wrapRef}
      className={`bitvion-core relative mx-auto ${compact ? 'max-w-[300px]' : 'max-w-[440px] lg:max-w-[480px] w-full'}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role='img'
      aria-label='Bitvion Core — intelligent technology network for AI, software, automation and cloud systems'
    >
      <div className='bitvion-core-field absolute inset-[8%] rounded-full' aria-hidden='true' />

      <div
        className={`relative ${reduceMotion ? '' : 'bitvion-core-tilt'}`}
        style={
          reduceMotion
            ? undefined
            : { transform: `perspective(900px) rotateX(${-tilt.y * 0.4}deg) rotateY(${tilt.x * 0.4}deg)` }
        }
      >
        <svg
          viewBox='0 0 420 420'
          className='w-full h-auto'
          style={{ maxHeight: compact ? 300 : 480 }}
          aria-hidden='true'
        >
          <defs>
            <radialGradient id='core-glow' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#5CE1E6' stopOpacity='0.35' />
              <stop offset='55%' stopColor='#0a4a58' stopOpacity='0.12' />
              <stop offset='100%' stopColor='#00040f' stopOpacity='0' />
            </radialGradient>
            <linearGradient id='core-line' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#5CE1E6' stopOpacity='0' />
              <stop offset='50%' stopColor='#5CE1E6' stopOpacity='0.7' />
              <stop offset='100%' stopColor='#5CE1E6' stopOpacity='0' />
            </linearGradient>
          </defs>

          <circle cx={cx} cy={cy} r='188' fill='url(#core-glow)' />
          <circle cx={cx} cy={cy} r='168' fill='none' stroke='rgba(92,225,230,0.08)' strokeWidth='1' />
          <circle cx={cx} cy={cy} r='132' fill='none' stroke='rgba(92,225,230,0.14)' strokeWidth='1' strokeDasharray='4 8' />
          <circle cx={cx} cy={cy} r='96' fill='none' stroke='rgba(92,225,230,0.2)' strokeWidth='1' />

          {[PRIMARY, SECONDARY].flat().map((node) => {
            const p = polar(cx, cy, orbitR, node.angle)
            return (
              <line
                key={node.label}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke='rgba(92,225,230,0.18)'
                strokeWidth='1'
              />
            )
          })}

          <g className={reduceMotion ? '' : 'bitvion-core-orbit'} style={{ transformOrigin: `${cx}px ${cy}px` }}>
            {PRIMARY.map((node, i) => {
              const p = polar(cx, cy, orbitR, node.angle)
              return (
                <g key={node.label}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={p.x}
                    y2={p.y}
                    stroke='url(#core-line)'
                    strokeWidth='1.2'
                    className={reduceMotion ? '' : 'bitvion-core-pulse'}
                    style={{ animationDelay: `${i * 0.8}s` }}
                  />
                  <circle cx={p.x} cy={p.y} r='4' fill='#5CE1E6' className={reduceMotion ? '' : 'bitvion-core-node'} style={{ animationDelay: `${i * 0.6}s` }} />
                </g>
              )
            })}
          </g>

          {SECONDARY.map((node, i) => {
            const p = polar(cx, cy, orbitR * 0.72, node.angle)
            return (
              <g key={node.label}>
                <circle cx={p.x} cy={p.y} r='2.5' fill='rgba(92,225,230,0.45)' className={reduceMotion ? '' : 'bitvion-core-node'} style={{ animationDelay: `${1.2 + i * 0.4}s` }} />
              </g>
            )
          })}
        </svg>

        <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
          <p className='font-poppins text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-secondary/80 mb-3'>
            Bitvion Core
          </p>
          <img
            src={bitvionMark}
            alt=''
            width={568}
            height={458}
            draggable={false}
            className={`object-contain drop-shadow-[0_0_28px_rgba(92,225,230,0.22)] ${compact ? 'w-[88px]' : 'w-[120px] sm:w-[136px]'}`}
          />
        </div>
      </div>

      <div className={`absolute inset-0 ${reduceMotion ? 'pointer-events-none' : ''}`}>
        {PRIMARY.map((node) => {
          const p = polar(50, 50, 42, node.angle)
          return (
            <Link
              key={node.label}
              to={node.path}
              className='absolute bitvion-core-label font-poppins text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-dimWhite hover:text-secondary transition-colors px-2 py-1 rounded-full border border-transparent hover:border-secondary/25 bg-[#030912]/40 backdrop-blur-sm'
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {node.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BitvionCore
