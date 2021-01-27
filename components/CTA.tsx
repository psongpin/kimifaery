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
        'flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-8',
        'mx-auto px-8 py-16 lg:px-16 lg:py-16',
        'bg-pink-peach rounded-2xl'
      )}
    >
      <h3 className="text-pink-darker font-bold text-3xl text-center md:text-left">
        {heading}
      </h3>

      <Button variant="primary">{buttonText}</Button>
    </Frame>
  )
}

export default CTA
