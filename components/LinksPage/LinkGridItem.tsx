import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'

import { fadeUpDownProps } from 'constants/animation'
import { usePageLoad } from 'contexts/initialPageLoad'

interface Props {
  title: string
  url: string
  thumbnailUrl: string
  tags: string[]
}

interface TagProps {
  tagValue: string
}

const OverlayLink = styled.a`
  & > span {
    opacity: 0;
  }

  &:hover > span {
    opacity: 1;
  }
`

const Tag = styled.div<TagProps>`
  font-size: 8px;
  line-height: 0.8rem;
  background-color: ${props => {
    if (props.tagValue === 'Favorites') return '#34cacf'
    if (props.tagValue === 'Must Haves') return '#aa5ff5'
    return '#fc319b'
  }};

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1rem;
  }
`

const tagMarks: Record<string, string> = {
  Favorites: `❤️`,
  'Must Haves': `⭐️`,
  Partnerships: `👍`,
}

const LinkGridItem: React.FC<Props> = ({ title, url, thumbnailUrl, tags }) => {
  const { isInitiallyLoading, pageLoadDelay } = usePageLoad()

  return (
    <InView threshold={0.2}>
      {({ inView, ref }) => (
        <motion.div
          {...fadeUpDownProps}
          initial="fadeUp"
          animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
          transition={{
            delay: isInitiallyLoading ? pageLoadDelay : 0,
          }}
          ref={ref}
          className="rounded-2xl bg-white relative overflow-hidden"
        >
          <Image
            src={thumbnailUrl}
            layout="responsive"
            quality={100}
            width={448}
            height={448}
          />
          <div className={clsx('px-3 md:px-8', 'py-4 md:py-10')}>
            <h3 className="text-pink-darker text-sm md:text-xl font-bold">
              {title}
            </h3>
          </div>

          <div
            className={clsx(
              'absolute',
              'top-1 md:top-4',
              'right-1 md:right-4',
              'grid gap-y-1 md:gap-y-2'
            )}
          >
            {tags.map(tag => (
              <Tag
                key={tag}
                className={clsx(
                  'flex',
                  'text-white font-bold uppercase',
                  'rounded-lg',
                  'px-2 py-1 md:px-3 md:py-2',
                  'w-28 md:w-44'
                )}
                tagValue={tag}
              >
                <span className="mr-2">{tagMarks[tag]}</span>
                <span className="flex-1 text-center">{tag}</span>
              </Tag>
            ))}
          </div>

          <OverlayLink
            href={url}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              'absolute inset-0 z-10 lg:bg-transparent lg:hover:bg-gray-800 lg:hover:bg-opacity-10',
              'w-full h-full',
              'flex items-center justify-center',
              'transition-all ease-linear duration-200'
            )}
          >
            <span
              className={clsx(
                'hidden lg:flex items-center',
                'text-white text-lg',
                'bg-pink-orange',
                'rounded-full',
                'py-4 px-8',
                'transition-all ease-linear duration-200'
              )}
            >
              Go to website
              <svg
                className="ml-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </span>
          </OverlayLink>
        </motion.div>
      )}
    </InView>
  )
}

export default LinkGridItem
