import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { layout } from '../style'
import SectionHeading from './SectionHeading'

const ORBITS = [
  { label: 'AI', r: 118, start: -18, duration: 22, size: 10 },
  { label: 'Data', r: 152, start: 48, duration: 28, size: 8 },
  { label: 'Cloud', r: 152, start: 168, duration: 32, size: 8 },
]

const ticks = Array.from({ length: 36 }, (_, i) => i * 10)
const dots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  r: 70 + (i % 5) * 22,
  a: i * 37,
  delay: i * 0.18,
}))

const polar = (r, deg) => {
  const rad = (deg * Math.PI) / 180
  return { x: 200 + r * Math.cos(rad), y: 200 + r * Math.sin(rad) }
}

const TechOrbit = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div className='relative w-full max-w-[420px] aspect-square mx-auto'>
      <div
        className='absolute inset-[12%] rounded-full bg-[#00E5FF]/12 blur-[48px]'
        aria-hidden='true'
      />
      <div
        className='absolute inset-[28%] rounded-full bg-[#5CE1E6]/18 blur-[36px]'
        aria-hidden='true'
      />

      <svg
        viewBox='0 0 400 400'
        className='relative z-[1] w-full h-full overflow-visible'
        aria-hidden='true'
      >
        <defs>
          <radialGradient id='tech-core' cx='50%' cy='42%' r='58%'>
            <stop offset='0%' stopColor='#7ef6ff' stopOpacity='0.95' />
            <stop offset='45%' stopColor='#00d4e8' stopOpacity='0.55' />
            <stop offset='100%' stopColor='#003844' stopOpacity='0.15' />
          </radialGradient>
          <linearGradient id='tech-ring' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#9ff7ff' stopOpacity='0.85' />
            <stop offset='50%' stopColor='#5CE1E6' stopOpacity='0.35' />
            <stop offset='100%' stopColor='#1a6b78' stopOpacity='0.15' />
          </linearGradient>
          <linearGradient id='tech-scan' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#5CE1E6' stopOpacity='0' />
            <stop offset='70%' stopColor='#5CE1E6' stopOpacity='0.08' />
            <stop offset='100%' stopColor='#b8fbff' stopOpacity='0.55' />
          </linearGradient>
          <filter id='tech-glow' x='-40%' y='-40%' width='180%' height='180%'>
            <feGaussianBlur stdDeviation='3.2' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        <circle cx='200' cy='200' r='178' fill='none' stroke='rgba(92,225,230,0.08)' strokeWidth='1' />
        <circle cx='200' cy='200' r='142' fill='none' stroke='url(#tech-ring)' strokeWidth='1.1' strokeDasharray='3 10' />
        <circle cx='200' cy='200' r='104' fill='none' stroke='rgba(92,225,230,0.22)' strokeWidth='1' />
        <circle cx='200' cy='200' r='68' fill='none' stroke='rgba(158,245,255,0.28)' strokeWidth='1.2' />

        {ticks.map((deg) => {
          const outer = polar(178, deg)
          const inner = polar(deg % 90 === 0 ? 168 : 173, deg)
          return (
            <line
              key={deg}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={deg % 90 === 0 ? 'rgba(158,245,255,0.55)' : 'rgba(92,225,230,0.22)'}
              strokeWidth={deg % 90 === 0 ? 1.4 : 0.8}
            />
          )
        })}

        <g transform='translate(200 200)'>
          <motion.g
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              r='178'
              fill='none'
              stroke='rgba(92,225,230,0.18)'
              strokeWidth='1.4'
              strokeDasharray='42 220'
              strokeLinecap='round'
            />
          </motion.g>

          <motion.g
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              r='104'
              fill='none'
              stroke='#5CE1E6'
              strokeWidth='1.5'
              strokeDasharray='18 28 6 52'
              strokeLinecap='round'
              opacity='0.55'
            />
          </motion.g>

          {!reduceMotion && (
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
            >
              <path d='M0 0 L0 -178 A178 178 0 0 1 118 -56 Z' fill='url(#tech-scan)' />
              <line x1='0' y1='0' x2='0' y2='-178' stroke='#c9fdff' strokeWidth='1.6' strokeLinecap='round' />
            </motion.g>
          )}
        </g>

        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`ping-${i}`}
            cx='200'
            cy='200'
            r='36'
            fill='none'
            stroke='rgba(92,225,230,0.45)'
            strokeWidth='1.2'
            initial={{ r: 36, opacity: 0.5 }}
            animate={
              reduceMotion
                ? undefined
                : { r: [36, 176], opacity: [0.45, 0] }
            }
            transition={{
              duration: 4.2,
              repeat: Infinity,
              delay: i * 1.4,
              ease: 'easeOut',
            }}
          />
        ))}

        {dots.map((dot) => {
          const p = polar(dot.r, dot.a)
          return (
            <motion.circle
              key={dot.id}
              cx={p.x}
              cy={p.y}
              r='1.4'
              fill='#9ef6ff'
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.15, 0.9, 0.15], scale: [0.8, 1.3, 0.8] }
              }
              transition={{ duration: 2.8, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
            />
          )
        })}

        <g transform='translate(200 200)'>
          {ORBITS.map((node) => (
            <motion.g
              key={node.label}
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: node.duration, repeat: Infinity, ease: 'linear' }}
            >
              <g transform={`rotate(${node.start})`}>
                <line
                  x1='0'
                  y1='0'
                  x2={node.r}
                  y2='0'
                  stroke='rgba(92,225,230,0.18)'
                  strokeWidth='1'
                  strokeDasharray='3 6'
                />
                <circle
                  cx={node.r}
                  cy='0'
                  r={node.size}
                  fill='#031018'
                  stroke='#7ef6ff'
                  strokeWidth='1.6'
                  filter='url(#tech-glow)'
                />
                <circle cx={node.r} cy='0' r='2.4' fill='#e9feff' />
              </g>
            </motion.g>
          ))}
        </g>

        <motion.g
          filter='url(#tech-glow)'
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          style={{ transformOrigin: '200px 200px' }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <polygon
            points='200,152 241,176 241,224 200,248 159,224 159,176'
            fill='url(#tech-core)'
            stroke='#b8fbff'
            strokeWidth='1.6'
          />
          <path d='M200 178 V222 M178 200 H222' stroke='#041018' strokeWidth='2.4' strokeLinecap='round' />
          <path d='M200 178 V222 M178 200 H222' stroke='#e9feff' strokeWidth='1.3' strokeLinecap='round' />
        </motion.g>
      </svg>

      {ORBITS.map((node, i) => (
        <motion.div
          key={node.label}
          className='absolute z-[2] px-3 py-1.5 rounded-md bg-[#00040f]/90 border border-secondary/35 font-poppins text-[11px] xs:text-[12px] text-secondary tracking-[0.14em] shadow-[0_0_18px_rgba(92,225,230,0.18)] backdrop-blur-sm'
          style={{
            top: i === 0 ? '8%' : i === 1 ? '38%' : '72%',
            left: i === 0 ? '72%' : i === 1 ? '82%' : '4%',
          }}
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 3.4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  )
}

const TechnologyPositioning = () => {
  return (
    <section id='technology' className={layout.section} aria-labelledby='tech-positioning-heading'>
      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='Technology Positioning'
          title={
            <>
              TECHNOLOGY <br className='sm:block hidden' />
              THAT TURNS <br className='sm:block hidden' />
              COMPLEXITY INTO <br className='sm:block hidden' />
              <span className='text-gradient'>CAPABILITY.</span>
            </>
          }
          subtitle='From intelligent automation to enterprise software, Bitvion combines engineering, AI and digital technologies to build practical systems for modern organizations.'
        />
      </div>

      <div className={`${layout.sectionImg} relative min-h-[280px] sm:min-h-[360px]`}>
        <TechOrbit />
        <div className='absolute z-[0] w-[55%] h-[55%] right-0 bottom-0 blue__gradient' aria-hidden='true' />
      </div>
    </section>
  )
}

export default TechnologyPositioning
