import { useEffect, useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import Button from 'components/Button'
import { fadeUpDownProps } from 'constants/animation'

interface Props {
  searchString?: string
}

const Frame = styled(motion.div)`
  width: 800px;
`

const SearchForm: React.FC<Props> = ({ searchString = '' }) => {
  const [search, setSearch] = useState(searchString)
  const router = useRouter()

  useEffect(() => setSearch(searchString), [searchString])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    router.push(`/links?search=${search}`)
  }

  return (
    <Frame {...fadeUpDownProps} className="max-w-full mx-auto mb-10">
      <form onSubmit={onSubmit} className="block w-full relative">
        <input
          type="text"
          name="search"
          placeholder="Search item here.."
          required
          className={clsx(
            'w-full',
            'md:text-lg text-pink-darker',
            'rounded-full border-transparent',
            'focus:outline-none',
            'py-3 md:py-4',
            'pl-4 md:pl-8',
            'pr-20 md:pr-40'
          )}
          value={search}
          onChange={onInputChange}
        />

        <div className="absolute right-0 inset-y-0">
          <Button
            variant="primary"
            type="submit"
            padding={clsx('px-6 md:px-10', 'py-2.5 md:py-4')}
          >
            <span className="hidden md:inline">Search</span>
            <svg
              className="inline md:hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </form>
    </Frame>
  )
}

export default SearchForm
