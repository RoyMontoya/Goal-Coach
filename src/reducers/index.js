import {SIGNED_IN} from '../utilities/constants'

let user = {
  email: null
}

export default(state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      user = {
        email: action.payload
      }
      return (user)
    default:
      return state;
  }
}
