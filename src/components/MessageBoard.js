import React from 'react';
import { connect } from 'react-redux';

import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

function MessageBoard({ messages, reactions }) {
  return (
    <div>
      {messages.map(messageItem => {
        const { id, message, timestamp, username} = messageItem;
        return (
          <div key={id}>
              <h4>{new Date(timestamp).toLocaleString()}</h4>
              <p>{message}</p>
              <h4>- {username}</h4>
              <CreateReaction messageId={id} />
              <MessageReactions messageReactions={reactions[id]} />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    reactions: state.reactions
  }
}
 
export default connect(mapStateToProps)(MessageBoard);