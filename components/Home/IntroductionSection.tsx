import Image from 'next/image'
import clsx from 'clsx'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'

import { introductionContents } from 'constants/home'

const PatternFrame = styled.div`
  width: 100%;
  right: -10%;

  @media (min-width: 767px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 85%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }
`

const Pattern: React.FC = () => {
  return (
    <PatternFrame className="absolute top-0 z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 292"
        // width={1400}
        // height={292}
        className="w-full"
      >
        <style />
        <path
          id="prefix__Layer"
          d="M-227.51-41.13S-75.28-81.52 30.01 26.19c105.3 107.72 506.17 419.84 1099.86 172.59C1723.57-48.47 1152.71-106 1152.71-106L-244-92.54l16.49 51.41z"
          opacity={0.502}
          fill="#ffe6e8"
        />
      </svg>
    </PatternFrame>
  )
}

const IntroductionSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-28 relative overflow-hidden">
      <Pattern />
      <InView
        onChange={inView => {
          if (inView) {
            const scrollTarget = document.querySelector('.scroll-target')
            if (
              scrollTarget &&
              window.pageYOffset < scrollTarget.getBoundingClientRect().top
            ) {
              window.scrollTo({
                top: scrollTarget.getBoundingClientRect().top,
                behavior: 'smooth',
              })
            }
          }
        }}
      >
        {({ ref }) => <div ref={ref} className="absolute top-1 inset-x-0" />}
      </InView>

      <div className="container relative">
        <div className="text-center md:text-left">
          <Image
            src="/images/wave.gif"
            alt="wave"
            layout="intrinsic"
            width={180}
            height={174}
          />

          <h1 className="text-pink-darker text-4xl md:text-5xl font-bold mt-4 mb-8">
            {introductionContents.mainHeading}
          </h1>

          <h2 className="text-pink-darker text-4xl md:text-5xl font-bold">
            {introductionContents.subHeading}
          </h2>
        </div>

        <div
          className={clsx(
            'grid md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-6 xl:gap-16',
            'mt-24 mx-auto',
            'w-96 md:w-full max-w-full'
          )}
        >
          {introductionContents.boxesContents.map((content, index) => (
            <div
              key={content.title}
              className={clsx(
                index === 0 && 'bg-blue-green',
                index === 1 && 'bg-pink-bright',
                index === 2 && 'bg-yellow-pale',
                'rounded-2xl',
                'flex flex-col',
                'overflow-hidden'
              )}
            >
              <div className="pt-12 px-4 lg:px-8">
                <h3 className="text-pink-darker font-bold text-3xl mb-5">
                  {content.title}
                </h3>

                <p className="text-lg text-gray-semi-dark">
                  {content.description}
                </p>
              </div>

              <div className="mt-auto pt-12">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={content.imgW}
                  height={content.imgH}
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroductionSection
