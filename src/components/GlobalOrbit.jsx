import React, { useId } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const MARKETS = [
  { name: 'Netherlands', path: '/global/netherlands', a: -18 },
  { name: 'United Kingdom', path: '/global/united-kingdom', a: 52 },
  { name: 'Europe', path: '/global/europe', a: 138 },
  { name: 'Scotland', path: '/global/scotland', a: 218 },
]

const orbitPoint = (deg) => {
  const rad = ((deg - 90) * Math.PI) / 180
  const rx = 46
  const ry = 20
  return {
    left: 50 + rx * Math.cos(rad),
    top: 52 + ry * Math.sin(rad),
    depth: (Math.sin(rad) + 1) / 2,
  }
}

const GlobalOrbit = ({ linked = true, className = '' }) => {
  const reduceMotion = useReducedMotion()
  const uid = useId().replace(/:/g, '')

  return (
    <div className={`relative w-full max-w-[460px] mx-auto ${className}`}>
      <div className='relative aspect-square'>
        <div
          className='pointer-events-none absolute inset-[8%] rounded-full blur-[70px] opacity-80'
          style={{
            background:
              'radial-gradient(circle, rgba(0,229,255,0.22) 0%, rgba(33,77,118,0.18) 45%, transparent 72%)',
          }}
          aria-hidden='true'
        />
        <div
          className='pointer-events-none absolute left-1/2 bottom-[6%] h-[12%] w-[58%] -translate-x-1/2 rounded-[100%] bg-[#5CE1E6]/20 blur-2xl'
          aria-hidden='true'
        />

        <svg viewBox='0 0 400 400' className='absolute inset-0 h-full w-full overflow-visible' aria-hidden='true'>
          <defs>
            <linearGradient id={`${uid}-beam`} x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#7ef6ff' stopOpacity='0' />
              <stop offset='50%' stopColor='#7ef6ff' stopOpacity='0.85' />
              <stop offset='100%' stopColor='#7ef6ff' stopOpacity='0' />
            </linearGradient>
            <radialGradient id={`${uid}-core`} cx='34%' cy='30%' r='70%'>
              <stop offset='0%' stopColor='#d7fdff' stopOpacity='0.95' />
              <stop offset='28%' stopColor='#5CE1E6' stopOpacity='0.45' />
              <stop offset='68%' stopColor='#0b3d4a' stopOpacity='0.9' />
              <stop offset='100%' stopColor='#02080d' stopOpacity='1' />
            </radialGradient>
          </defs>

          <ellipse cx='200' cy='214' rx='168' ry='62' fill='none' stroke='rgba(92,225,230,0.12)' strokeWidth='1' />
          <ellipse cx='200' cy='214' rx='132' ry='48' fill='none' stroke='rgba(92,225,230,0.2)' strokeWidth='1.1' />

          <motion.ellipse
            cx='200'
            cy='214'
            rx='168'
            ry='62'
            fill='none'
            stroke={`url(#${uid}-beam)`}
            strokeWidth='2'
            strokeDasharray='48 380'
            strokeLinecap='round'
            animate={reduceMotion ? undefined : { strokeDashoffset: [0, -428] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
          />

          {MARKETS.map((market) => {
            const p = orbitPoint(market.a)
            return (
              <line
                key={market.name}
                x1='200'
                y1='188'
                x2={(p.left / 100) * 400}
                y2={(p.top / 100) * 400}
                stroke='rgba(92,225,230,0.18)'
                strokeWidth='1'
                strokeDasharray='4 7'
              />
            )
          })}
        </svg>

        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='relative h-[46%] w-[46%] max-w-[210px]'>
            <motion.div
              className='absolute -inset-[18%] rounded-full'
              style={{
                background:
                  'radial-gradient(circle, rgba(92,225,230,0.28) 0%, rgba(0,180,210,0.08) 55%, transparent 70%)',
              }}
              animate={reduceMotion ? undefined : { opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden='true'
            />

            <div
              className='relative h-full w-full overflow-hidden rounded-full'
              style={{
                background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, rgba(180,250,255,0.12) 16%, transparent 28%), radial-gradient(circle at 50% 55%, #0c5a68 0%, #041820 62%, #01060a 100%)`,
                boxShadow:
                  'inset -22px -28px 36px rgba(0,0,0,0.72), inset 14px 12px 22px rgba(180,255,255,0.16), 0 0 36px rgba(0,229,255,0.28), 0 22px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div
                className='pointer-events-none absolute inset-0 rounded-full'
                style={{
                  background:
                    'linear-gradient(115deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 22%, transparent 40%)',
                }}
                aria-hidden='true'
              />
              <div
                className='pointer-events-none absolute inset-x-[12%] top-[10%] h-[22%] rounded-[100%] bg-white/25 blur-[10px]'
                aria-hidden='true'
              />

              {!reduceMotion && (
                <motion.div
                  className='absolute inset-0'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                  aria-hidden='true'
                >
                  {[-36, -12, 12, 36].map((tilt) => (
                    <div
                      key={tilt}
                      className='absolute left-[-8%] right-[-8%] top-1/2 h-px origin-center border-t border-secondary/25'
                      style={{ transform: `translateY(-50%) rotate(${tilt}deg)` }}
                    />
                  ))}
                  <div className='absolute inset-[8%] rounded-full border border-secondary/15' />
                  <div className='absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-secondary/20' />
                </motion.div>
              )}

              <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <span className='font-poppins text-[10px] uppercase tracking-[0.28em] text-secondary/90'>Hub</span>
                <span className='font-poppins text-[22px] font-semibold leading-none tracking-[0.14em] text-white'>IN</span>
                <span className='mt-1 font-poppins text-[10px] uppercase tracking-[0.2em] text-dimWhite'>Kerala</span>
              </div>
            </div>
          </div>
        </div>

        {MARKETS.map((market, i) => {
          const p = orbitPoint(market.a)
          const scale = 0.86 + p.depth * 0.22
          const z = Math.round(10 + p.depth * 20)
          const className =
            'absolute rounded-full border px-3 py-1.5 font-poppins text-[11px] xs:text-[12px] whitespace-nowrap backdrop-blur-md transition-colors bg-[#030912]/85 border-secondary/45 text-white shadow-[0_0_18px_rgba(92,225,230,0.22)] hover:border-secondary hover:text-secondary'

          const node = (
            <motion.span
              className='flex items-center gap-2'
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 3.1 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className='h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_#5CE1E6]' aria-hidden='true' />
              {market.name}
            </motion.span>
          )

          const style = {
            left: `${p.left}%`,
            top: `${p.top}%`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            zIndex: z,
          }

          return linked ? (
            <Link key={market.name} to={market.path} className={className} style={style}>
              {node}
            </Link>
          ) : (
            <div key={market.name} className={className} style={style}>
              {node}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GlobalOrbit
