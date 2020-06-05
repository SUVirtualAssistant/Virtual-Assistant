import { colors } from '../colors'

export const darkMode = {
  backgrounds: {
    DIR: 'background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23aa0000\' fill-opacity=\'0.93\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E");',
    WS : 'background-image: url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23aa0000\' fill-opacity=\'0.40\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E");',
    CAL: 'background-image: url("data:image/svg+xml,%3Csvg width=\'12\' height=\'16\' viewBox=\'0 0 12 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z\' fill=\'%23aa0000\' fill-opacity=\'0.29\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");'
  },
  su_red     : {
    1      : colors.su_red + 'CC',
    text   : colors.grey[10],
    inverse: {
      1: colors.inverse_su[1],
      2: colors.inverse_su[2]
    }
  },
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
    3: colors.grey[70],
    4: colors.grey[60],
    5: colors.grey[10],
    6: colors.red[50],
    7: colors.red[60]
  },
  text       : {
    1    : colors.grey[10],
    2    : colors.grey[30],
    3    : colors.grey[60],
    4    : colors.white[0],
    5    : colors.white[0],
    6    : colors.grey[100],
    error: colors.red[40],
    link : colors.red[40]
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
    1: colors.grey[100],
    2: colors.red[90]
  },
  inverse    : {
    1         : colors.grey[100],
    2         : colors.grey[10],
    background: colors.white[0],
    support   : {
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
    primary   : colors.su_red + 'CC',
    link      : colors.red[60],
    secondary : '#606060',
    tertiary  : colors.grey[10],
    UI        : '#353535',
    inverseUI : '#e5e5e5',
    selectedUI: '#4c4c4c',
    row       : '#353535'
  },
  
  active: {
    primary  : colors.red[80],
    secondary: colors.grey[80],
    tertiary : colors.grey[30],
    UI       : colors.grey[70]
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
  }
}
