import { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, A11y, Pagination } from 'swiper'
import styled from 'styled-components'

import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'
import { getJSON, mapMedia } from 'lib/instagram'
import Loader from 'components/Loader'

SwiperCore.use([A11y, Autoplay, Pagination])

type IGData = {
  alt: string
  postUrl: string
  src: string
}[]

const SwiperFrame = styled.div`
  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet:focus {
    outline: none;
  }

  .swiper-pagination-bullet-active {
    background-color: #fdb6bc;
  }
`

const InstagramSection: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [instagramMediaData, setData] = useState<IGData>([])

  useEffectOnce(() => {
    const getIgData = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://www.instagram.com/kimifaery/')
        const body = await res.text()
        const json = await getJSON(body)
        setData(mapMedia(json))
      } catch (err) {
        console.log(err)
        setError('Something went wrong while loading Instagram data.')
      } finally {
        setLoading(false)
      }
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

        {error && (
          <p className="text-center text-pink-darker text-lg font-bold py-10">
            {error}
          </p>
        )}

        {instagramMediaData.length > 0 && !error && (
          <SwiperFrame>
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 32,
                },
              }}
            >
              {instagramMediaData.map(data => (
                <SwiperSlide key={data.postUrl}>
                  <div className="pb-10">
                    <a href={data.postUrl} target="_blank" rel="noreferrer">
                      <img
                        key={data.postUrl}
                        src={data.src}
                        alt={data.alt}
                        className="mx-auto"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperFrame>
        )}
      </div>
    </section>
  )
}

export default InstagramSection
