import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useEffectOnce, useTimeout } from 'react-use'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'

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

  const [isReady] = useTimeout(pageLoadDelay * 1000)

  return (
    <>
      <DefaultSeo {...config} />

      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <PageLoadContext.Provider
            value={{ isInitiallyLoading: !isReady(), pageLoadDelay }}
          >
            <InitialPageLoader />

            <div className="page-background bg-pink-pale">
              <div className="page-root flex flex-col min-h-screen relative">
                <Header />
                <AnimatePresence exitBeforeEnter initial={false}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={router.pathname}
                  >
                    <Component {...pageProps} />
                  </motion.div>
                </AnimatePresence>
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
