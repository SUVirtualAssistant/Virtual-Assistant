import { useRef, useEffect } from 'react'
import createFocusTrap from 'focus-trap'

export const useFocusElement = (showing, options) => {
  const elementRef = useRef(null)
  const trapRef = useRef(null)

  const focusElement = () => {
    const trap = createFocusTrap(elementRef.current, {
      escapeDeactivates: false,
      clickOutsideDeactivates: false,
      fallbackFocus: '[tabindex="-1"]',
      ...options,
    })

    trapRef.current = trap
    trap.activate()
  }

  const focusTrigger = () => {
    const { current } = trapRef
    current.deactivate()
  }

  useEffect(() => {
    if (showing) focusElement()
    else focusTrigger()
  }, [showing])

  return {
    bind: { ref: elementRef }
  }
}
