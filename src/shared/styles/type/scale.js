/**
 * Get the type size for the given step
 * @param {number} step
 * @returns {number}
 */
export const getTypeSize = step => {
  if (step <= 1) return 12
  
  return getTypeSize(step - 1) + Math.floor((step - 2) / 4 + 1) * 2
}

/**
 * Default type scale for 23 steps. Inlined as an array here through running
 * the following step:
 *
 * > Array.from({ length: 23 }, (_, i) => getTypeSize(i + 1))
 */
export const scale = [
  14,
  15,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  42,
  48,
  54,
  60,
  68,
  76,
  84,
  92,
  102,
  112,
  122,
  132,
  144,
  156
]