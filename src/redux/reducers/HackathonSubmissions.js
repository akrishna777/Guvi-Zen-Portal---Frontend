import {
  CREATE_HACKATHON_SUBMISSIONS,
  FETCH_HACKATHON_SUBMISSIONS,
} from '../constants/actionTypes'

export const hackathonSubmissionsReducer = (
  hackathonSubmissions = [],
  action,
) => {
  switch (action.type) {
    case FETCH_HACKATHON_SUBMISSIONS:
      return action.payload
    case CREATE_HACKATHON_SUBMISSIONS:
      return [...hackathonSubmissions, action.payload]

    default:
      return hackathonSubmissions
  }
}

export default hackathonSubmissionsReducer
