import {SIGNED_IN, SET_GOALS, SET_COMPLETE} from '../utilities/constants'

export function logUser(email) {
  return ({
    type: SIGNED_IN,
    payload: email
  })
}

export function setGoals(goals){
  return ({
    type: SET_GOALS,
    goals
  })
}

export function setCompleted(completeGoals){
  return ({
    type: SET_COMPLETE,
    completeGoals
  })
}
