import Banner from 'components/Home/Banner'
import InstagramSection from 'components/Home/InstagramSection'
import IntroductionSection from 'components/Home/IntroductionSection'
import ShowcaseSection from 'components/Home/ShowcaseSection'
import { GetStaticProps } from 'next'

import { getJSON, mapMedia } from 'lib/instagram'

interface Props {
  instagramMediaData: {
    alt: string
    postUrl: string
    src: string
  }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://www.instagram.com/kimifaery/')
  const body = await res.text()
  const json = await getJSON(body)
  const instagramMediaData = await mapMedia(json)

  return {
    props: { instagramMediaData },
  }
}

const Home: React.FC<Props> = ({ instagramMediaData }) => {
  return (
    <div className="flex-1">
      <Banner />
      <div className="bg-white relative overflow-hidden scroll-target">
        <IntroductionSection />
        <ShowcaseSection />
        <InstagramSection instagramMediaData={instagramMediaData} />
      </div>
    </div>
  )
}

export default Home
