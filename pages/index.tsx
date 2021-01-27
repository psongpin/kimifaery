import Banner from 'components/Home/Banner'
import IntroductionSection from 'components/Home/IntroductionSection'
import ShowcaseSection from 'components/Home/ShowcaseSection'

const Home: React.FC = () => {
  return (
    <div className="flex-1">
      <Banner />
      <div className="bg-white">
        <IntroductionSection />
        <ShowcaseSection />
      </div>
    </div>
  )
}

export default Home
