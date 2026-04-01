import counterReducer from './counterReducer.jsx'
import authReducer from './authReducer.jsx'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter:counterReducer,
  auth:authReducer
})

export default allReducers