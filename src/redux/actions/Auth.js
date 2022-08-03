import * as api from '../../api'
import { AUTH, LOGOUT } from '../constants/actionTypes'

export const signin = (values, navigate) => async (dispatch) => {
  try {
    console.log(values)
    const { data } = await api.signIn(values)

    dispatch({ type: AUTH, data })

    navigate('/class')

    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}

export const signup = (values, navigate) => async (dispatch) => {
  try {
    console.log(`This is data from actions folder auth.js ${values}`)
    const { data } = await api.signUp(values)
    console.log(`This is signup data from Auth actions.js: `, data)
    dispatch({ type: AUTH, data })

    navigate('/login')
  } catch (error) {
    console.log(error)
  }
}
