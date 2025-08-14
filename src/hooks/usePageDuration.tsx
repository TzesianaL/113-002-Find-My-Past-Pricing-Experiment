import { useEffect, useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { incrementDuration } from 'redux/reducers/pageDurationStore/pageDurationStore'

export function usePageDuration(pageId: string): () => void {
  const dispatch = useDispatch()
  const startDate = useRef(Date.now())

  const storeDuration = useCallback(() => {
    const curDate = Date.now()
    const timeElapsed = curDate - startDate.current
    dispatch(
      incrementDuration({
        id: pageId,
        duration: timeElapsed,
      })
    )
    startDate.current = curDate
  }, [dispatch, pageId, startDate])

  useEffect(() => {
    return storeDuration
  }, [storeDuration])

  return storeDuration
}
