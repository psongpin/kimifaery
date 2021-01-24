import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import Notification from './Notification'

const Clock = dynamic(() => import('components/Home/Clock'), { ssr: false })

const Frame = styled.div`
  height: 1000px;
`

const Banner: React.FC = () => {
  return (
    <Frame className="bg-pink-dark relative">
      <div className="container pt-40 flex flex-col items-center justify-center">
        <Clock />
        <Notification />

        <motion.div
          animate={{ y: [0, 10, 20, 10, 0] }}
          transition={{ loop: Infinity, duration: 1.5, ease: 'linear' }}
          className="container flex flex-col items-center justify-center mt-72"
        >
          <div className="w-9 h-16 border-4 border-white rounded-full mb-5 flex justify-center">
            <div className="h-4 border-2 border-white w-0 rounded-full mt-2" />
          </div>
          <p className="text-white text-xl">Scroll to unlock</p>
        </motion.div>
      </div>
    </Frame>
  )
}

export default Banner
