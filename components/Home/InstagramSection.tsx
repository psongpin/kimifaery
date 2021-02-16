import clsx from 'clsx'
import styled from 'styled-components'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'
import { fadeUpDownProps } from 'constants/animation'
import { usePageLoad } from 'contexts/initialPageLoad'

const ContentContainer = styled.div`
  width: 1200px;
  max-width: 100%;
`

const InstagramSection: React.FC = () => {
  const { isInitiallyLoading, pageLoadDelay } = usePageLoad()

  return (
    <section className="pb-32 relative text-center md:text-left">
      <div className="container">
        <ContentContainer className="mx-auto grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-20">
          <InView threshold={0.2}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="fadeUp"
                animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
                transition={{
                  staggerChildren: 0.3,
                  delayChildren: isInitiallyLoading ? pageLoadDelay : 0,
                }}
                className={clsx(
                  'col-span-12 md:col-span-6 xl:col-span-5',
                  'flex justify-center flex-col'
                )}
              >
                <motion.h2
                  {...fadeUpDownProps}
                  className="text-pink-darker text-4xl md:text-5xl font-bold mb-8"
                >
                  {instagramSectionContents.mainHeading}
                </motion.h2>

                <motion.p
                  {...fadeUpDownProps}
                  className="text-gray-semi-dark text-lg mb-12"
                >
                  {instagramSectionContents.mainDescription}
                </motion.p>

                <motion.a
                  {...fadeUpDownProps}
                  href="https://www.instagram.com/kimifaery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="secondary" className="w-72 max-w-full">
                    {instagramSectionContents.buttonText}
                  </Button>
                </motion.a>
              </motion.div>
            )}
          </InView>

          <InView threshold={0.2}>
            {({ inView, ref }) => (
              <motion.div
                {...fadeUpDownProps}
                initial="fadeUp"
                animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
                transition={{
                  delay: isInitiallyLoading ? pageLoadDelay : 0,
                }}
                ref={ref}
                className="col-span-12 md:col-span-6 xl:col-span-7"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Kimifaery Instagram"
                  width={687}
                  height="472"
                  layout="intrinsic"
                />
              </motion.div>
            )}
          </InView>
        </ContentContainer>
      </div>
    </section>
  )
}

export default InstagramSection
