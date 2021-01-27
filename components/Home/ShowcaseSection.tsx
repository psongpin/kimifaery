import clsx from 'clsx'
import { showcaseContents } from 'constants/home'
import Image from 'next/image'

const ShowcaseSection: React.FC = () => {
  return (
    <section className="pt-32">
      <div className="container">
        <h2 className="text-pink-darker text-4xl md:text-5xl font-bold mb-12">
          {showcaseContents.mainHeading}
        </h2>

        <div
          className={clsx(
            'grid md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6 xl:gap-16',
            'w-96 md:w-full max-w-full mx-auto'
          )}
        >
          {showcaseContents.boxContents.map((content, index) => (
            <div
              className={clsx(
                index === 0 && 'bg-gray-solid',
                index === 1 && 'bg-purple-lavander',
                'rounded-2xl',
                'flex flex-col',
                'overflow-hidden'
              )}
            >
              <div
                className={clsx(
                  'pt-12 md:pt-20 px-4 md:px-8 xl:px-16 pb-10',
                  'flex justify-between items-start lg:items-center flex-col lg:flex-row gap-x-8 gap-y-4'
                )}
              >
                <h3 className="text-pink-darker font-bold text-3xl">
                  {content.mainHeading}
                </h3>
                <p className="text-lg text-gray-semi-dark">
                  {content.subHeading}
                </p>
              </div>

              <div className="mt-auto">
                <Image
                  src={content.img.url}
                  alt={content.mainHeading}
                  width={content.img.w}
                  height={content.img.h}
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

export default ShowcaseSection
