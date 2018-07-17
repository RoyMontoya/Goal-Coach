import {SIGNED_IN} from '../utilities/constants'

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    payload: email
  }
  return action;
}
