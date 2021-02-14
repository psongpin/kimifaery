import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import PromoCodes from 'components/PromoCodes'

interface LinkButtonProps {
  url: string
  label: string
  isExternal: boolean
  bgColor: string
  iconUrl: string
}

const LINKS = [
  {
    url: '/',
    label: 'www.hellokimmy.com',
    isExternal: false,
    bgColor: '#F2827F',
    iconUrl: 'images/hello-kimmy.svg',
  },
  {
    url: '/links',
    label: 'Links',
    isExternal: false,
    bgColor: '#FED47E',
    iconUrl: 'images/links.svg',
  },
  {
    url: 'https://www.facebook.com/kimifaery/',
    label: 'Facebook Gaming',
    isExternal: true,
    bgColor: '#A4E5DF',
    iconUrl: 'images/fb-gaming.svg',
  },
  {
    url: 'https://www.tiktok.com/@kimifaery',
    label: 'Tiktok',
    isExternal: true,
    bgColor: '#CBACEB',
    iconUrl: 'images/tiktok.svg',
  },
]

const Frame = styled.div`
  max-width: 100%;
  width: 767px;
  box-shadow: 0px 3px 40px #f2827f33;
  background-image: url('/images/me-pattern.svg');
  background-repeat: no-repeat;
  background-position: top center;
`

const ContentFrame = styled.div`
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`

const Content = styled.div`
  max-width: 100%;
  width: 340px;
`

const LinkButtonFrame = styled.span<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
`

const IconFrame = styled.span`
  width: 32px;
`

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  label,
  isExternal,
  bgColor,
  iconUrl,
}) => {
  return !isExternal ? (
    <Link href={url}>
      <a className="block">
        <LinkButtonFrame
          bgColor={bgColor}
          className={clsx(
            'text-lg text-white',
            'flex',
            'py-4 px-6',
            'rounded-full',
            'hover:opacity-75',
            'transition-all ease-in-out duration-200'
          )}
        >
          <IconFrame className="text-left mr-4">
            <img src={iconUrl} alt={label} />
          </IconFrame>
          {label}
        </LinkButtonFrame>
      </a>
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noreferrer" className="block">
      <LinkButtonFrame
        bgColor={bgColor}
        className={clsx(
          'text-lg text-white',
          'flex',
          'py-4 px-6',
          'rounded-full',
          'hover:opacity-75',
          'transition-all ease-in-out duration-200'
        )}
      >
        <IconFrame className="text-left mr-4">
          <img src={iconUrl} alt={label} />
        </IconFrame>
        {label}
      </LinkButtonFrame>
    </a>
  )
}

const MePage: React.FC = () => {
  return (
    <Frame className="flex-1 flex mx-auto bg-white">
      <ContentFrame className="flex-1 mt-32 bg-pink-pale rounded-tl-3xl rounded-tr-3xl relative px-6">
        <div className="absolute top-0 inset-x-0 flex items-center justify-center transform -translate-y-1/2">
          <Image
            src="/images/me-logo.svg"
            alt="Hello Kimmy"
            width={246}
            height={246}
            layout="fixed"
          />
        </div>

        <Content className="mx-auto mt-32">
          <div className="grid gap-y-4 mb-10">
            {LINKS.map(link => (
              <LinkButton key={link.url} {...link} />
            ))}
          </div>

          <h1 className="text-pink-dark text-lg mb-4">
            <span className="mr-2">💌</span>Promo Codes
          </h1>

          <PromoCodes />
        </Content>
      </ContentFrame>
    </Frame>
  )
}

export default MePage
