import { GetServerSideProps } from 'next'
import clsx from 'clsx'
import styled from 'styled-components'
import { gql } from 'graphql-request'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import CTA from 'components/CTA'
import LinkGridItem from 'components/LinksPage/LinkGridItem'
import SearchForm from 'components/LinksPage/SearchForm'
import TagFilters from 'components/LinksPage/TagFilters'
import { showcaseContents } from 'constants/home'
import contents from 'constants/links'
import graphCmsClient from 'lib/graphcms'
import { Query } from 'types/graphcms'

interface LinkPostsResponse {
  linkPosts: Query['linkPosts']
}

const Grid = styled.section`
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: initial;
  }
`

const GET_LINK_POSTS = gql`
  query getLinkPosts {
    linkPosts {
      id
      title
      redirectLink
      tags
      thumbnail {
        url(transformation: { image: { resize: { height: 470, width: 470 } } })
      }
    }
  }
`

const getLinkPosts = async () => {
  const data = await graphCmsClient.request<LinkPostsResponse>(GET_LINK_POSTS)
  return data
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('linkPosts', getLinkPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Links: React.FC = () => {
  const { data } = useQuery('linkPosts', getLinkPosts)

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

      {data && (
        <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-20 mx-auto w-full">
          {data.linkPosts.map(linkPost => (
            <LinkGridItem
              key={linkPost.id}
              title={linkPost.title}
              url={linkPost.redirectLink}
              thumbnailUrl={linkPost.thumbnail.url}
            />
          ))}
        </Grid>
      )}

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
