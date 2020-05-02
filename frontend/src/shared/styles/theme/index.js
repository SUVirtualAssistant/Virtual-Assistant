import { common } from './common'
import { lightMode } from './light'
import { darkMode }   from './dark'

const themes = {
  light: {
    ...common,
    ...lightMode
  },
  dark: {
    ...common,
    ...darkMode
  }
}

export default themes

