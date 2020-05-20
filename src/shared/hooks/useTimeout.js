import { useEffect } from 'react'

/**
 * useTimeout hook
 */
export const useTimeout = (fn, delay) => {
  useEffect(() => {
    const id = setTimeout(fn, delay)
    return () => clearTimeout(id)
  })
}
