import { px, rem }     from '@styles/layout'
import { fontWeights } from './fontWeight'
import { scale }       from './scale'

export const caption = {
  fontSize     : rem(scale[0]),
  fontWeight   : fontWeights.regular,
  lineHeight   : rem(16),
  letterSpacing: px(0.32)
}

export const label = {
  fontSize     : rem(scale[0]),
  fontWeight   : fontWeights.regular,
  lineHeight   : rem(16),
  letterSpacing: px(0.32)
}

export const helper = {
  fontSize     : rem(scale[0]),
  lineHeight   : rem(16),
  letterSpacing: px(0.32)
}

export const bodyShort = {
  1: {
    fontSize     : rem(scale[1]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(18),
    letterSpacing: px(0.16)
  },
  2: {
    fontSize     : rem(scale[2]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(22),
    letterSpacing: 0
  }
}

export const bodyLong = {
  1: {
    fontSize     : rem(scale[1]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(20),
    letterSpacing: px(0.16)
  },
  2: {
    fontSize     : rem(scale[2]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(24),
    letterSpacing: 0
  }
}

export const Heading = {
  1: {
    fontSize     : rem(scale[1]),
    fontWeight   : fontWeights.semibold,
    lineHeight   : rem(18),
    letterSpacing: px(0.16)
  },
  2: {
    fontSize     : rem(scale[2]),
    fontWeight   : fontWeights.semibold,
    lineHeight   : rem(22),
    letterSpacing: 0
  }
}

export const productiveHeading = {
  1: Heading[1],
  2: Heading[2],
  3: {
    fontSize     : rem(scale[4]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(28),
    letterSpacing: 0
  },
  4: {
    fontSize     : rem(scale[6]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(36),
    letterSpacing: 0
  },
  5: {
    fontSize     : rem(scale[7]),
    fontWeight   : fontWeights.regular,
    lineHeight   : rem(40),
    letterSpacing: 0
  },
  6: {
    fontSize     : rem(scale[9]),
    fontWeight   : fontWeights.light,
    lineHeight   : rem(50),
    letterSpacing: 0
  },
  7: {
    fontSize     : rem(scale[11]),
    fontWeight   : fontWeights.light,
    lineHeight   : rem(64),
    letterSpacing: 0
  }
}

export const expressiveHeading = {
  1: {
    ...Heading[1],
    lineHeight: rem(20)
  },
  2: {
    ...Heading[2],
    lineHeight: rem(24)
  },
  3: {
    fontSize     : rem(scale[4]),
    fontWeight   : fontWeights.regular,
    lineHeight   : '140%',
    letterSpacing: 0,
    breakpoints  : {
      xlg: {
        fontSize  : rem(scale[4]),
        lineHeight: '125%'
      },
      max: { fontSize: rem(scale[5]) }
    }
  },
  4: {
    fontSize     : rem(scale[6]),
    fontWeight   : fontWeights.regular,
    lineHeight   : '129%',
    letterSpacing: 0,
    breakpoints  : {
      xlg: {
        fontSize  : rem(scale[6]),
        lineHeight: '125%'
      },
      max: { fontSize: rem(scale[7]) }
    }
  },
  5: {
    fontSize     : rem(scale[7]),
    fontWeight   : fontWeights.regular,
    lineHeight   : '125%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize     : rem(scale[8]),
        fontWeight   : fontWeights.light,
        lineHeight   : '122%',
        letterSpacing: 0
      },
      lg : {
        fontSize     : rem(scale[9]),
        fontWeight   : fontWeights.light,
        lineHeight   : '119%',
        letterSpacing: 0
      },
      xlg: {
        fontSize     : rem(scale[10]),
        fontWeight   : fontWeights.light,
        lineHeight   : '117%',
        letterSpacing: 0
      },
      max: {
        fontSize     : rem(scale[12]),
        fontWeight   : fontWeights.light,
        lineHeight   : rem(70),
        letterSpacing: 0
      }
    }
  },
  6: {
    fontSize     : rem(scale[7]),
    fontWeight   : fontWeights.semibold,
    lineHeight   : '125%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize     : rem(scale[8]),
        fontWeight   : fontWeights.semibold,
        lineHeight   : '122%',
        letterSpacing: 0
      },
      lg : {
        fontSize     : rem(scale[9]),
        fontWeight   : fontWeights.semibold,
        lineHeight   : '119%',
        letterSpacing: 0
      },
      xlg: {
        fontSize     : rem(scale[10]),
        fontWeight   : fontWeights.semibold,
        lineHeight   : '117%',
        letterSpacing: 0
      },
      max: {
        fontSize     : rem(scale[12]),
        fontWeight   : fontWeights.semibold,
        lineHeight   : rem(70),
        letterSpacing: 0
      }
    }
  }
}

export const expressiveParagraph = {
  1: {
    fontSize     : rem(scale[5]),
    fontWeight   : fontWeights.light,
    lineHeight   : '125%',
    letterSpacing: 0,
    lg           : {
      fontSize  : rem(scale[6]),
      lineHeight: '129%'
    },
    max          : {
      fontSize  : rem(scale[7]),
      lineHeight: '125%'
    }
  }
}

export const quote = {
  1: {
    fontSize     : rem(scale[4]),
    fontWeight   : fontWeights.regular,
    lineHeight   : '130%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize     : rem(scale[4]),
        fontWeight   : fontWeights.regular,
        letterSpacing: 0
      },
      lg : {
        fontSize     : rem(scale[5]),
        fontWeight   : fontWeights.regular,
        lineHeight   : '125%',
        letterSpacing: 0
      },
      xlg: {
        fontSize     : rem(scale[6]),
        fontWeight   : fontWeights.regular,
        lineHeight   : '129%',
        letterSpacing: 0
      },
      max: {
        fontSize     : rem(scale[7]),
        fontWeight   : fontWeights.regular,
        lineHeight   : '125%',
        letterSpacing: 0
      }
    }
  },
  2: {
    fontSize     : rem(scale[7]),
    fontWeight   : fontWeights.light,
    lineHeight   : '125%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize  : rem(scale[8]),
        lineHeight: '122%'
      },
      lg : {
        fontSize  : rem(scale[9]),
        lineHeight: '119%'
      },
      xlg: {
        fontSize  : rem(scale[10]),
        lineHeight: '117%'
      },
      max: {
        fontSize: rem(scale[12])
      }
    }
  }
}

export const display = {
  1: {
    fontSize     : rem(scale[9]),
    fontWeight   : fontWeights.light,
    lineHeight   : '119%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize: rem(scale[9])
      },
      lg : {
        fontSize: rem(scale[11])
      },
      xlg: {
        fontSize  : rem(scale[12]),
        lineHeight: '117%'
      },
      max: {
        fontSize  : rem(scale[14]),
        lineHeight: '113%'
      }
    }
  },
  2: {
    fontSize     : rem(scale[9]),
    fontWeight   : fontWeights.semibold,
    lineHeight   : '119%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize: rem(scale[9])
      },
      lg : {
        fontSize: rem(scale[11])
      },
      xlg: {
        fontSize  : rem(scale[12]),
        lineHeight: '116%'
      },
      max: {
        fontSize  : rem(scale[14]),
        lineHeight: '113%'
      }
    }
  },
  3: {
    fontSize     : rem(scale[9]),
    fontWeight   : fontWeights.light,
    lineHeight   : '119%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize  : rem(scale[13]),
        lineHeight: '115%'
      },
      lg : {
        fontSize     : rem(scale[16]),
        lineHeight   : '111%',
        letterSpacing: px(-0.64)
      },
      xlg: {
        fontSize  : rem(scale[19]),
        lineHeight: '107%'
      },
      max: {
        fontSize     : rem(scale[22]),
        lineHeight   : '105%',
        letterSpacing: px(-0.96)
      }
    }
  },
  4: {
    fontSize     : rem(scale[9]),
    fontWeight   : fontWeights.semibold,
    lineHeight   : '119%',
    letterSpacing: 0,
    breakpoints  : {
      md : {
        fontSize  : rem(scale[13]),
        lineHeight: '115%'
      },
      lg : {
        fontSize     : rem(scale[16]),
        lineHeight   : '111%',
        letterSpacing: px(-0.64)
      },
      xlg: {
        fontSize     : rem(scale[19]),
        lineHeight   : '107%',
        letterSpacing: px(-0.64)
      },
      max: {
        fontSize     : rem(scale[22]),
        lineHeight   : '105%',
        letterSpacing: px(-0.96)
      }
    }
  }
}
