import { px, rem }     from '@styles/layout'
import { fontWeights } from './fontWeight'
import { scale }       from './scale'

const Scalar = '1.5vw'

export const caption = {
  'font-size'     : rem(scale[0]),
  'font-weight'   : fontWeights.regular,
  'line-height'   : rem(16),
  'letter-spacing': px(0.32)
}

export const label = {
  'font-size'     : rem(12),
  'font-weight'   : fontWeights.regular,
  'line-height'   : rem(16),
  'letter-spacing': px(0.32)
}

export const helper = {
  'font-size'     : rem(scale[0]),
  'line-height'   : rem(16),
  'letter-spacing': px(0.32)
}

export const bodyShort = {
  1: {
    'font-size'     : rem(scale[1]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(18),
    'letter-spacing': px(0.16)
  },
  2: {
    'font-size'     : rem(scale[2]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(22),
    'letter-spacing': 0
  }
}

export const bodyLong = {
  1: {
    'font-size'     : rem(scale[1]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(20),
    'letter-spacing': px(0.16)
  },
  2: {
    'font-size'     : rem(scale[2]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(24),
    'letter-spacing': 0
  }
}

export const Heading = {
  1: {
    'font-size'     : `clamp(${scale[5]}px, ${Scalar}, ${scale[10]}px);`,
    'font-weight'   : fontWeights.semibold,
    'line-height'   : rem(18),
    'letter-spacing': px(0.16)
  },
  2: {
    'font-size'     : `clamp(${scale[6]}px, ${Scalar}, ${scale[12]}px);`,
    'font-weight'   : fontWeights.semibold,
    'line-height'   : rem(22),
    'letter-spacing': 0
  }
}

export const productiveHeading = {
  1: Heading[1],
  2: Heading[2],
  3: {
    'font-size'     : rem(scale[4]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(28),
    'letter-spacing': 0
  },
  4: {
    'font-size'     : rem(scale[6]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(36),
    'letter-spacing': 0
  },
  5: {
    'font-size'     : rem(scale[7]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : rem(40),
    'letter-spacing': 0
  },
  6: {
    'font-size'     : rem(scale[9]),
    'font-weight'   : fontWeights.light,
    'line-height'   : rem(50),
    'letter-spacing': 0
  },
  7: {
    'font-size'     : rem(scale[11]),
    'font-weight'   : fontWeights.light,
    'line-height'   : rem(64),
    'letter-spacing': 0
  }
}

export const expressiveHeading = {
  1: {
    ...Heading[1],
    'line-height': rem(40)
  },
  2: {
    ...Heading[2],
    'line-height': rem(24)
  },
  3: {
    'font-size'     : `clamp(${scale[7]}px, ${Scalar}, ${scale[14]}px);`,
    'font-weight'   : fontWeights.regular,
    'line-height'   : '140%',
    'letter-spacing': 0
  },
  4: {
    'font-size'     : `clamp(${scale[8]}px, ${Scalar}, ${scale[16]}px);`,
    'font-weight'   : fontWeights.regular,
    'line-height'   : '129%',
    'letter-spacing': 0
  },
  5: {
    'font-size'     : `clamp(${scale[9]}px, ${Scalar}, ${scale[18]}px);`,
    'font-weight'   : fontWeights.regular,
    'line-height'   : '125%',
    'letter-spacing': 0
  },
  6: {
    'font-size'     : `clamp(${scale[10]}px, ${Scalar}, ${scale[20]}px);`,
    'font-weight'   : fontWeights.semibold,
    'line-height'   : '125%',
    'letter-spacing': 0
  }
}

export const expressiveParagraph = {
  1: {
    'font-size'     : `clamp(${scale[1]}px, ${Scalar}, ${scale[3]}px);`,
    'font-weight'   : fontWeights.regular,
    'line-height'   : '125%',
    'letter-spacing': 0.2
  }
}

export const quote = {
  1: {
    'font-size'     : rem(scale[4]),
    'font-weight'   : fontWeights.regular,
    'line-height'   : '130%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size'     : rem(scale[4]),
        'font-weight'   : fontWeights.regular,
        'letter-spacing': 0
      },
      lg : {
        'font-size'     : rem(scale[5]),
        'font-weight'   : fontWeights.regular,
        'line-height'   : '125%',
        'letter-spacing': 0
      },
      xlg: {
        'font-size'     : rem(scale[6]),
        'font-weight'   : fontWeights.regular,
        'line-height'   : '129%',
        'letter-spacing': 0
      },
      max: {
        'font-size'     : rem(scale[7]),
        'font-weight'   : fontWeights.regular,
        'line-height'   : '125%',
        'letter-spacing': 0
      }
    }
  },
  2: {
    'font-size'     : rem(scale[7]),
    'font-weight'   : fontWeights.light,
    'line-height'   : '125%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size'  : rem(scale[8]),
        'line-height': '122%'
      },
      lg : {
        'font-size'  : rem(scale[9]),
        'line-height': '119%'
      },
      xlg: {
        'font-size'  : rem(scale[10]),
        'line-height': '117%'
      },
      max: {
        'font-size': rem(scale[12])
      }
    }
  }
}

export const display = {
  1: {
    'font-size'     : rem(scale[9]),
    'font-weight'   : fontWeights.light,
    'line-height'   : '119%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size': rem(scale[9])
      },
      lg : {
        'font-size': rem(scale[11])
      },
      xlg: {
        'font-size'  : rem(scale[12]),
        'line-height': '117%'
      },
      max: {
        'font-size'  : rem(scale[14]),
        'line-height': '113%'
      }
    }
  },
  2: {
    'font-size'     : rem(scale[9]),
    'font-weight'   : fontWeights.semibold,
    'line-height'   : '119%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size': rem(scale[9])
      },
      lg : {
        'font-size': rem(scale[11])
      },
      xlg: {
        'font-size'  : rem(scale[12]),
        'line-height': '116%'
      },
      max: {
        'font-size'  : rem(scale[14]),
        'line-height': '113%'
      }
    }
  },
  3: {
    'font-size'     : rem(scale[9]),
    'font-weight'   : fontWeights.light,
    'line-height'   : '119%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size'  : rem(scale[13]),
        'line-height': '115%'
      },
      lg : {
        'font-size'     : rem(scale[16]),
        'line-height'   : '111%',
        'letter-spacing': px(-0.64)
      },
      xlg: {
        'font-size'  : rem(scale[19]),
        'line-height': '107%'
      },
      max: {
        'font-size'     : rem(scale[22]),
        'line-height'   : '105%',
        'letter-spacing': px(-0.96)
      }
    }
  },
  4: {
    'font-size'     : rem(scale[9]),
    'font-weight'   : fontWeights.semibold,
    'line-height'   : '119%',
    'letter-spacing': 0,
    breakpoints     : {
      md : {
        'font-size'  : rem(scale[13]),
        'line-height': '115%'
      },
      lg : {
        'font-size'     : rem(scale[16]),
        'line-height'   : '111%',
        'letter-spacing': px(-0.64)
      },
      xlg: {
        'font-size'     : rem(scale[19]),
        'line-height'   : '107%',
        'letter-spacing': px(-0.64)
      },
      max: {
        'font-size'     : rem(scale[22]),
        'line-height'   : '105%',
        'letter-spacing': px(-0.96)
      }
    }
  }
}
