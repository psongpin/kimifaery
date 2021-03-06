import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import clsx from 'clsx'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import Loader from 'components/Loader'
import { usePageLoad } from 'contexts/initialPageLoad'
import { fadeUpDownProps } from 'constants/animation'
import { Query, Coupon } from 'types/graphcms'

interface QueryData {
  couponsConnection: Query['couponsConnection']
}

interface QueryVariables {
  first: number
  after?: string
}

const GET_COUPONS = gql`
  query getCoupons($first: Int, $after: String) {
    couponsConnection(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        pageSize
      }
      edges {
        cursor
        node {
          id
          title
          discountText
          code
          storeUrl
        }
      }
    }
  }
`

const Discount = styled.div`
  min-width: 70px;
`

const PromoCode: React.FC<Coupon> = ({
  discountText,
  title,
  code,
  storeUrl,
}) => {
  const [copied, setCopied] = useState(false)
  const { isInitiallyLoading, pageLoadDelay } = usePageLoad()

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 2000)

      return () => clearTimeout(timer)
    }

    return undefined
  }, [copied])

  return (
    <InView threshold={0.1}>
      {({ inView, ref }) => (
        <motion.div
          {...fadeUpDownProps}
          initial="fadeUp"
          animate={inView && !isInitiallyLoading ? 'fadeDown' : 'fadeUp'}
          transition={{
            delay: isInitiallyLoading ? pageLoadDelay : 0,
          }}
          ref={ref}
          className={clsx('bg-white', 'rounded-xl', 'p-4')}
        >
          <div className="flex items-start">
            <Discount className="p-2 border border-pink-dark rounded bg-pink-pale mr-3">
              <span className="font-bold text-pink-dark block">
                {discountText}
              </span>

              <span className="font-bold text-pink-dark block">off</span>
            </Discount>

            <div>
              <p className="text-pink-darker mb-2">
                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-bold underline"
                >
                  {title}
                  <svg
                    className="w-4 h-4 ml-1 inline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </p>
              <p className="text-pink-darker">
                <>code: </>
                {code}
              </p>
            </div>
          </div>

          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <button
              type="button"
              className={clsx(
                'bg-pink-dark',
                'rounded-full',
                'w-full',
                'text-white text-center text-sm uppercase',
                'p-2 mt-4',
                'hover:opacity-75 focus:outline-none',
                'transition-all ease-linear duration-200'
              )}
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </CopyToClipboard>
        </motion.div>
      )}
    </InView>
  )
}

const PromoCodes: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    QueryData,
    QueryVariables
  >(GET_COUPONS, {
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) {
    return (
      <div className="flex justify-center mt-8">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <p className="text-pink-darker text-center font-bold">
        Something went wrong while getting promo codes.
      </p>
    )
  }

  if (data) {
    const { couponsConnection } = data
    return (
      <div className="grid gap-y-4">
        {couponsConnection.edges.length > 0 ? (
          <>
            {couponsConnection.edges.map(couponEdge => (
              <PromoCode key={couponEdge.node.id} {...couponEdge.node} />
            ))}

            {couponsConnection.pageInfo.hasNextPage && (
              <button
                type="button"
                className={clsx(
                  'bg-pink-dark',
                  'rounded-full',
                  'w-full',
                  'text-white text-center text-sm uppercase',
                  'p-2 mt-4',
                  'hover:opacity-75',
                  'transition-all ease-linear duration-200'
                )}
                onClick={() => {
                  fetchMore({
                    variables: {
                      after: couponsConnection.pageInfo.endCursor,
                    },
                  })
                }}
              >
                load more
              </button>
            )}
          </>
        ) : (
          <p className="text-pink-darker text-center font-bold">
            No codes available.
          </p>
        )}
      </div>
    )
  }

  return null
}

export default PromoCodes
