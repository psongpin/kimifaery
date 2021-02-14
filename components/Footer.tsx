import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { footerTagline, footerLinks } from 'constants/footer'

const noFootererRoutes = ['/me']

const Footer: React.FC = () => {
  const router = useRouter()

  if (noFootererRoutes.includes(router.pathname)) return null

  return (
    <footer
      className={clsx('mt-auto py-12', 'bg-pink-hot text-white', 'relative')}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between">
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
      </div>
    </footer>
  )
}

export default Footer
