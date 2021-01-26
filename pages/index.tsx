import Banner from 'components/Home/Banner'
import IntroductionSection from 'components/Home/IntroductionSection'

const Home: React.FC = () => {
  return (
    <div className="flex-1">
      <Banner />
      <IntroductionSection />
    </div>
  )
}

export default Home
