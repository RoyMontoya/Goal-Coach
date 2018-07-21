import {combineReducers} from 'redux';
import user from './user';
import goals from './goals';
import complete from './complete'

export default combineReducers({
  user,
  goals,
  complete
})
