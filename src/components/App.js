import React from 'react';

import { firebaseApp } from '../firebase';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';
import SetUsername from './SetUsername';

class App extends React.Component {
  render() {
    return (
      <div style={{margin: '5px'}}>
        <h2>Reaction</h2>
        <SetUsername />
        <hr/>
        <PublishMessage />
        <hr/>
        <MessageBoard />
        <hr/>
        <button
          className="btn btn-danger"
          onClick={() => firebaseApp.auth().signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

export default App;

// install moment: to get format for date
// Ex: moment(new Date(reminder.dueDate)).fromNow() => "6 days away from goal"
