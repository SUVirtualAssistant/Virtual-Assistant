import axios                                        from 'axois'
import { accessDenied, apiEnd, apiError, apiStart } from 'Modules/actions/api'
import { API }                                      from 'Modules/actions/types'

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action)

  /**
   * Dismiss irrelevant action types
   *
   * The condition is important to prevent any action except those of type `API`
   * from triggering a network request.
   */
  if (action.type !== API) return

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

  // axois default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || ''
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Authorization'] = `Bearer${accessToken}`

  if (label)
    dispatch(apiStart(label))

  axios.request({ url, method, headers, [dataOrParams]: data })
       .then(({ data }) => {
         dispatch(onSuccess(data))
       })
       .catch(error => {
         dispatch(apiError(error))
         dispatch(onFailure(error))

         if (error.response && error.response.status === 403)
           dispatch(accessDenied(window.location.pathname))
       })
       .finally(() => {
         if (label)
           dispatch(apiEnd(label))
       })
}

export default apiMiddleware
