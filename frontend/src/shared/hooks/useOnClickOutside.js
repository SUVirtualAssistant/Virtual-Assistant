import { useEffect } from 'react'

/**
 * This allows you to detect clicks outside of a specified element.
 *
 * It's worth noting that the passed in handler will be a new function
 * on every render, causing this effect callback/cleanup to run every
 * render. It's not a big deal but to optimize you can wrap handler in
 * `useCallback` before passing it into this hook.
 *
 * src: https://usehooks.com/useOnClickOutside/
 *
 * @param ref     ref to element
 * @param handler Callback executed when outside click detected
 */
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target))
        return

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
