import { useState } from 'react'
import { useEffectOnce } from 'react-use'

import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'
import { getJSON, mapMedia } from 'lib/instagram'
import Loader from 'components/Loader'

type IGData = {
  alt: string
  postUrl: string
  src: string
}[]

const InstagramSection: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [instagramMediaData, setData] = useState<IGData>([])

  useEffectOnce(() => {
    const getIgData = async () => {
      setLoading(true)
      const res = await fetch('https://www.instagram.com/kimifaery/')
      const body = await res.text()
      const json = await getJSON(body)
      setData(mapMedia(json))
      setLoading(false)
    }

    getIgData()
  })
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

        {loading && (
          <div className="flex justify-center py-8">
            <Loader />
          </div>
        )}

        {instagramMediaData.length > 0 && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 mx-auto w-80 md:w-full max-w-full">
            {instagramMediaData.map(data => (
              <a href={data.postUrl} target="_blank" rel="noreferrer">
                <img key={data.postUrl} src={data.src} alt={data.alt} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default InstagramSection
