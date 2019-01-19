import { combineReducers } from 'redux'
import shows from './shows'
import details from './details'

export const INITIAL_STATE = {
  shows: {},
  details: {}
}

export const rootReducer = combineReducers({
  shows,
  details
})