import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { bannerContents } from 'constants/home'
import Notification from './Notification'

const Clock = dynamic(() => import('components/Home/Clock'), { ssr: false })

const Frame = styled.div``

const Banner: React.FC = () => {
  return (
    <Frame className="bg-pink-dark relative min-h-screen pb-40 md:pb-48">
      <div className="container pt-24 md:pt-40 flex flex-col items-center justify-center">
        <Clock />
        <Notification />

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
