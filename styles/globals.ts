import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-Bold.eot');
    src: url('/fonts/Manrope-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-Bold.woff2') format('woff2'),
        url('/fonts/Manrope-Bold.woff') format('woff'),
        url('/fonts/Manrope-Bold.ttf') format('truetype'),
        url('/fonts/Manrope-Bold.svg#Manrope-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-ExtraLight.eot');
    src: url('/fonts/Manrope-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-ExtraLight.woff2') format('woff2'),
        url('/fonts/Manrope-ExtraLight.woff') format('woff'),
        url('/fonts/Manrope-ExtraLight.ttf') format('truetype'),
        url('/fonts/Manrope-ExtraLight.svg#Manrope-ExtraLight') format('svg');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-ExtraBold.eot');
    src: url('/fonts/Manrope-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-ExtraBold.woff2') format('woff2'),
        url('/fonts/Manrope-ExtraBold.woff') format('woff'),
        url('/fonts/Manrope-ExtraBold.ttf') format('truetype'),
        url('/fonts/Manrope-ExtraBold.svg#Manrope-ExtraBold') format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-Medium.eot');
    src: url('/fonts/Manrope-Medium.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-Medium.woff2') format('woff2'),
        url('/fonts/Manrope-Medium.woff') format('woff'),
        url('/fonts/Manrope-Medium.ttf') format('truetype'),
        url('/fonts/Manrope-Medium.svg#Manrope-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-SemiBold.eot');
    src: url('/fonts/Manrope-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-SemiBold.woff2') format('woff2'),
        url('/fonts/Manrope-SemiBold.woff') format('woff'),
        url('/fonts/Manrope-SemiBold.ttf') format('truetype'),
        url('/fonts/Manrope-SemiBold.svg#Manrope-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-Light.eot');
    src: url('/fonts/Manrope-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-Light.woff2') format('woff2'),
        url('/fonts/Manrope-Light.woff') format('woff'),
        url('/fonts/Manrope-Light.ttf') format('truetype'),
        url('/fonts/Manrope-Light.svg#Manrope-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Manrope';
    src: url('/fonts/Manrope-Regular.eot');
    src: url('/fonts/Manrope-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Manrope-Regular.woff2') format('woff2'),
        url('/fonts/Manrope-Regular.woff') format('woff'),
        url('/fonts/Manrope-Regular.ttf') format('truetype'),
        url('/fonts/Manrope-Regular.svg#Manrope-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .page-root {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 3px 40px #F2827F33;
  }
`

export default GlobalStyle
