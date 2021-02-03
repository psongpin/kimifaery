import { useState } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

import Button from 'components/Button'

const Frame = styled.div`
  max-width: 800px;
`

const SearchForm: React.FC = () => {
  const [searchString, setSearchString] = useState('')

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchString(event.currentTarget.value)
  }

  const onSubmit = (): void => {
    // do something here
  }

  return (
    <Frame className="w-full mx-auto mb-10">
      <form onSubmit={onSubmit} className="block w-full relative">
        <input
          type="text"
          name="search"
          placeholder="Search item here.."
          className={clsx(
            'w-full',
            'text-lg text-pink-darker',
            'rounded-full border-transparent',
            'focus:outline-none',
            'py-4 pl-8 pr-24 md:pr-40'
          )}
          value={searchString}
          onChange={onInputChange}
        />

        <div className="absolute right-0 inset-y-0">
          <Button variant="primary" padding="px-8 md:px-10 py-4">
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
