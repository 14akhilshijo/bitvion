import React from 'react'

const YatrikBackdrop = () => (
  <div className='absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none' aria-hidden='true'>
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(33,77,118,0.35),transparent_50%),linear-gradient(180deg,#050b16_0%,#00040f_100%)]' />

    <svg className='absolute inset-0 w-full h-full opacity-50' viewBox='0 0 900 520' fill='none' preserveAspectRatio='xMidYMid slice'>
      <path d='M-20 360 C 120 300, 240 390, 380 330 C 520 270, 640 360, 940 280' className='yatrik-route' />
      <path d='M-40 220 C 140 180, 280 250, 430 200 C 600 140, 740 210, 960 160' className='yatrik-route yatrik-route-slow' />
      <path d='M40 480 C 200 420, 340 470, 500 410 C 680 340, 800 400, 920 360' className='yatrik-route' />
      <circle cx='180' cy='318' r='4' fill='#00E5FF' opacity='0.8' />
      <circle cx='430' cy='200' r='4' fill='#00E5FF' opacity='0.7' />
      <circle cx='700' cy='300' r='4' fill='#00E5FF' opacity='0.75' />

      <g opacity='0.22' fill='#00E5FF'>
        <rect x='520' y='390' width='36' height='70' rx='2' />
        <rect x='562' y='360' width='44' height='100' rx='2' />
        <rect x='612' y='375' width='32' height='85' rx='2' />
        <rect x='652' y='348' width='50' height='112' rx='2' />
        <rect x='710' y='382' width='38' height='78' rx='2' />
        <path d='M80 460 L110 410 L140 460 Z' />
        <rect x='96' y='430' width='28' height='30' />
        <rect x='250' y='400' width='70' height='60' rx='3' />
        <rect x='278' y='412' width='14' height='48' />
        <rect x='265' y='428' width='40' height='8' />
        <path d='M760 430 L800 392 L840 430 Z' />
        <rect x='772' y='430' width='56' height='50' />
        <rect x='792' y='448' width='16' height='32' />
      </g>
    </svg>

    <div className='absolute inset-0 bg-gradient-to-r from-[#00040f]/60 via-transparent to-[#00040f]/30' />
  </div>
)

export default YatrikBackdrop
