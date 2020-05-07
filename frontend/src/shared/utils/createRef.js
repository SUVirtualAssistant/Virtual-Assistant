export const createCallbackRef = callback => {
  let current = null

  return {
    get current() {
      return current
    },
    set current(value) {
      const last = current;
      if (last !== value) {
        current = value
        callback(value, last)
      }
    }
  }
}
