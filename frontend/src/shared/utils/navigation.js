import { KEYS } from 'Src/shared/utils/constants'

const navigate = (focusedIndex, keyCode, altKey, total) => {
  if (altKey)
    return focusedIndex

  switch (keyCode) {
    case KEYS.enter:
    case KEYS.space:
    case KEYS.esc:
      return -1
    case KEYS.up:
    case KEYS.left:
      return Math.max(0, focusedIndex - 1)
    case KEYS.down:
    case KEYS.right:
      return Math.min(total - 1, focusedIndex + 1)
    default:
      return focusedIndex
  }
}

export default navigate
