import clsx from 'clsx'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'

import { usePageLoad } from 'contexts/initialPageLoad'
import { fadeUpDownProps } from 'constants/animation'
import Button from './Button'

interface Props {
  heading: string
  buttonText: string
}

const Frame = styled(motion.div)`
  width: 1200px;
  max-width: 100%;
`

const CTA: React.FC<Props> = ({ heading, buttonText }) => {
  const { isInitiallyLoading, pageLoadDelay } = usePageLoad()
  return (
    <InView threshold={0.2}>
      {({ inView, ref }) => (
        <Frame
          {...fadeUpDownProps}
          initial="fadeUp"
          animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
          transition={{
            delay: isInitiallyLoading ? pageLoadDelay : 0,
          }}
          ref={ref}
          className={clsx(
            'flex flex-col md:flex-row justify-between items-center',
            'mx-auto px-8 py-16 lg:px-16 lg:py-16',
            'bg-pink-peach rounded-2xl'
          )}
        >
          <h3 className="text-pink-darker font-bold text-3xl text-center md:text-left mr-0 md:mr-10 mb-8 md:mb-0">
            {heading}
          </h3>

          <a href="mailto:work@hellokimmy.com">
            <Button variant="primary">{buttonText}</Button>
          </a>
        </Frame>
      )}
    </InView>
  )
}

export default CTA
