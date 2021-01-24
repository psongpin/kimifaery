import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import Notification from './Notification'

const Clock = dynamic(() => import('components/Home/Clock'), { ssr: false })

const Frame = styled.div``

const Banner: React.FC = () => {
  return (
    <Frame className="bg-pink-dark relative">
      <div className="container pt-32 md:pt-40 pb-24 flex flex-col items-center justify-center">
        <Clock />
        <Notification />

        <motion.div
          animate={{ y: [0, 10, 20, 10, 0] }}
          transition={{ loop: Infinity, duration: 1.5, ease: 'linear' }}
          className="container flex flex-col items-center justify-center mt-24 md:mt-40 lg:mt-64"
        >
          <div className="w-9 h-16 border-4 border-white rounded-full mb-5 flex justify-center">
            <div className="h-4 border-2 border-white w-0 rounded-full mt-2" />
          </div>
          <p className="text-white text-xl">Scroll to unlock</p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 transform rotate-180 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>
    </Frame>
  )
}

export default Banner
