export var classNames = function () {
  let args = []
  for (let _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return args
  .filter(function (arg) { return arg !== true && !!arg; })
  .map(function (arg) {
    return Array.isArray(arg)
           ? classNames.apply(void 0, arg) : typeof arg === 'object'
                                             ? Object
                                             .keys(arg)
                                             .map(function (key, idx) { return arg[idx] || (arg[key] && key) || null; })
                                             .filter(function (el) { return el !== null; })
                                             .join(' ')
                                             : arg;
  })
  .filter(function (arg) { return !!arg; })
  .join(' ');
};