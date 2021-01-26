import Image from 'next/image'
import clsx from 'clsx'

import { introductionContents } from 'constants/home'

const IntroductionSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-40 bg-white">
      <div className="container">
        <div className="text-center md:text-left">
          <Image
            src="/images/wave.gif"
            alt="wave"
            layout="intrinsic"
            width={180}
            height={174}
          />

          <h1 className="text-pink-darker text-4xl md:text-5xl font-bold mb-8">
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
