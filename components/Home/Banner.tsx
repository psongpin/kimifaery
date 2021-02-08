import styled from 'styled-components'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { bannerContents } from 'constants/home'
import Notification from './Notification'

const Clock = dynamic(() => import('components/Home/Clock'), { ssr: false })

const Frame = styled.section``

const Banner: React.FC = () => {
  return (
    <Frame className="relative min-h-screen pb-40 md:pb-48 overflow-hidden">
      <InView
        onChange={inView => {
          if (inView) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        }}
      >
        {({ ref }) => <div ref={ref} className="absolute bottom-1 inset-x-0" />}
      </InView>

      <Image
        src="/images/banner-image.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="container pt-24 md:pt-40 flex flex-col items-center justify-center">
        <div className="relative">
          <Clock />
          <Notification />
        </div>

        <motion.div
          animate={{ y: [0, 10, 20, 10, 0] }}
          transition={{ loop: Infinity, duration: 1.5, ease: 'linear' }}
          className="absolute bottom-8 flex flex-col items-center justify-center"
        >
          <div className="w-9 h-16 border-4 border-white rounded-full mb-5 flex justify-center transform scale-75 md:scale-100">
            <div className="h-4 border-2 border-white w-0 rounded-full mt-2" />
          </div>
          <p className="text-white md:text-xl">{bannerContents.scrollText}</p>
        </motion.div>
      </div>
    </Frame>
  )
}

export default Banner
