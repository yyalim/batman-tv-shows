import { getBatmanShow } from '../lib/api'

export const GET_SHOW_DETAILS = 'GET_SHOW_DETAILS'

const getShowDetails = details => ({
  type: GET_SHOW_DETAILS,
  details
})

export const handleGetShowDetails = id => dispatch => {
  return getBatmanShow(id)
    .then(details => dispatch(getShowDetails(details)))
}