import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import clsx from 'clsx'
import { AnimatePresence, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { headerMainLink } from 'constants/header'
import Hamburger from './Hamburger'
import Navigation from './Navigation'

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuVisible, setMenuVisibility] = useState(false)
  const router = useRouter()

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

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-10',
        'py-6',
        isOnTop ? 'bg-transparent' : 'bg-pink-hot shadow-lg',
        'transition-all ease-linear duration-300'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a
            className={clsx(
              isOnTop && router.pathname === '/about' && 'text-pink-dark',
              isOnTop && router.pathname === '/works' && 'text-pink-dark',
              isOnTop && router.pathname === '/links' && 'text-pink-darker',
              isOnTop && router.pathname === '/contact' && 'text-pink-dark',
              isOnTop && router.pathname === '/' && 'text-white',
              !isOnTop && 'text-white',
              'flex items-center',
              'transition-all ease-linear duration-300'
            )}
          >
            <span>❤️</span>
            <span className="underline ml-2">{headerMainLink}</span>
          </a>
        </Link>

        <Hamburger isOnTop={isOnTop} setMenuVisibility={setMenuVisibility} />
      </div>

      <AnimatePresence>
        {isMenuVisible && <Navigation setMenuVisibility={setMenuVisibility} />}
      </AnimatePresence>
    </header>
  )
}

export default Header