import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

export const newMessage = ({ message, username }) => ({
  type: NEW_MESSAGE,
  item: { 
    id: uuid(), 
    timestamp: Date.now(), 
    message,
    username
  }
});