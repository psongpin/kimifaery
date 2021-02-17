import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import clsx from 'clsx'
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'

import { usePageLoad } from 'contexts/initialPageLoad'
import { headerMainLink } from 'constants/header'
import { fadeUpDownProps } from 'constants/animation'
import getHeaderColor from 'lib/header'
import Hamburger from './Hamburger'
import Navigation from './Navigation'

const noHeaderRoutes = ['/me']

const HeaderFrame = styled(motion.header)`
  width: 1920px;
  max-width: 100%;
`

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const router = useRouter()
  const { isInitiallyLoading, pageLoadDelay } = usePageLoad()

  useEffectOnce(() => {
    if (scrollYProgress.get() > 0) {
      setIsOnTop(false)
    }

    scrollYProgress.onChange(value => {
      setIsOnTop(value === 0)
      return value
    })

    const onRouteChangeComplete = () => setMenuVisibility(false)

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  })

  if (noHeaderRoutes.includes(router.pathname)) return null

  return (
    <InView>
      {({ inView, ref }) => (
        <HeaderFrame
          {...fadeUpDownProps}
          initial="fadeUp"
          animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
          transition={{
            delay: isInitiallyLoading ? pageLoadDelay : 0,
          }}
          ref={ref}
          className={clsx(
            'fixed top-0 inset-x-0 z-20',
            'py-6 mx-auto',
            isOnTop ? 'bg-transparent' : 'bg-pink-hot shadow-lg',
            'transition-colors ease-linear duration-300'
          )}
        >
          <div className="container flex items-center justify-between">
            <Link href="/">
              <a
                className={clsx(
                  getHeaderColor(router.pathname, isOnTop),
                  'font-medium',
                  'flex items-center',
                  'transition-all ease-linear duration-300'
                )}
              >
                <span className="text-lg">❤️</span>
                <span className="text-sm underline ml-2">{headerMainLink}</span>
              </a>
            </Link>

            <Hamburger
              isOnTop={isOnTop}
              setMenuVisibility={setMenuVisibility}
            />
          </div>

          <AnimatePresence>
            {isMenuVisible && (
              <Navigation setMenuVisibility={setMenuVisibility} />
            )}
          </AnimatePresence>
        </HeaderFrame>
      )}
    </InView>
  )
}

export default Header
