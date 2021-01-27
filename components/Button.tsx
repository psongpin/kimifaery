import clsx from 'clsx'

interface Props {
  variant: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({ variant, children }) => (
  <button
    type="button"
    className={clsx(
      variant === 'primary' && 'bg-pink-dark',
      'text-white text-lg md:text-xl font-medium',
      'px-10 py-4',
      'rounded-full',
      'focus:outline-none hover:opacity-75',
      'transition-all ease-linear duration-300'
    )}
  >
    {children}
  </button>
)

export default Button
