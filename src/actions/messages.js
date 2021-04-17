import { NEW_MESSAGE } from './types';
import { v4 } from 'uuid';

export const newMessage = ({ message, username }) => ({
  type: NEW_MESSAGE,
  item: { 
    id: v4(), 
    timestamp: Date.now(), 
    message,
    username
  }
});