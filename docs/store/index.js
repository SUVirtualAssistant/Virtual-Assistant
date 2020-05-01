import { initializeStore as dev}   from 'store/store/configureStore.dev'
import { initializeStore as prod } from 'store/store/configureStore.prod'

export let makeStore

process.env.NODE_ENV === 'production'
  ? makeStore = prod
  : makeStore = dev


