import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { headerLinks } from 'constants/header'
import { fadeUpDownProps } from 'constants/animation'

interface Props {
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

interface CloseButtonProps {
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = styled(motion.div)`
  width: 400px;
  max-width: 90%;
`

const Overlay = styled(motion.div)``

const CloseMenu: React.FC<CloseButtonProps> = ({ setMenuVisibility }) => (
  <button
    type="button"
    className="text-white focus:outline-none"
    onClick={() => setMenuVisibility(false)}
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
)

const Navigation: React.FC<Props> = ({ setMenuVisibility }) => {
  const router = useRouter()
  return (
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        className={clsx(
          'fixed inset-0 z-20',
          'w-screen h-screen bg-gray-900 bg-opacity-50',
          'cursor-pointer'
        )}
        onClick={() => setMenuVisibility(false)}
      />
      <Drawer
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        exit={{ x: '100%' }}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        className={clsx(
          'fixed top-0 right-0 z-20',
          'bg-pink-hot',
          'min-h-screen',
          'overflow-auto'
        )}
      >
        <div className="text-right p-4">
          <CloseMenu setMenuVisibility={setMenuVisibility} />
        </div>

        <nav className="mt-8">
          <motion.ul
            initial="fadeUp"
            animate="fadeDown"
            transition={{
              staggerChildren: 0.3,
            }}
          >
            {headerLinks.map(link => (
              <motion.li key={link.url} {...fadeUpDownProps}>
                <Link href={link.url}>
                  <a
                    className={clsx(
                      'block',
                      'p-4',
                      router.pathname === link.url && 'bg-pink-dark',
                      'hover:bg-pink-dark',
                      'text-xl text-white text-center',
                      'transition-all ease-linear duration-200',
                      link.disabled && 'pointer-events-none opacity-40'
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </Drawer>
    </>
  )
}

export default Navigation
