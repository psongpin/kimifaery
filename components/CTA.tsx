import clsx from 'clsx'
import styled from 'styled-components'
import Button from './Button'

interface Props {
  heading: string
  buttonText: string
}

const Frame = styled.div`
  max-width: 1100px;
  width: 100%;
`

const CTA: React.FC<Props> = ({ heading, buttonText }) => {
  return (
    <Frame
      className={clsx(
        'flex flex-col md:flex-row justify-between items-center',
        'mx-auto px-8 py-16 lg:px-16 lg:py-16',
        'bg-pink-peach rounded-2xl'
      )}
    >
      <h3 className="text-pink-darker font-bold text-3xl text-center md:text-left mr-0 md:mr-10 mb-8 md:mb-0">
        {heading}
      </h3>

      <a href="mailto:work@hellokimmy.com">
        <Button variant="primary">{buttonText}</Button>
      </a>
    </Frame>
  )
}

export default CTA
