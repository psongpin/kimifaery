import { motion } from 'framer-motion'
import styled from 'styled-components'

import { bannerContents } from 'constants/home'
import { fadeUpDownProps } from 'constants/animation'

const Frame = styled(motion.div)`
  width: 821px;
  max-width: 100%;
`

const LetterIcon = styled.span`
  top: 10px;
  left: 1rem;
`

const Notification: React.FC = () => {
  return (
    <Frame
      {...fadeUpDownProps}
      className="bg-white bg-opacity-75 text-pink-darker rounded-lg mt-16 md:mt-32"
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
