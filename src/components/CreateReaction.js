import React from 'react';
import { connect } from 'react-redux';

import PubSub from '../pubnub';
import { REACTION_OBJECTS } from '../actions/types';
import { createReaction } from '../actions/reactions';

const pubsub = new PubSub();


function CreateReaction({ messageId, username }) {
  return (
    <div>
      {
        REACTION_OBJECTS.map(REACTION_OBJECT => {
          const { type, emoji } = REACTION_OBJECT;

          return (
            <span
              style={{ margin: 5, cursor: 'pointer' }}
              key={type}
              onClick={() => pubsub.publish(createReaction(type, emoji, username, messageId))}
            >
              {emoji}
            </span>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(CreateReaction);