export const refToCallback = ref => {
  return newValue => {
    if (typeof ref === 'function') {
      ref(newValue)
    } else if (ref) {
      ref.current = newValue
    }
  }
}

const nullCallback = () => null

// lets maintain a weak ref to, well, ref :)
const weakMem = new WeakMap()
const weakMemoize = ref => {
  const usedRef = ref || nullCallback()
  if (weakMem.has(usedRef)) {
    return weakMem.get(usedRef)
  }

  const cb = refToCallback(usedRef)
  weakMem.set(usedRef, cb)
  return cb
}

export const useRefToCallback = ref => weakMemoize(ref)
