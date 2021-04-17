import { combineReducers } from 'redux';
import messagesReducer from './messages';
import usernameReducer from './username';
import userReducer from './logUser';
import reactionsReducer from './reactions';


const rootReducer = combineReducers({
  messages: messagesReducer,
  username: usernameReducer, 
  user: userReducer, 
  reactions: reactionsReducer
})

export default rootReducer;