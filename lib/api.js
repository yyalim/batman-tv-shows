import axios from 'axios'

const ROOT_URI = 'http://api.tvmaze.com'

const searchUri = query => `${ROOT_URI}/search/shows?q=${query}`
const detailsUri = id => `${ROOT_URI}/shows/${id}`

// normalize data for redux store
const normalizeShows = shows => {
  let _shows = {}

  shows
    .data
    .forEach(show => {
      _shows[show.show.id] = show
    })

  return _shows
}

// list batman shows
export const getBatmanShows = () => {
  return axios
    .get(searchUri('batman'))
    .then(shows => normalizeShows(shows))
}

// get details of batman show by id
export const getBatmanShow = id => {
  return axios
    .get(detailsUri(id))
    .then(details => details.data)
}