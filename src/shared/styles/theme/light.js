import { colors } from '../colors'

export const lightMode = {
  backgrounds: {
    DIR: 'background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23585656\' fill-opacity=\'0.30\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E");',
    WS : 'background-image: url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239f9f9f\' fill-opacity=\'0.30\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E");',
    CAL: 'background-image: url("data:image/svg+xml,%3Csvg width=\'12\' height=\'16\' viewBox=\'0 0 12 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z\' fill=\'%23bbbbbb\' fill-opacity=\'0.29\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");'
  },
  su_red     : {
    1      : colors.su_red,
    text   : colors.white[0],
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
    1    : colors.grey[90],
    2    : colors.grey[80],
    3    : colors.grey[40],
    4    : colors.grey[100],
    5    : colors.grey[10],
    error: colors.red[60],
    link : colors.red[50]
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
    1: colors.grey[100],
    2: colors.red[70]
  },
  inverse    : {
    1         : colors.white[0],
    2         : colors.grey[80],
    background: colors.grey[100],
    link      : colors.blue[40],
    support   : {
      1: colors.red[50],
      2: colors.green[40],
      3: colors.yellow[30],
      4: colors.blue[50]
    }
  },
  
  // Interaction States
  focus         : colors.grey[100],
  inverseFocusUi: colors.white[0],
  
  hover: {
    primary    : '#0353e9',
    link       : colors.red[70],
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
  }
}
