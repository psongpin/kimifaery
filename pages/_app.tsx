import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useEffectOnce } from 'react-use'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'

import Footer from 'components/Footer'
import Header from 'components/Header'
import InitialPageLoader from 'components/InitialPageLoader'
import { PageLoadContext, pageLoadDelay } from 'contexts/initialPageLoad'
import { useApollo } from 'lib/apolloClient'
import config from 'constants/seo'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globals'

import 'intersection-observer'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)
  const router = useRouter()
  const [isInitiallyLoading, setIsInitiallyLoading] = useState(true)

  useEffectOnce(() => {
    const nprogressStart = () => NProgress.start()
    const nprogressDone = () => {
      NProgress.done()
    }
    router.events.on('routeChangeStart', nprogressStart)
    router.events.on('routeChangeComplete', nprogressDone)
    router.events.on('routeChangeError', nprogressDone)

    let timer: NodeJS.Timeout

    window.onload = () => {
      timer = setTimeout(() => {
        setIsInitiallyLoading(false)
      }, pageLoadDelay * 1000)
    }

    return () => {
      router.events.off('routeChangeStart', nprogressStart)
      router.events.off('routeChangeComplete', nprogressDone)
      router.events.off('routeChangeError', nprogressDone)
      if (timer) clearTimeout(timer)
    }
  })

  return (
    <>
      <DefaultSeo {...config} />

      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <PageLoadContext.Provider
            value={{ isInitiallyLoading, pageLoadDelay }}
          >
            <InitialPageLoader />

            <div className="page-background bg-pink-pale">
              <div className="page-root flex flex-col min-h-screen relative">
                <Header />
                <Component {...pageProps} />
                <Footer />
              </div>
            </div>
          </PageLoadContext.Provider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
