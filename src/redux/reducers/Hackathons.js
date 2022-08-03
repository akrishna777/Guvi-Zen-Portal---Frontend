import {
  CREATE_HACKATHON,
  CREATE_HACKATHON_SUBMISSIONS,
  DELETE_HACKATHON,
  FETCH_HACKATHONS,
  UPDATE_HACKATHON,
} from '../constants/actionTypes'

export const hackathonReducer = (hackathons = [], action) => {
  switch (action.type) {
    case FETCH_HACKATHONS:
      return action.payload
    case CREATE_HACKATHON:
      return [...hackathons, action.payload]
    case UPDATE_HACKATHON:
      return [
        hackathons.map((hackathon) =>
          hackathon._id === action.payload._id ? action.payload : hackathon,
        ),
        action.payload,
      ]
    case DELETE_HACKATHON:
      return hackathons.filter(
        (hackathon) => hackathon.id !== action.payload.id,
      )

    default:
      return hackathons
  }
}

export default hackathonReducer
