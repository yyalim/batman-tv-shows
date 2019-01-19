import { GET_SHOWS } from '../actions/shows'

const shows = (state = {}, action) => {
  switch(action.type) {
    case GET_SHOWS:
      return {
        ...state,
        ...action.shows
      }
    default:
      return state
  }
}

export default shows