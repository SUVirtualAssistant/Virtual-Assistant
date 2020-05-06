const font = {
  family     : 'IBM Plex Sans, sans-serif',
  size       : {
    default: '14px',
    xs     : '10px',
    sm     : '12px',
    lg     : '19px',
    xl     : '19px'
  },
  line_height: {
    default: 'calc(20 / 14)',
    sm     : '1.2',
    lg     : '1.5',
    em     : '$line-height * 1em'
  },
  weight     : {
    light : '300',
    normal: '400',
    bold  : '700'
  }
}

const chat = {
  paddingX    : '16px',
  paddingY    : '16px',
  border_width: '1px',
  font_family : font.family,
  font_size   : font.size.default,
  line_height : font.line_height.default,

  item_spacing_x: '8px',
  item_spacing_y: '16px',

  message_list_padding_x: '16px',
  message_list_padding_y: '16px',
  message_list_spacing  : '16px',

  bubble_padding_x  : '12px',
  bubble_padding_y  : '8px',
  bubble_spacing    : '2px',
  bubble_line_height: '18px',

  bubble_border_radius   : '12px',
  bubble_border_radius_sm: '2px',

  message_box_padding_x: '12px',
  message_box_padding_y: '10px',

  quick_reply_padding_x  : '12px',
  quick_reply_padding_y  : '8px',
  quick_reply_spacing    : '8px',
  quick_reply_line_height: '18px'
}

export const common = {
  font,
  chat,
  transition: 'color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out !default'
}
