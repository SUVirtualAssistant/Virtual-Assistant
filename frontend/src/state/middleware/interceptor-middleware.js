/**
 * src: https://everyday.codes/javascript/improve-your-redux-skills-by-writing-custom-middleware/
 */

const interceptors = [
  {
    type   : 'INCREMENT',
    handler: (props) => {
      console.log('middleware: increment')
      console.log('middleware: fired after dispatch')
      console.log('action: ' + props.action + ' dispatch: ' + props.dispatch + ' state: ' + props.state)
    }
  },
  {
    type   : 'DECREMENT',
    handler: () => {
      console.log('middleware: fired before dispatch')
      return (props) => {
        console.log('middleware: fired after dispatch')
        console.log('action: ' + props.action + ' dispatch: ' + props.dispatch)
      }
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
