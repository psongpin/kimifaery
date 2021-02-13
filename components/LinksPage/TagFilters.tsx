import clsx from 'clsx'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import _isEmpty from 'lodash/isEmpty'

type TagValues = 'All' | 'Favorites' | 'Must Haves' | 'Partnerships'

interface TagProps {
  tagValue: TagValues
  selected: boolean
}

const TAGS: TagValues[] = ['All', 'Favorites', 'Must Haves', 'Partnerships']

const getColorByTag = (tag: TagValues): string => {
  if (tag === 'Favorites') {
    return '#34cacf'
  }

  if (tag === 'Must Haves') {
    return '#aa5ff5'
  }

  if (tag === 'Partnerships') {
    return '#fc319b'
  }

  return '#f2827f'
}

const Frame = styled.div`
  max-width: 440px;
  @media (min-width: 1024px) {
    max-width: initial;
  }
`

const Tag = styled.button.attrs({
  className: clsx(
    'py-3 px-8 mx-2.5 mb-5',
    'rounded-full border-2',
    'md:text-lg lg:text-xl font-bold',
    'w-full',
    `focus:outline-none`
  ),
  type: 'button',
})<TagProps>`
  color: ${props =>
    props.selected ? '#ffffff' : getColorByTag(props.tagValue)};
  background-color: ${props =>
    props.selected ? getColorByTag(props.tagValue) : 'transparent'};
  border-color: ${props => getColorByTag(props.tagValue)};
  max-width: 200px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => getColorByTag(props.tagValue)};
    color: #ffffff;
  }
`

const TagFilters: React.FC = () => {
  const router = useRouter()

  const onTagClick = (tagValue: TagValues) => () => {
    if (tagValue === 'All') return router.push('/links')

    return router.push(`/links?tag=${tagValue}`)
  }

  return (
    <Frame className="flex justify-center flex-wrap w-full mx-auto">
      {TAGS.map(tag => {
        const condition =
          tag === 'All' ? _isEmpty(router.query) : router.query.tag === tag

        return (
          <Tag
            key={tag}
            selected={condition}
            tagValue={tag}
            onClick={onTagClick(tag)}
          >
            {tag}
          </Tag>
        )
      })}
    </Frame>
  )
}

export default TagFilters
