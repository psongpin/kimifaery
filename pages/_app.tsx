import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useEffectOnce } from 'react-use'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { useApollo } from 'lib/apolloClient'
import config from 'constants/seo'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globals'

import 'intersection-observer'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)
  const router = useRouter()

  useEffectOnce(() => {
    const nprogressStart = () => NProgress.start()
    const nprogressDone = () => {
      NProgress.done()
    }
    router.events.on('routeChangeStart', nprogressStart)
    router.events.on('routeChangeComplete', nprogressDone)
    router.events.on('routeChangeError', nprogressDone)

    return () => {
      router.events.off('routeChangeStart', nprogressStart)
      router.events.off('routeChangeComplete', nprogressDone)
      router.events.off('routeChangeError', nprogressDone)
    }
  })

  return (
    <>
      <DefaultSeo {...config} />

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
    </>
  )
}

export default App
