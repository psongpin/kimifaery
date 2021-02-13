import { GetServerSideProps } from 'next'
import clsx from 'clsx'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'

import CTA from 'components/CTA'
import LinkGridItem from 'components/LinksPage/LinkGridItem'
import SearchForm from 'components/LinksPage/SearchForm'
import TagFilters from 'components/LinksPage/TagFilters'
import Button from 'components/Button'
import Loader from 'components/Loader'
import { showcaseContents } from 'constants/home'
import contents from 'constants/links'
import config from 'constants/seo'
import { addApolloState, initializeApollo } from 'lib/apolloClient'
import { LinkPostWhereInput, Query } from 'types/graphcms'

interface Props {
  searchString?: string
  tag?: string
}

interface QueryData {
  linkPostsConnection: Query['linkPostsConnection']
}

interface QueryVariables {
  first: number
  after?: string
  where?: LinkPostWhereInput
}

const Grid = styled.section`
  width: 400px;

  @media (min-width: 768px) {
    width: initial;
  }
`

const GET_LINK_POSTS = gql`
  query getLinkPosts($first: Int!, $after: String, $where: LinkPostWhereInput) {
    linkPostsConnection(
      first: $first
      after: $after
      where: $where
      orderBy: createdAt_DESC
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          redirectLink
          tags
          thumbnail {
            url(
              transformation: { image: { resize: { height: 470, width: 470 } } }
            )
          }
        }
      }
    }
  }
`

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { query } = ctx
  const searchString = (query.search as string) || ''
  const tag = (query.tag as string) || ''

  const apolloClient = initializeApollo()

  await apolloClient.query<QueryData, QueryVariables>({
    query: GET_LINK_POSTS,
    variables: {
      first: 12,
      where: {
        ...(searchString && { title_contains: searchString }),
        ...(tag && { tags_contains_some: [tag] }),
      },
    },
  })

  return addApolloState(apolloClient, {
    props: { searchString, tag },
  })
}

const Links: React.FC<Props> = ({ searchString, tag }) => {
  const { data, loading, fetchMore } = useQuery<QueryData, QueryVariables>(
    GET_LINK_POSTS,
    {
      variables: {
        first: 12,
        where: {
          ...(searchString && { title_contains: searchString }),
          ...(tag && { tags_contains_some: [tag] }),
        },
      },
      notifyOnNetworkStatusChange: true,
    }
  )

  return (
    <>
      <NextSeo
        {...config}
        title="Hello Kimmy - Links"
        canonical="https://hellokimmy.com/links/"
        openGraph={{
          ...config.openGraph,
          title: 'Hello Kimmy - Links',
          url: 'https://hellokimmy.com/links/',
        }}
      />

      <div className={clsx('container', 'flex-1 flex flex-col', 'pt-40')}>
        <section className="text-center">
          <h1 className="text-pink-darker text-4xl md:text-5xl font-bold mb-6">
            {contents.mainHeading}
          </h1>

          <p className="text-pink-darker md:text-lg mb-10">
            {contents.mainDescription}
          </p>

          <SearchForm searchString={searchString} />
          <TagFilters />
        </section>

        {data && (
          <>
            {data.linkPostsConnection.edges.length ? (
              <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-20 mx-auto max-w-full">
                {data.linkPostsConnection.edges.map(linkPostEdge => (
                  <LinkGridItem
                    key={linkPostEdge.node.id}
                    title={linkPostEdge.node.title}
                    url={linkPostEdge.node.redirectLink}
                    thumbnailUrl={linkPostEdge.node.thumbnail.url}
                    tags={linkPostEdge.node.tags}
                  />
                ))}
              </Grid>
            ) : (
              <h1 className="text-pink-darker text-3xl font-bold text-center mt-20">
                No links found!
              </h1>
            )}

            {loading && (
              <div className="flex justify-center mt-10">
                <Loader />
              </div>
            )}

            {!loading && data.linkPostsConnection.pageInfo.hasNextPage && (
              <div className="w-60 max-w-full mx-auto mt-10">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() =>
                    fetchMore({
                      variables: {
                        after: data.linkPostsConnection.pageInfo.endCursor,
                      },
                    })
                  }
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        )}

        <section className="mt-auto py-32">
          <CTA
            heading={showcaseContents.cta.heading}
            buttonText={showcaseContents.cta.buttonText}
          />
        </section>
      </div>
    </>
  )
}

export default Links
