import { useState } from 'react'

export const useCallbackRef = ({ initialValue, callback }) => {
  const [ref] = useState(() => ({
    value: initialValue,
    callback,
    facade: {
      get current() {
        return ref.value
      },
      set current(value) {
        const last = ref.value
        if (last !== value) {
          ref.value = value;
          ref.callback(value.last)
        }
      }
    }
  }))
  // Update callback
  ref.callback = callback

  return ref.facade
}
