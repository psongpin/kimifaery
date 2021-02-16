import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { usePageLoad } from 'contexts/initialPageLoad'
import { bannerContents } from 'constants/home'
import { fadeUpDownVariants } from 'constants/animation'
import Notification from './Notification'
import Clock from './Clock'

const Frame = styled(motion.section)``

const Banner: React.FC = () => {
  const { pageLoadDelay, isInitiallyLoading } = usePageLoad()

  return (
    <InView>
      {({ inView, ref }) => (
        <Frame
          ref={ref}
          initial="fadeUp"
          animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
          transition={{
            staggerChildren: 0.3,
            delayChildren: isInitiallyLoading ? pageLoadDelay : 0,
          }}
          className="relative overflow-hidden"
        >
          <Image
            src="/images/banner-image.jpg"
            alt="wallpaper"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />

          <div className="container relative flex flex-col items-center min-h-screen pt-32 md:pt-40 pb-40 md:pb-48">
            <Clock />
            <Notification />
          </div>

          <motion.div
            variants={fadeUpDownVariants}
            transition={{
              duration: 0.8,
              easings: ['easeIn', 'easeOut'],
            }}
            className="absolute bottom-8 inset-x-0 mx-auto "
          >
            <motion.div
              animate={{ y: [0, 10, 20, 10, 0] }}
              transition={{ loop: Infinity, duration: 1.5, ease: 'linear' }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-9 h-16 border-4 border-white rounded-full mb-5 flex justify-center transform scale-75 md:scale-100">
                <div className="h-4 border-2 border-white w-0 rounded-full mt-2" />
              </div>
              <p className="text-white md:text-xl">
                {bannerContents.scrollText}
              </p>
            </motion.div>
          </motion.div>
        </Frame>
      )}
    </InView>
  )
}

export default Banner
