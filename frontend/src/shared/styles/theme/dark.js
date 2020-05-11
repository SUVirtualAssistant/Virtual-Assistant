import { getLuminance } from 'polished'

const contrast_wcag = (color, dark = '#000000', light = '#ffffff') => {
  const luma = getLuminance(color)

  return luma < 0.5 ? light : dark
}

const primary = '#ff6358'

// const app = {
//   bg    : lighten(0.01, '#f6f6f6'),
//   text  : '#656565',
//   border: 'rbga(black, .08)'
// }

const body = {
  bg  : '#ffffff',
  text: '#656565'
}

const component = {
  bg    : body.bg,
  text  : body.text,
  border: 'rgba(black, .08)'
}

const input = {
  bg    : component.bg,
  text  : component.text,
  border: '',
  shadow: null
}

export const darkMode = {
  rgba_transparent: 'rgba(0, 0, 0, 0)',

  colors: {
    primary   : '',
    secondary : '',
    background: '#12171c',

    errors     : '',
    header     : '',
    headerHover: '',
    sideDrawer : '',
    border     : '',
    card       : '',

    navBarTitle     : '#fff',
    navBarLink      : 'rgba(255, 255, 255, 0.6)',
    navBarBackground: 'transparent',
    navBarHover     : 'rgba(204, 159, 38, 0.87)',

    text          : '#FAFAFA',
    title         : '',
    pageBackground: '#363537',

    modalTitle     : '#eee',
    modalBackground: '',

    buttonText      : 'rgba(255, 255, 255, 0.6)',
    buttonBackground: '#AA0000',
    buttonHover     : 'rgba(204, 159, 38, 0.87)',

    themeToggle: {
      toggleBorder  : '#6B9096',
      toggleGradient: 'linear-gradient(#091236, #1E215D)'
    },

    chat: {
      bg    : '#12171c',
      text  : 'rgba(black, 0.87)',
      border:  '#12171c',

      bubble_bg             : '#232429',
      bubble_text           : '#fff',
      bubble_border         : '#232429',
      bubble_shadow         : '0 1px 2px rgba(0, 0, 0, .08)',
      bubble_hover_shadow   : '0 1px 2px rgba(0, 0, 0, .16)',
      bubble_selected_shadow: '0 3px 10px rgba(0, 0, 0, .16)',

      user_bubble_bg             : '#aa0000',
      user_bubble_text           : '#fff',
      user_bubble_border         : '#aa0000',
      user_bubble_shadow         : '0 1px 2px rgba(#ff6358, .2)',
      user_bubble_hover_shadow   : '0 1px 2px rgba(#ff6358, .2)',
      user_bubble_selected_shadow: '0 3px 10px rgba(#ff6358, .4)',

      quick_reply_bg    : 'transparent',
      quick_reply_text  : primary,
      quick_reply_border: primary,

      quick_reply_hover_bg    : primary,
      quick_reply_hover_text  : contrast_wcag(primary),
      quick_reply_hover_border: primary,

      message_box_bg          : input.bg,
      message_box_text        : input.text,
      message_box_border      : 'inherit',
      message_box_focus_shadow: '0 0 40px rgba(' + input.text + ', .1 )',

      message_box_button_hover_text: primary,

      background: '#232429',
      input     : '#1a1b1f',

      bot_text : '#F7f7f8',
      user_text: '#232429'
    }
  }
}
