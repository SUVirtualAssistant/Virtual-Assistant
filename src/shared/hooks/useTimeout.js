import { useEffect, useRef } from 'react'

/**
 * useTimeout hook
 */
export const useTimeout = (callback, delay) => {
  const savedCallback = useRef()
  
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
