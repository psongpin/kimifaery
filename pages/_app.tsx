import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Footer from 'components/Footer'
import Header from 'components/Header'
import theme from 'styles/theme'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
