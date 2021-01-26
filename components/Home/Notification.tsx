import { motion } from 'framer-motion'
import styled from 'styled-components'

import { bannerContents } from 'constants/home'

const Frame = styled(motion.div)`
  max-width: 821px;
  width: 100%;
`

const LetterIcon = styled.span`
  top: 10px;
  left: 1rem;
`

const Notification: React.FC = () => {
  return (
    <Frame
      initial="out"
      animate="in"
      variants={{
        out: { y: -30, opacity: 0 },
        in: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.2, delay: 0.5, ease: 'linear' }}
      className="bg-white bg-opacity-50 text-pink-darker rounded-lg mt-10 md:mt-20"
    >
      <div className="p-4 pl-16 flex justify-between border-b border-white relative">
        <LetterIcon className="absolute top-0 left-0 text-3xl">💌</LetterIcon>
        <span>{bannerContents.mesage}</span>
        <span>{bannerContents.now}</span>
      </div>

      <div className="py-6 pl-16 pr-4 md:pr-16">
        {bannerContents.notificationMessage}
      </div>
    </Frame>
  )
}

export default Notification
