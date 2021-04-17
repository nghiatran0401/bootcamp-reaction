import { SIGNED_IN } from './types';


export const logUser = (email) => {
  return {
    type: SIGNED_IN,
    email
  };
}