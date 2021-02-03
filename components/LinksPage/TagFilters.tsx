import clsx from 'clsx'
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
})<TagProps>`
  ${props => tagStyleMap[props.tagValue]}
  max-width: 200px;
`

const TagFilters: React.FC = () => {
  return (
    <Frame className="flex justify-center flex-wrap w-full mx-auto">
      <Tag tagValue="All">All</Tag>
      <Tag tagValue="Favorites">Favorites</Tag>
      <Tag tagValue="Must Haves">Must Haves</Tag>
      <Tag tagValue="Partnerships">Partnerships</Tag>
    </Frame>
  )
}

export default TagFilters
