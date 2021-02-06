import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

import Footer from 'components/Footer'
import Header from 'components/Header'
import theme from 'styles/theme'
import GlobalStyle from 'styles/globals'

import '../styles/globals.css'

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
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
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
