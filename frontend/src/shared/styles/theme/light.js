import { darken, getLuminance, lighten } from 'polished'

const contrast_wcag = (color, dark = '#000000', light = '#ffffff') => {
  const luma = getLuminance(color)

  return luma < 0.5 ? light : dark
}

const primary = '#ff6358'

const base = {
  bg      : '#f6f6f6',
  text    : '#656565',
  border  : 'rbga(black, .08)',
  gradient: '#f6f6f6, ' + darken(0.20, '#f6f6f6')
}

const app = {
  bg    : lighten(0.01, '#f6f6f6'),
  text  : base.text,
  border: base.border
}

const body = {
  bg  : '#ffffff',
  text: '#656565'
}

const component = {
  bg    : body.bg,
  text  : body.text,
  border: 'rgba(black, .08)'
}

const button = {
  border: ''
}

const input = {
  bg    : component.bg,
  text  : component.text,
  border: button.border,
  shadow: null
}

export const lightMode = {

  buttonBackgound: '#e3e1e3',
  sendBtnFilter  : 'invert(0%)',

  colors: {
    primary  : '',
    secondary: '',

    errors     : '',
    header     : '',
    headerHover: '',
    sideDrawer : '',
    border     : '',
    card       : '',

    text          : '#363537',
    title         : '',
    pageBackground: '#E2D2E2',

    modalTitle     : '',
    modalBackground: '',

    buttonText      : '',
    buttonBackground: '',
    buttonHover     : '',

    themeToggle: {
      toggleBorder  : '#FFF',
      toggleGradient: 'linear-gradient(#39598A, #79D7ED)'
    },

    chat: {
      bg    : '#424242',
      text  : 'rgba(black, 0.87)',
      border: 'rgba(white, 0.12)',

      bubble_bg             : '#424242',
      bubble_text           : 'rgba(black, 0.87)',
      bubble_border         : '#424242',
      bubble_shadow         : '0 1px 2px rgba(0, 0, 0, .08)',
      bubble_hover_shadow   : '0 1px 2px rgba( 0, 0, 0, .16)',
      bubble_selected_shadow: '0 3px 10px rgba( 0, 0, 0, .16)',

      alt_bubble_bg             : '#3f51b5',
      alt_bubble_text           : contrast_wcag('#ffffff'),
      alt_bubble_border         : '#3f51b5',
      alt_bubble_shadow         : '0 1px 2px rgba(#ff6358, .2)',
      alt_bubble_hover_shadow   : '0 1px 2px rgba(#ff6358, .2)',
      alt_bubble_selected_shadow: '0 3px 10px rgba(#ff6358, .4 )',

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

      userText   : '#F7f7f8',
      userMessage: '#FFF3E4',
      botMessage : '#343333'
    }
  }
}
