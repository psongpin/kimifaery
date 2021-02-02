import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'

const InstagramSection: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-pink-darker text-4xl md:text-5xl font-bold">
            {instagramSectionContents.mainHeading}
          </h2>

          <Button variant="secondary">
            {instagramSectionContents.buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
