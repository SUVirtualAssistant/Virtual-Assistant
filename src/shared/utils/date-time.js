export const getDate = date => {
  const dateOptions = {
    year   : 'numeric', month: 'long', day: 'numeric',
    weekday: 'long'
  }
  const d = new Date(date)
  
  return new Intl.DateTimeFormat(undefined, dateOptions).format(d)
}

export const getMessageTime = date => {
  const messageDateOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: true
  }

  return new Intl.DateTimeFormat('default', messageDateOptions).format(date)
}

