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
    width: 1920px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0px 3px 40px #F2827F33;
  }

  /* NProgress */
  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #F2827F;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 4px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #F2827F, 0 0 5px #F2827F;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: #F2827F;
    border-left-color: #F2827F;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default GlobalStyle
