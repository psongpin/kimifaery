import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Footer from 'components/Footer'
import Header from 'components/Header'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globals'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="page-background bg-pink-pale">
        <div className="page-root flex flex-col min-h-screen relative">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
