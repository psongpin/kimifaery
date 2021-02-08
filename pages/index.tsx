import Banner from 'components/Home/Banner'
import InstagramSection from 'components/Home/InstagramSection'
import IntroductionSection from 'components/Home/IntroductionSection'
import ShowcaseSection from 'components/Home/ShowcaseSection'

const Home: React.FC = () => {
  return (
    <div className="flex-1">
      <Banner />
      <div className="bg-white relative overflow-hidden scroll-target">
        <IntroductionSection />
        <ShowcaseSection />
        <InstagramSection />
      </div>
    </div>
  )
}

export default Home
