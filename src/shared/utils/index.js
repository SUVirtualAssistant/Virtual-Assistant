import { attempt } from 'lodash'

export const parseLodash = str => attempt(JSON.parse.bind(null, str))

export const isAuthor = (user, msg) =>
  user && msg.author && user.id === msg.author.id

export const notEqual = (field, value) => field !== value

export const getLastArrElem = arr => arr[arr.length - 1]

export const dateChanged = (curr, prev) =>
  (curr && prev) &&
  (prev.getDate() !== curr.getDate()
    || prev.getMonth() !== curr.getMonth()
    || prev.getFullYear() !== curr.getFullYear())

export const capitalizeWords = str =>
  str.replace(/\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())

export const hasJsonStructure = str => {
  if (typeof str !== 'string') return false
  
  try {
    const result = JSON.parse(str)
    const type = Object.prototype.toString.call(result)
    
    return type === '[object Object]' || type === '[object Array]'
  } catch (err) {
    return false
  }
}
