export const getJSON = (body: string): any => {
  try {
    const data = body.split('window._sharedData = ')[1].split('</script>')[0]
    return JSON.parse(data.substr(0, data.length - 1))
  } catch (err) {
    throw Error('cannot parse response body')
  }
}

const getAlt = (node: any) => {
  if (node?.accessibility_caption) {
    return node.accessibility_caption
  }

  if (
    node?.edge_media_to_caption?.edges[0] &&
    node?.edge_media_to_caption?.edges[0]?.node
  ) {
    return node.edge_media_to_caption.edges[0].node.text
  }

  return ''
}

const getPostUrl = (node: any) => {
  return `https://www.instagram.com/p/${node?.shortcode}`
}

const getImageSrc = (node: any) => {
  // eslint-disable-next-line no-underscore-dangle
  switch (node.__typename) {
    case 'GraphVideo':
      return node.thumbnail_src
    case 'GraphSidecar':
    default:
      return node.thumbnail_resources[2].src
  }
}

export const mapMedia = (json: any) => {
  const {
    edges,
  } = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media

  const data = edges.map((edge: any) => {
    return {
      alt: getAlt(edge.node),
      postUrl: getPostUrl(edge.node),
      src: getImageSrc(edge.node),
    }
  })

  return data
}

export const test = ''
