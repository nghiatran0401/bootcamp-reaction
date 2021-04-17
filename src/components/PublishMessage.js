import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PubSub from '../pubnub';
import { newMessage } from '../actions/messages';

const pubsub = new PubSub();

function PublishMessage({ username }) {
  const [message, setMessage] = useState('');
  const [publishMessage, setPublishMessage] = useState(false);

  useEffect(() => {
    if (publishMessage && message) {
      const publishId = setTimeout(() => {
        pubsub.publish(newMessage({ message, username }))
        setMessage('');
        setPublishMessage(false);
      }, 1000);
      return () => clearTimeout(publishId);
    }
  })

  return (
    <div>
      <h3>Got something to say?</h3>
      <input 
        type="text"
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && setPublishMessage(true)}
      />
      <button onClick={() => setPublishMessage(true)}>
        Publish it!
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(PublishMessage);