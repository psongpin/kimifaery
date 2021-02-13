import clsx from 'clsx'
import Button from 'components/Button'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

const Emoji = styled.p`
  animation-name: ${spin};
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const CustomErrorPage: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-1 justify-center items-center',
        'py-24',
        'text-center'
      )}
    >
      <div>
        <Emoji className="text-9xl mb-8">😭</Emoji>

        <h1 className="text-4xl font-bold text-pink-darker mb-8">
          Oops! Something went wrong.
        </h1>

        <Link href="/">
          <a>
            <Button variant="primary">Proceed to homepage</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CustomErrorPage
