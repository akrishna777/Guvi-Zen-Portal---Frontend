import * as api from '../../api'
import {
  CREATE_HACKATHON,
  CREATE_HACKATHON_SUBMISSIONS,
  DELETE_HACKATHON,
  FETCH_HACKATHONS,
  FETCH_HACKATHON_SUBMISSIONS,
  UPDATE_HACKATHON,
} from '../constants/actionTypes'

export const getHackathons = () => async (dispatch) => {
  try {
    const { data } = await api.getHackthons()

    dispatch({ type: FETCH_HACKATHONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createHackathons = (hackathonData) => async (dispatch) => {
  try {
    const { data } = await api.createHackathon(hackathonData)

    dispatch({ type: CREATE_HACKATHON, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateHackathons = (id, hackathonData) => async (dispatch) => {
  try {
    const { data } = await api.updateHackathon(id, hackathonData)
    dispatch({ type: UPDATE_HACKATHON, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteHackathons = (id) => async (dispatch) => {
  try {
    await api.deleteHackathon(id)

    dispatch({ type: DELETE_HACKATHON, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const getHackathonSubmissions = () => async (dispatch) => {
  try {
    const { data } = await api.getHackathonSubmissions()

    dispatch({ type: FETCH_HACKATHON_SUBMISSIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createHackathonSubmissions = (submissionData) => async (
  dispatch,
) => {
  try {
    const { data } = await api.createHackathonSubmissions(submissionData)

    dispatch({ type: CREATE_HACKATHON_SUBMISSIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}
