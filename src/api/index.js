import axios from 'axios'

const API = axios.create({
  baseURL: 'https://guvi-zen-portal.herokuapp.com',
})

export const signIn = (values) => API.post(`/user/signin`, values)
export const signUp = (values) => API.post(`/user/signup`, values)
export const fetchSessions = () => API.get(`/sessions`)
export const createSession = (sessionData) => API.post(`/sessions`, sessionData)
export const updateSession = (id, sessionData) =>
  API.patch(`/sessions/${id}`, sessionData)
export const deleteSession = (id) => API.delete(`/sessions/${id}`)

export const fetchAdditionalSessions = () => API.get('/additionalSessions')
export const createAdditionalSession = (additionalData) =>
  API.post(`/additionalSessions`, additionalData)
export const updateAdditionalSession = (id, additionalData) =>
  API.patch(`/additionalSessions/${id}`, additionalData)
export const deleteAdditionalSession = (id) =>
  API.delete(`/additionalSessions/${id}`)

export const createTask = (taskData) => API.post(`/tasks`, taskData)
export const getTasks = () => API.get(`/tasks`)

export const getQueries = () => API.get(`/queries`)
export const createQuery = (queryData) => API.post(`/queries`, queryData)
export const updateQuery = (id, queryData) =>
  API.patch(`/queries/${id}`, queryData)
export const deleteQuery = (id) => API.delete(`/queries/${id}`)

export const getHackthons = () => API.get(`/hackathons`)
export const createHackathon = (hackathonData) =>
  API.post(`/hackathons`, hackathonData)
export const updateHackathon = (id, hackathonData) =>
  API.patch(`/hackathons/${id}`, hackathonData)
export const deleteHackathon = (id) => API.delete(`/hackathons/${id}`)

export const getHackathonSubmissions = () => API.get(`/hackathons/submissions`)
export const createHackathonSubmissions = (submissionData) =>
  API.post(`/hackathons/submissions`, submissionData)

export const getCapstone = () => API.get(`/capstone`)
export const createCapstone = (capstoneData) =>
  API.post(`/capstone`, capstoneData)
export const updateCapstone = (id, capstoneData) =>
  API.patch(`/capstone/${id}`, capstoneData)
export const deleteCapstone = (id) => API.delete(`/capstone/${id}`)

export const getCapstoneSubmission = () => API.get(`/capstone/submissions`)
export const createCapstoneSubmission = (submissionData) =>
  API.post(`/capstone/submissions`, submissionData)

export const getLeaves = () => API.get(`/leaves`)
export const createLeaves = (leaveData) => API.post(`/leaves`, leaveData)
