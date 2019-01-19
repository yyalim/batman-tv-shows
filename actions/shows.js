import { getBatmanShows } from '../lib/api'

export const GET_SHOWS = 'GET_SHOWS'

const getShows = shows => ({
  type: GET_SHOWS,
  shows
})

export const handleGetShows = () => dispatch => {
  return getBatmanShows()
    .then(shows => dispatch(getShows(shows)))
}