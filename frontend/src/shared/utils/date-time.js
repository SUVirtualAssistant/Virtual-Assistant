export const getDate = date => {
  const dateOptions = {
    year   : 'numeric', month: 'long', day: 'numeric',
    weekday: 'long'
  }

  return new Intl.DateTimeFormat('default', dateOptions).format(date)
}

export const getMessageTime = date => {
  const messageDateOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: true
  }

  return new Intl.DateTimeFormat('default', messageDateOptions).format(date)
}

