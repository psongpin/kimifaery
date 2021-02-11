import { NextSeo } from 'next-seo'

import Banner from 'components/Home/Banner'
import InstagramSection from 'components/Home/InstagramSection'
import IntroductionSection from 'components/Home/IntroductionSection'
import ShowcaseSection from 'components/Home/ShowcaseSection'

import config from 'constants/seo'

const Home: React.FC = () => {
  return (
    <>
      <NextSeo
        {...config}
        title="Hello Kimmy - Home"
        openGraph={{ ...config.openGraph, title: 'Hello Kimmy - Home' }}
      />

      <div className="flex-1">
        <Banner />
        <div className="bg-white relative overflow-hidden scroll-target">
          <IntroductionSection />
          <ShowcaseSection />
          <InstagramSection />
        </div>
      </div>
    </>
  )
}

export default Home
