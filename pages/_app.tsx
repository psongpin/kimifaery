import type { AppProps } from 'next/app'

import Footer from 'components/Footer'
import Header from 'components/Header'

import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default App
