import clsx from 'clsx'

import CTA from 'components/CTA'
import LinkGridItem from 'components/LinksPage/LinkGridItem'
import SearchForm from 'components/LinksPage/SearchForm'
import TagFilters from 'components/LinksPage/TagFilters'
import { showcaseContents } from 'constants/home'
import contents from 'constants/links'
import styled from 'styled-components'

const Grid = styled.section`
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: initial;
  }
`

const Links: React.FC = () => {
  return (
    <div className={clsx('container', 'flex-1 flex flex-col', 'pt-40')}>
      <section className="text-center">
        <h1 className="text-pink-darker text-4xl md:text-5xl font-bold mb-6">
          {contents.mainHeading}
        </h1>

        <p className="text-pink-darker md:text-lg mb-10">
          {contents.mainDescription}
        </p>

        <SearchForm />
        <TagFilters />
      </section>

      <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-20 mx-auto w-full">
        <LinkGridItem
          title="Leopold FC540MDS keyboard"
          url="https://www.google.com/"
        />
        <LinkGridItem
          title="Leopold FC540MDS keyboard"
          url="https://www.google.com/"
        />
        <LinkGridItem
          title="Leopold FC540MDS keyboard"
          url="https://www.google.com/"
        />
        <LinkGridItem
          title="Leopold FC540MDS keyboard"
          url="https://www.google.com/"
        />
      </Grid>

      <section className="mt-auto py-32">
        <CTA
          heading={showcaseContents.cta.heading}
          buttonText={showcaseContents.cta.buttonText}
        />
      </section>
    </div>
  )
}

export default Links
