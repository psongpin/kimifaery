import CTA from 'components/CTA'
import { showcaseContents } from 'constants/home'

const Links: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <section className="container mt-auto py-32">
        <CTA
          heading={showcaseContents.cta.heading}
          buttonText={showcaseContents.cta.buttonText}
        />
      </section>
    </div>
  )
}

export default Links
