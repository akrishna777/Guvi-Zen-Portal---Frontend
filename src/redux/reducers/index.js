import { combineReducers } from 'redux'
import AdditionalSessions from './AdditionalSessions'
import Auth from './Auth'
import Sessions from './Sessions'
import Tasks from './Tasks'
import Queries from './Queries'
import Hackathons from './Hackathons'
import HackathonSubmissions from './HackathonSubmissions'
import Capstone from './Capstone'
import CapstoneSubmission from './CapstoneSubmission'
import Leaves from './Leaves'

export default combineReducers({
  Auth: Auth,
  Sessions: Sessions,
  AdditionalSessions: AdditionalSessions,
  Tasks: Tasks,
  Queries: Queries,
  Hackathons: Hackathons,
  HackathonSubmissions: HackathonSubmissions,
  Capstone: Capstone,
  CapstoneSubmission: CapstoneSubmission,
  Leaves: Leaves,
})
