import clsx from 'clsx'
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
  title: string
  url: string
  thumbnailUrl: string
}

const OverlayLink = styled.a`
  & > span {
    opacity: 0;
  }

  &:hover > span {
    opacity: 1;
  }
`

const LinkGridItem: React.FC<Props> = ({ title, url, thumbnailUrl }) => {
  return (
    <div className="rounded-2xl bg-white relative overflow-hidden">
      <Image
        src={thumbnailUrl}
        layout="responsive"
        quality={100}
        width={448}
        height={448}
      />
      <div className="px-8 py-10">
        <h3 className="text-pink-darker text-lg md:text-xl font-bold">
          {title}
        </h3>
      </div>

      <OverlayLink
        href={url}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'absolute inset-0 z-10',
          'w-full h-full',
          'flex items-center justify-center'
        )}
      >
        <span
          className={clsx(
            'flex items-center',
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
    </div>
  )
}

export default LinkGridItem
