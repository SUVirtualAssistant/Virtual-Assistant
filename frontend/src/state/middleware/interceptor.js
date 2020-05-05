/**
 * src: https://everyday.codes/javascript/improve-your-redux-skills-by-writing-custom-middleware/
 */
import * as lexTypes from '../modules/lex/types'

const interceptors = [
  {
    type   : lexTypes.SESSION_START_REQUEST,
    handler: (props) => {
      console.log('starting lex session')
    }
  }
]

const createInterceptorMiddleware = interceptors => store => next => action => {
  Promise.all(interceptors.filter(interceptor => interceptor.type === action.type)
                          .map(interceptor => {
                            const result = interceptor.handler(action, store.dispatch, store.getState)
                            return result instanceof Promise ? result : Promise.resolve(result)
                          })
  )
         .then((afterDispatchHandlers) => {
           next(action)
           afterDispatchHandlers.forEach(
             handler =>
               typeof handler === 'function' &&
               handler(action, store.dispatch, store.getState)
           )
         })
         .catch(e => console.error(e))
}

export default createInterceptorMiddleware(interceptors)
