import * as layoutStyles from '../layout'
import { chat }          from '@styles/layout/chat'

import * as typeStyles from '../type'
import { scale }        from '../type/scale'

import { darkMode }  from './dark'
import { lightMode } from './light'

const common = {
  font: {
    regular    : 'Open Sans, sans-serif',
    display    : 'Bungee, serif',
    size       : {
      default : '14px',
      xs      : '10px',
      sm      : '13px',
      lg      : '19px',
      xl      : '19px',
      sm_title: '26px',
      lg_title: '32px'
    },
    line_height: {
      sm     : '1.2',
      lg     : '1.5',
      em     : '$line-height * 1em'
    },
    weight     : {
      light : '300',
      normal: '400',
      bold  : '700'
    },
  },
  
  type: {
    mono: "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
    sans: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
    serif: "'Bungee', serif",
    
    caption: typeStyles.caption,
    label  : typeStyles.label,
    helper : typeStyles.helper[1],
    
    bodyShort: {
      1: typeStyles.bodyShort[1],
      2: typeStyles.bodyShort[2]
    },
  
    bodyLong: {
      1: typeStyles.bodyLong[1],
      2: typeStyles.bodyLong[2]
    },
    
    heading: {
      1: typeStyles.Heading[1],
      2: typeStyles.Heading[2]
    },
    
    productiveHeading: {
      1: typeStyles.productiveHeading[1],
      2: typeStyles.productiveHeading[2],
      3: typeStyles.productiveHeading[3],
      4: typeStyles.productiveHeading[4],
      5: typeStyles.productiveHeading[5],
      6: typeStyles.productiveHeading[6],
      7: typeStyles.productiveHeading[7]
    },
    
    expressiveHeading: {
      1: typeStyles.expressiveHeading[1],
      2: typeStyles.expressiveHeading[2],
      3: typeStyles.expressiveHeading[3],
      4: typeStyles.expressiveHeading[4],
      5: typeStyles.expressiveHeading[5],
      6: typeStyles.expressiveHeading[6]
    },
    
    expressiveParagraph: typeStyles.expressiveParagraph[1],
    
    quote: {
      1: typeStyles.quote[1],
      2: typeStyles.quote[2]
    },
  
    display: {
      1: typeStyles.display[1],
      2: typeStyles.display[2],
      3: typeStyles.display[3],
      4: typeStyles.display[4]
    }
  },
  
  // layout
  chat,
  
  spacing: {
    1 : layoutStyles.spacing[1],
    2 : layoutStyles.spacing[2],
    3 : layoutStyles.spacing[3],
    4 : layoutStyles.spacing[4],
    5 : layoutStyles.spacing[5],
    6 : layoutStyles.spacing[6],
    7 : layoutStyles.spacing[7],
    8 : layoutStyles.spacing[8],
    9 : layoutStyles.spacing[9],
    10: layoutStyles.spacing[10],
    11: layoutStyles.spacing[11],
    12: layoutStyles.spacing[12]
  },
  
  fluidSpacing: {
    1: layoutStyles.fluidSpacing[1],
    2: layoutStyles.fluidSpacing[2],
    3: layoutStyles.fluidSpacing[3],
    5: layoutStyles.fluidSpacing[4]
  },
  
  layout: {
    1: layoutStyles.layout[1],
    2: layoutStyles.layout[2],
    3: layoutStyles.layout[3],
    4: layoutStyles.layout[4],
    5: layoutStyles.layout[5],
    6: layoutStyles.layout[6],
    7: layoutStyles.layout[7]
  },
  
  container: {
    1: layoutStyles.container[1],
    2: layoutStyles.container[2],
    3: layoutStyles.container[3],
    4: layoutStyles.container[4],
    5: layoutStyles.container[5]
  },
  icon     : {
    1: layoutStyles.iconSize[1],
    2: layoutStyles.iconSize[2]
  }
}

export default {
  light: {
    ...common,
    ...lightMode
  },
  dark : {
    ...common,
    ...darkMode
  }
}
