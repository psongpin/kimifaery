import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import { footerTagline, footerLinks } from 'constants/footer'
import { usePageLoad } from 'contexts/initialPageLoad'
import { fadeUpDownProps } from 'constants/animation'

const noFootererRoutes = ['/me']

const Footer: React.FC = () => {
  const router = useRouter()
  const { pageLoadDelay, isInitiallyLoading } = usePageLoad()

  if (noFootererRoutes.includes(router.pathname)) return null

  return (
    <InView>
      {({ inView, ref }) => (
        <footer
          ref={ref}
          className={clsx(
            'mt-auto py-12',
            'bg-pink-hot text-white',
            'relative',
            'origin-bottom'
          )}
        >
          <motion.div
            {...fadeUpDownProps}
            initial="fadeUp"
            animate={inView ? 'fadeDown' : 'fadeUp'}
            transition={{
              delay: isInitiallyLoading ? pageLoadDelay : 0,
            }}
            className="container flex flex-col md:flex-row items-center justify-between"
          >
            <p className="mb-6 md:mb-0">{footerTagline}</p>

            <ul className={clsx('flex')}>
              {footerLinks.map(link => (
                <li key={link.url} className="mr-5 md:mr-12 lg:mr-20 last:mr-0">
                  <Link href={link.url}>
                    <a className="hover:opacity-50 transition-all ease-linear duration-200">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </footer>
      )}
    </InView>
  )
}

export default Footer
