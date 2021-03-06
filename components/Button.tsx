import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  padding?: string
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  padding = '',
  className = '',
  onClick,
  children,
  type,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    className={clsx(
      variant === 'primary' && 'bg-pink-dark text-white',
      variant === 'secondary' && 'bg-pink-peach text-pink-dark',
      'text-lg md:text-xl font-medium',
      padding || 'px-10 py-4',
      'rounded-full',
      'focus:outline-none hover:opacity-75',
      'transition-all ease-linear duration-300',
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
