import { useState } from 'react'
import clsx from 'clsx'
import styled, { keyframes } from 'styled-components'
import { useEffectOnce } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './Loader'

const LoaderOverlay = styled(motion.div)``

const loading = keyframes`
  60%  {
    text-shadow: 0.35em 0 0 currentColor;
  }
  
  100% {
    text-shadow: 0.35em 0 0 currentColor, 0.75em 0 0 currentColor;
  }
`

const LoadingText = styled.div`
  &:after {
    content: '.';
    animation: ${loading} 1s ease alternate infinite;
  }
`

const InitialPageLoader: React.FC = () => {
  const [isInitiallyLoading, setIsInitiallyLoading] = useState(true)

  useEffectOnce(() => {
    let timer: NodeJS.Timeout

    window.onload = () => {
      timer = setTimeout(() => {
        setIsInitiallyLoading(false)
      }, 1700)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  })
  return (
    <AnimatePresence>
      {isInitiallyLoading && (
        <LoaderOverlay
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            'bg-pink-pale',
            'fixed z-50 inset-x-0',
            'w-screen, h-screen',
            'flex items-center justify-center flex-col',
            'text-center'
          )}
        >
          <Loader />
          <LoadingText className="text-pink-hot text-3xl font-extrabold mt-10">
            Loading
          </LoadingText>
        </LoaderOverlay>
      )}
    </AnimatePresence>
  )
}

export default InitialPageLoader
