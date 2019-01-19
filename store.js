import { createStore } from 'redux'
import { rootReducer, INITIAL_STATE } from './reducers'
import middleware from './middleware'

export const initStore = (initialState = INITIAL_STATE, options) => {
  return createStore(rootReducer, initialState, middleware)
}