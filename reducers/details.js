import { GET_SHOW_DETAILS } from '../actions/details'

const details = (state = {}, action) => {
  switch (action.type) {
    case GET_SHOW_DETAILS:
      return action.details
    default:
      return state
  }
}

export default details