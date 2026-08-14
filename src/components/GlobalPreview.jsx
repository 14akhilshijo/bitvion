import React from 'react'
import styles, { layout } from '../style'
import SectionHeading from './SectionHeading'
import GlobalOrbit from './GlobalOrbit'

const GlobalPreview = () => {
  return (
    <section id='global-preview' className={layout.sectionReverse} aria-labelledby='global-heading'>
      <div className={`${layout.sectionImgReverse} relative min-h-[300px]`}>
        <div className='relative w-full flex items-center justify-center'>
          <GlobalOrbit />
        </div>
        <div className='absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 blue__gradient' aria-hidden='true' />
      </div>

      <div className={layout.sectionInfo}>
        <SectionHeading
          eyebrow='International Technology'
          title={
            <>
              ENGINEERED IN INDIA. <br className='sm:block hidden' />
              <span className='text-gradient'>BUILT FOR GLOBAL SCALE.</span>
            </>
          }
          subtitle='Bitvion Technologies delivers software, AI, automation and digital products to organizations in India and international markets — without claiming physical offices abroad.'
        />

        <p className={`${styles.paragraph} mt-6 max-w-[520px]`}>
          Remote engineering partnerships and structured project delivery across Europe,
          the United Kingdom, the Netherlands and Scotland — alongside a growing base
          of technology work in India.
        </p>
      </div>
    </section>
  )
}

export default GlobalPreview
