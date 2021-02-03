import clsx from 'clsx'
import { useRouter } from 'next/router'

interface Props {
  isOnTop: boolean
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger: React.FC<Props> = ({ isOnTop, setMenuVisibility }) => {
  const router = useRouter()

  return (
    <button
      type="button"
      className={clsx(
        isOnTop && router.pathname === '/about' && 'text-pink-dark',
        isOnTop && router.pathname === '/works' && 'text-pink-dark',
        isOnTop && router.pathname === '/links' && 'text-pink-darker',
        isOnTop && router.pathname === '/contact' && 'text-pink-dark',
        isOnTop && router.pathname === '/' && 'text-white',
        !isOnTop && 'text-white',
        'focus:outline-none border-0',
        'transition-all ease-linear duration-300'
      )}
      onClick={() => setMenuVisibility(true)}
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

export default Hamburger
