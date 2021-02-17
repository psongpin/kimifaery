import clsx from 'clsx'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import _isEmpty from 'lodash/isEmpty'
import { motion } from 'framer-motion'

import { fadeUpDownProps } from 'constants/animation'

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

const Frame = styled(motion.div)`
  @media (min-width: 768px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: initial;
  }
`

const Tag = styled.button.attrs({
  className: clsx(
    'py-2 px-4 md:py-3 md:px-8 m-0 md:mx-2.5 md:mb-5',
    'rounded-full border-2',
    'text-xs md:text-lg lg:text-xl font-bold',
    'w-full md:w-52 max-w-full',
    `focus:outline-none`,
    'transition-all ease-in-out duration-200'
  ),
  type: 'button',
})<TagProps>`
  color: ${props =>
    props.selected ? '#ffffff' : getColorByTag(props.tagValue)};
  background-color: ${props =>
    props.selected ? getColorByTag(props.tagValue) : 'transparent'};
  border-color: ${props => getColorByTag(props.tagValue)};

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
    <Frame
      {...fadeUpDownProps}
      className={clsx(
        'grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-0 md:gap-y-0',
        'md:flex md:justify-center md:flex-wrap',
        'max-w-full mx-auto'
      )}
    >
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
