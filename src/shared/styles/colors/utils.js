import Color from 'color'

/**
 * Adjust a given color's lightness by a specified percentage
 * Example: color = hsl(10, 10, 10);
 *          adjustLightness(color, 5) === hsl(10, 10, 15);
 *          adjustLightness(color, -5) === hsl(10, 10, 5);
 * @param token
 * @param shift The number of percentage points (+ or -) by which to shift the lightness of a token.
 * @returns {string}
 */
export const adjustLightness = (token, shift) => {
  const original = Color(token).hsl().object()
  
  return Color({ ...original, l: (original.l += shift) }).round().hex().toLowerCase()
}

/**
 * Parse a given hexcode string into an rgba statement with the given opacity
 * @param hexcode
 * @param opacity
 * @returns {string}
 */
export const rgba = (hexcode, opacity) => {
  const values = [
    hexcode.substring(1, 3),
    hexcode.substring(3, 5),
    hexcode.substring(5, 7)
  ].map(string => parseInt(string, 16))
  return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`
}