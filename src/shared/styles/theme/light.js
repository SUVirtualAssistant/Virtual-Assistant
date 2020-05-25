import { colors } from '../colors'

export const lightMode = {
  su_red: {
    1: colors.su_red,
    inverse: {
      1: colors.inverse_su[1],
      2: colors.inverse_su[2]
    }
  },
  background : colors.white[0],
  interactive: {
    1: colors.blue[60],
    2: colors.grey[80],
    3: colors.blue[60],
    4: colors.blue[60]
  },
  danger     : colors.red[60],
  ui         : {
    1: colors.grey[10],
    2: colors.white[0],
    3: colors.grey[20],
    4: colors.grey[50],
    5: colors.grey[100]
  },
  text       : {
    1    : colors.grey[100],
    2    : colors.grey[80],
    3    : colors.grey[40],
    4    : colors.white[0],
    5    : colors.grey[60],
    error: colors.red[60],
    link : colors.blue[60]
  },
  icon       : {
    1: colors.grey[100],
    2: colors.grey[70],
    3: colors.white[0]
  },
  field      : {
    1: colors.grey[10],
    2: colors.white[0]
  },
  support    : {
    1: colors.red[60],
    2: colors.green[50],
    3: colors.yellow[30],
    4: colors.blue[70]
  },
  overlay    : {
    1: colors.grey[100]
  },
  inverse    : {
    1      : colors.white[0],
    2      : colors.grey[80],
    link   : colors.blue[40],
    support: {
      1: colors.red[50],
      2: colors.green[40],
      3: colors.yellow[30],
      4: colors.blue[50]
    }
  },
  
  // Interaction States
  focus         : colors.blue[60],
  inverseFocusUi: colors.white[0],
  
  hover: {
    primary    : '#0353e9',
    primaryText: colors.blue[70],
    secondary  : '#4c4c4c',
    tertiary   : '#0353e9',
    UI         : '#e5e5e5',
    inverseUI  : '#4c4c4c',
    selectedUI : '#cacaca',
    row        : '#e5e5e5',
    danger     : '#ba1b23'
  },
  
  active: {
    primary  : colors.blue[80],
    secondary: colors.grey[60],
    tertiary : colors.blue[80],
    UI       : colors.grey[30],
    danger   : colors.red[80]
  },
  
  selected: {
    UI     : colors.grey[20],
    lightUI: colors.grey[70]
  },
  
  visitedLink: colors.purple[60],
  highlight  : colors.blue[20],
  
  disabled: {
    1: colors.grey[10],
    2: colors.grey[30],
    3: colors.grey[50]
  },
  
  skeleton: {
    1: '#e5e5e5',
    2: colors.grey[30]
  },
  
  colors: {
    navBarHover: 'rgba(204, 159, 38, 0.87)',
    buttonHover: 'rgba(204, 159, 38, 0.87)',
    themeToggle: {
      toggleBorder  : '#6B9096',
      toggleGradient: 'linear-gradient(#091236, #1E215D)'
    },
    chat       : {
      user_bubble_bg    : '#ef4135',
      user_bubble_border: '#ef4135'
    }
  }
}
