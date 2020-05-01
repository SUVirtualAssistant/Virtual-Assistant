export const getDate = (locale = 'default') => {
  const dateOptions = {
    year: 'numeric', month: 'long', day: 'numeric',
    weekday: 'long'
  }

  return new Intl.DateTimeFormat(locale, dateOptions).format(new Date())
}


export const getMessageTime = (locale = 'default') => {
  const messageDateOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: true
  }

  return new Intl.DateTimeFormat(locale, messageDateOptions).format(new Date())//.toLocaleString()
}

