import { colors } from '../colors'

export const darkMode = {
  background : colors.grey[100],
  interactive: {
    1: colors.blue[60],
    2: colors.grey[60],
    3: colors.white[0],
    4: colors.blue[50]
  },
  danger     : colors.red[60],
  ui         : {
    1: colors.grey[90],
    2: colors.grey[80],
    3: colors.grey[80],
    4: colors.grey[60],
    5: colors.grey[10]
  },
  text       : {
    1    : colors.grey[10],
    2    : colors.grey[30],
    3    : colors.grey[60],
    4    : colors.white[0],
    5    : colors.grey[50],
    error: colors.red[40],
    link : colors.blue[40]
  },
  icon       : {
    1: colors.grey[10],
    2: colors.grey[30],
    3: colors.white[0]
  },
  field      : {
    1: colors.grey[90],
    2: colors.grey[80]
  },
  support    : {
    1: colors.red[50],
    2: colors.green[40],
    3: colors.yellow[30],
    4: colors.blue[50]
  },
  overlay    : {
    1: colors.grey[100]
  },
  inverse    : {
    1      : colors.grey[100],
    2      : colors.grey[10],
    link   : colors.blue[60],
    support: {
      1: colors.red[60],
      2: colors.green[50],
      3: colors.yellow[30],
      4: colors.blue[70]
    }
  },
  
  // Interaction States
  focus         : colors.white[0],
  inverseFocusUi: colors.blue[60],
  
  hover: {
    primary    : '#0353e9',
    primaryText: colors.blue[30],
    secondary  : '#606060',
    tertiary   : colors.grey[10],
    UI         : '#353535',
    inverseUI  : '#e5e5e5',
    selectedUI : '#4c4c4c',
    row        : '#353535'
  },
  
  active: {
    primary  : colors.blue[80],
    secondary: colors.grey[80],
    tertiary : colors.grey[30],
    UI       : colors.grey[70],
    danger   : colors.red[80]
  },
  
  selected: {
    UI     : colors.grey[80],
    lightUI: colors.grey[70]
  },
  
  visitedLink: colors.purple[40],
  highlight  : colors.blue[80],
  
  disabled: {
    1: colors.grey[90],
    2: colors.grey[70],
    3: colors.grey[50]
  },
  
  skeleton: {
    1: '#353535',
    2: colors.grey[80]
  },
  
  colors: {
    navBarHover: 'rgba(204, 159, 38, 0.87)',
    buttonHover: 'rgba(204, 159, 38, 0.87)',
    themeToggle: {
      toggleBorder  : '#6B9096',
      toggleGradient: 'linear-gradient(#091236, #1E215D)'
    },
    chat       : {
      user_bubble_bg    : '#aa0000',
      user_bubble_border: '#aa0000'
    }
  }
}
