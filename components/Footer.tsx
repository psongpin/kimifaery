import clsx from 'clsx'
import Link from 'next/link'

import { footerTagline, footerLinks } from 'constants/footer'

const Footer: React.FC = () => {
  return (
    <footer className={clsx('mt-auto py-12', 'bg-pink-hot text-white')}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-y-6">
        <p>{footerTagline}</p>

        <ul className={clsx('flex gap-x-5 md:gap-x-12 lg:gap-x-20')}>
          {footerLinks.map(link => (
            <li key={link.url}>
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
