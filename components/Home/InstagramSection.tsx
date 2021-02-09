import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'

interface Props {
  instagramMediaData: {
    alt: string
    postUrl: string
    src: string
  }[]
}

const InstagramSection: React.FC<Props> = ({ instagramMediaData }) => {
  return (
    <section className="pb-32 relative">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row items-center mb-12 text-center md:text-left">
          <h2 className="text-pink-darker text-4xl md:text-5xl font-bold mb-8 md:mb-0">
            {instagramSectionContents.mainHeading}
          </h2>

          <a
            href="https://www.instagram.com/kimifaery/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              {instagramSectionContents.buttonText}
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 mx-auto w-80 md:w-full max-w-full">
          {instagramMediaData.map(data => (
            <a href={data.postUrl} target="_blank" rel="noreferrer">
              <img key={data.postUrl} src={data.src} alt={data.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
