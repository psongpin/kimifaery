import styled, { keyframes } from 'styled-components'

// keyframes
const drop = keyframes`
  0% {
    top: 0%;
    left: 50%; 
  }

  50% {
    top: 50%;
    left: 50%;
  }

  100% {
    top: 50%;
    left: 50%;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`

// subcomponents
const Frame = styled.div`
  width: 100px;
  height: 100px;
  animation: ${rotate} 4s steps(4) infinite;
`

const Box = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.pink.hot};

  &:first-child {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
  }

  &:last-child {
    top: 0;
    left: 50%;
    width: 50%;
    height: 50%;

    animation-name: ${drop};
    animation-duration: 1s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`

// MainComponent
const Loader: React.FC = () => {
  return (
    <Frame>
      <Box className="box box1" />
      <Box className="box box2" />
    </Frame>
  )
}

export default Loader
