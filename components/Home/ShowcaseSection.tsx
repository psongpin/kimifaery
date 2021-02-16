import clsx from 'clsx'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

import CTA from 'components/CTA'
import { usePageLoad } from 'contexts/initialPageLoad'
import { showcaseContents } from 'constants/home'
import { basicFadeUpDownVariants, fadeUpDownProps } from 'constants/animation'

const SkillDisplay = styled(motion.div)`
  width: 600px;
  max-width: 100%;
`

const PatternFrame = styled.div`
  width: 40%;

  @media (min-width: 767px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }

  @media (min-width: 1280px) {
    width: 20%;
  }
`

// Pattern SVGs
const Pattern1: React.FC = () => {
  return (
    <PatternFrame className="absolute top-0 right-0 z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={295.498}
        // height={1079.379}
        viewBox="0 0 295.498 1079.379"
        className="w-full"
      >
        <path
          d="M294.923 0S-21.432 158.349 1.153 403.564s153.26 214.563 229.082 416.22 64.688 259.6 64.688 259.6z"
          fill="#ffe6e8"
          opacity={0.55}
        />
      </svg>
    </PatternFrame>
  )
}

const Pattern2: React.FC = () => {
  return (
    <PatternFrame className="absolute bottom-0 left-0 z-0 transform translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width={357.59}
        // height={1409.455}
        viewBox="0 0 357.59 1409.455"
        className="w-full"
      >
        <path
          d="M0 0s25.94 255.238 122.735 382.685S439.908 651.517 325.4 905.071 0 1409.454 0 1409.454z"
          fill="#fff8db"
        />
      </svg>
    </PatternFrame>
  )
}

// Main Component
const ShowcaseSection: React.FC = () => {
  const { pageLoadDelay, isInitiallyLoading } = usePageLoad()

  return (
    <section className="py-32 relative">
      <Pattern1 />
      <Pattern2 />

      <div className="container relative">
        {/* Boxed contents */}
        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <motion.h2
              {...fadeUpDownProps}
              initial="fadeUp"
              animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
              transition={{
                delay: isInitiallyLoading ? pageLoadDelay : 0,
              }}
              ref={ref}
              className="text-pink-darker text-4xl md:text-5xl font-bold mb-12"
            >
              {showcaseContents.mainHeading}
            </motion.h2>
          )}
        </InView>

        <div
          className={clsx(
            'grid md:grid-cols-2 gap-x-4 gap-y-8 lg:gap-6 xl:gap-16',
            'w-96 md:w-full max-w-full mx-auto'
          )}
        >
          {showcaseContents.boxContents.map((content, index) => (
            <InView threshold={0.2} key={content.mainHeading}>
              {({ inView, ref }) => (
                <motion.div
                  variants={basicFadeUpDownVariants}
                  initial="fadeUp"
                  animate={
                    inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'
                  }
                  transition={{
                    staggerChildren: 0.3,
                    delayChildren: isInitiallyLoading ? pageLoadDelay : 0,
                    duration: 0.8,
                  }}
                  ref={ref}
                  className={clsx(
                    index === 0 && 'bg-gray-solid',
                    index === 1 && 'bg-purple-lavander',
                    'rounded-2xl',
                    'flex flex-col',
                    'overflow-hidden'
                  )}
                >
                  <motion.div
                    {...fadeUpDownProps}
                    className={clsx(
                      'pt-12 md:pt-20 px-4 md:px-8 xl:px-16 pb-10',
                      'flex justify-between items-start lg:items-center flex-col lg:flex-row'
                    )}
                  >
                    <h3
                      className={clsx(
                        'text-pink-darker font-bold text-3xl',
                        'mr-0 lg:mr-8 mb-4 lg:mb-0'
                      )}
                    >
                      {content.mainHeading}
                    </h3>
                    <p className="text-lg text-gray-semi-dark">
                      {content.subHeading}
                    </p>
                  </motion.div>

                  <motion.div {...fadeUpDownProps} className="mt-auto">
                    <Image
                      src={content.img.url}
                      alt={content.mainHeading}
                      width={content.img.w}
                      height={content.img.h}
                      layout="responsive"
                    />
                  </motion.div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>

        {/* Bullet content */}
        <InView threshold={0.2}>
          {({ inView, ref }) => (
            <SkillDisplay
              ref={ref}
              initial="fadeUp"
              animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
              transition={{
                staggerChildren: 0.3,
                delayChildren: isInitiallyLoading ? pageLoadDelay : 0,
              }}
              className={clsx('py-32 mx-auto', 'flex flex-col items-center')}
            >
              {showcaseContents.skills.map(skill => (
                <motion.div
                  {...fadeUpDownProps}
                  key={skill.title}
                  className={clsx(
                    'flex justify-between md:items-center',
                    'w-full mb-10 md:mb-16 last:mb-0'
                  )}
                >
                  <div className="text-pink-dark mr-10 md:mr-24">
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
                </motion.div>
              ))}
            </SkillDisplay>
          )}
        </InView>

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
