import clsx from 'clsx'
import styled from 'styled-components'
import Image from 'next/image'

import Button from 'components/Button'
import { instagramSectionContents } from 'constants/home'

const ContentContainer = styled.div`
  width: 1200px;
  max-width: 100%;
`

const InstagramSection: React.FC = () => {
  return (
    <section className="pb-32 relative text-center md:text-left">
      <div className="container">
        <ContentContainer className="mx-auto grid grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-20">
          <div
            className={clsx(
              'col-span-12 md:col-span-6 xl:col-span-5',
              'flex justify-center flex-col'
            )}
          >
            <h2 className="text-pink-darker text-4xl md:text-5xl font-bold mb-8">
              {instagramSectionContents.mainHeading}
            </h2>

            <p className="text-gray-semi-dark text-lg mb-12">
              {instagramSectionContents.mainDescription}
            </p>

            <a
              href="https://www.instagram.com/kimifaery/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary" className="w-72 max-w-full">
                {instagramSectionContents.buttonText}
              </Button>
            </a>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-7">
            <Image
              src="/images/instagram.png"
              alt="Kimifaery Instagram"
              width={687}
              height="472"
              layout="intrinsic"
            />
          </div>
        </ContentContainer>
      </div>
    </section>
  )
}

export default InstagramSection
