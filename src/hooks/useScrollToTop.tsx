import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Options {
  /**
   * Whether to snap to the top or instead smoothly scroll instead
   */
  snap?: boolean
}

/**
 * Hook to scroll the screen to the top whenever the pathname changes.
 *
 * This must be called within a `<Router/>` component in order to work
 */
export const useScrollToTop = ({ snap = true }: Options = {}): void => {
  try {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: snap ? 'auto' : 'smooth',
        })
      } catch (error) {
        window.scrollTo(0, 0)
      }
    }, [pathname, snap])
  } catch (error) {
    throw Error(
      'Pathname not found. Is this being called within a <Router/> component?'
    )
  }
}
