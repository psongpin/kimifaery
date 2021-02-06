import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ''

const graphCmsClient = new GraphQLClient(endpoint)

export default graphCmsClient
