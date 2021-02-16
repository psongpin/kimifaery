import { createContext, useContext } from 'react'

export const pageLoadDelay = 1.5

export const PageLoadContext = createContext({
  isInitiallyLoading: false,
  pageLoadDelay,
})

export const usePageLoad = (): {
  isInitiallyLoading: boolean
  pageLoadDelay: number
} => {
  return useContext(PageLoadContext)
}
