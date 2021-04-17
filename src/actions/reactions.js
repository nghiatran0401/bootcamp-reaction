import { v4 } from 'uuid';


export const createReaction = (type, emoji, username, messageId) => {
  return {
    type,
    item: { 
      id: v4(), 
      timestamp: Date.now(), 
      emoji, 
      username, 
      messageId 
    }
  };
};