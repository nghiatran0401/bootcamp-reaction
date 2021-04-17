import { SIGNED_IN } from '../actions/types';

const DEFAULT_USER = { email: '' }

const userReducer = (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return {
        ...state,
        email: action.email
      }
    default:
      return state;
  }
}

export default userReducer;