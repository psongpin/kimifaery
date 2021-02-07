import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import Footer from 'components/Footer'
import Header from 'components/Header'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globals'

import '../styles/globals.css'
import { useApollo } from 'lib/apolloClient'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  )
}

export default App
