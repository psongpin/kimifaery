import clsx from 'clsx'
import Image from 'next/image'
import styled from 'styled-components'

import CTA from 'components/CTA'
import { showcaseContents } from 'constants/home'

const SkillDisplay = styled.div`
  max-width: 600px;
  width: 100%;
`

const ShowcaseSection: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Boxed contents */}
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

        {/* Bullet content */}
        <SkillDisplay
          className={clsx(
            'py-32 mx-auto',
            'flex flex-col items-center gap-y-10 md:gap-y-16'
          )}
        >
          {showcaseContents.skills.map(skill => (
            <div
              className={clsx(
                'flex justify-between md:items-center gap-x-10 md:gap-x-24',
                'w-full'
              )}
            >
              <div className="text-pink-dark">
                <svg
                  className="w-10 h-10 md:w-16 md:h-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-pink-darker font-bold text-3xl mb-2">
                  {skill.title}
                </h3>
                <p className="text-lg text-gray-semi-dark">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </SkillDisplay>

        {/* CTA */}
        <CTA
          heading={showcaseContents.cta.heading}
          buttonText={showcaseContents.cta.buttonText}
        />
      </div>
    </section>
  )
}

export default ShowcaseSection
