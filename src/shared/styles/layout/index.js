export const baseFontSize = 16

/**
 * Convert a given px unit to a rem unit
 * @param {number} px
 * @returns {string}
 */
export const rem = px =>
  `${px / baseFontSize}rem`

/**
 * Convert a given px unit to a em unit
 * @param {number} px
 * @returns {string}
 */
export const em = px =>
  `${px / baseFontSize}em`

/**
 * Convert a given px unit to its string representation
 * @param {number} value - number of pixels
 * @returns {string}
 */
export const px = value =>
  `${value}px`

// Breakpoint
// Initial map of our breakpoints and their values
export const breakpoints = {
  sm : {
    width  : rem(320),
    columns: 4,
    margin : '0'
  },
  md : {
    width  : rem(672),
    columns: 8,
    margin : rem(16)
  },
  lg : {
    width  : rem(1056),
    columns: 16,
    margin : rem(16)
  },
  xlg: {
    width  : rem(1312),
    columns: 16,
    margin : rem(16)
  },
  max: {
    width  : rem(1584),
    columns: 16,
    margin : rem(24)
  }
}

export const breakpointUp = name =>
  `@media (min-width: ${breakpoints[name].width})`

export const breakpointDown = name =>
  `@media (max-width: ${breakpoints[name].width})`

export const breakpoint = (...args) =>
  breakpointUp(...args)

// Mini-unit
export const miniUnit = 8

export const miniUnits = count =>
  rem(miniUnit * count)

export const spacing = {
  1 : miniUnits(0.25),
  2 : miniUnits(0.5),
  3 : miniUnits(1),
  4 : miniUnits(1.5),
  5 : miniUnits(2),
  6 : miniUnits(3),
  7 : miniUnits(4),
  8 : miniUnits(5),
  9 : miniUnits(6),
  10: miniUnits(8),
  11: miniUnits(10),
  12: miniUnits(12)
}

export const fluidSpacing = {
  1: 0,
  2: '2vw',
  3: '5vw',
  4: '10vw'
}

// Layout
export const layout = {
  1: miniUnits(2),
  2: miniUnits(3),
  3: miniUnits(4),
  4: miniUnits(6),
  5: miniUnits(8),
  6: miniUnits(12),
  7: miniUnits(20)
}

// Container
export const container = {
  1: miniUnits(3),
  2: miniUnits(4),
  3: miniUnits(5),
  4: miniUnits(6),
  5: miniUnits(8)
}

// Icon
export const iconSize = {
  1: '1rem',
  2: '1.25rem'
}