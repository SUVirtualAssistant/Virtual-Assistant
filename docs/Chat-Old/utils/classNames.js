const classNames = () => {
  let args = []
  for (let _i = 0; _i < arguments.length; _i++)
    args[_i] = arguments[_i]
  
  return args.filter( arg => arg !== true && !!arg )
             .map( arg => {
               return Array.isArray(arg)
                 ? classNames.apply(void 0, arg) : typeof arg === 'object'
                 ? Object.keys(arg)
                         .map( (key, idx) => arg[idx] || (arg[key] && key) || null )
                         .filter( el => el !== null)
                         .join(' ')
                 : arg
             })
             .filter( arg => !!arg )
             .join(' ')
}

export { classNames }