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
          eyebrow='Global Technology'
          title={
            <>
              GLOBAL TECHNOLOGY. <br className='sm:block hidden' />
              <span className='text-gradient'>BUILT FROM INDIA.</span>
            </>
          }
          subtitle='Bitvion Technologies is based in Kerala, India and is building technology capabilities for businesses in India and international markets.'
        />

        <p className={`${styles.paragraph} mt-6 max-w-[500px]`}>
          Building technology capabilities for organizations in India and
          international markets, including Europe, the United Kingdom,
          the Netherlands and Scotland.
        </p>
      </div>
    </section>
  )
}

export default GlobalPreview
