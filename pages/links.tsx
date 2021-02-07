import { GetServerSideProps } from 'next'
import clsx from 'clsx'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import CTA from 'components/CTA'
import LinkGridItem from 'components/LinksPage/LinkGridItem'
import SearchForm from 'components/LinksPage/SearchForm'
import TagFilters from 'components/LinksPage/TagFilters'
import Button from 'components/Button'
import { showcaseContents } from 'constants/home'
import contents from 'constants/links'
import { addApolloState, initializeApollo } from 'lib/apolloClient'
import { Query } from 'types/graphcms'
import Loader from 'components/Loader'

interface QueryData {
  linkPostsConnection: Query['linkPostsConnection']
}

interface QueryVariables {
  first: number
  after?: string
}

const Grid = styled.section`
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: initial;
  }
`

const GET_LINK_POSTS = gql`
  query getLinkPosts($first: Int!, $after: String) {
    linkPostsConnection(first: $first, after: $after) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_LINK_POSTS,
    variables: { first: 12 },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

const Links: React.FC = () => {
  const { data, loading, fetchMore } = useQuery<QueryData, QueryVariables>(
    GET_LINK_POSTS,
    {
      variables: { first: 12 },
      notifyOnNetworkStatusChange: true,
    }
  )

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
        <>
          <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-20 mx-auto w-full">
            {data.linkPostsConnection.edges.map(linkPostEdge => (
              <LinkGridItem
                key={linkPostEdge.node.id}
                title={linkPostEdge.node.title}
                url={linkPostEdge.node.redirectLink}
                thumbnailUrl={linkPostEdge.node.thumbnail.url}
              />
            ))}
          </Grid>

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
  )
}

export default Links
