import clsx from 'clsx'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'

interface TagProps {
  tagValue: 'All' | 'Favorites' | 'Must Haves' | 'Partnerships'
}

const Frame = styled.div`
  max-width: 440px;
  @media (min-width: 1024px) {
    max-width: initial;
  }
`

const tagStyleMap = {
  All: css`
    background-color: #f2827f;
    color: #ffffff;
    border-color: #f2827f;
  `,
  Favorites: css`
    background-color: transparent;
    color: #34cacf;
    border-color: #34cacf;
  `,
  'Must Haves': css`
    background-color: transparent;
    color: #aa5ff5;
    border-color: #aa5ff5;
  `,
  Partnerships: css`
    background-color: transparent;
    color: #fc319b;
    border-color: #fc319b;
  `,
}

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
  ${props => tagStyleMap[props.tagValue]}
  max-width: 200px;
`

const TagFilters: React.FC = () => {
  const router = useRouter()

  const onViewAll = () => router.push('/links')

  const onTagClick = (tagValue: string) => () =>
    router.push(`/links?tag=${tagValue}`)

  return (
    <Frame className="flex justify-center flex-wrap w-full mx-auto">
      <Tag tagValue="All" onClick={onViewAll}>
        All
      </Tag>
      <Tag tagValue="Favorites" onClick={onTagClick('Favorites')}>
        Favorites
      </Tag>
      <Tag tagValue="Must Haves" onClick={onTagClick('Must Haves')}>
        Must Haves
      </Tag>
      <Tag tagValue="Partnerships" onClick={onTagClick('Partnerships')}>
        Partnerships
      </Tag>
    </Frame>
  )
}

export default TagFilters
