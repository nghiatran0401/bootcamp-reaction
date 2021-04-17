import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions/username';


function SetUsername({ setUsername }) {
  return (
    <div>
      <h3>username</h3>
      <input onChange={setUsername} />
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    setUsername: (e) => dispatch(setUsername(e.target.value))
  }
}

export default connect(null, mapDispatchToProps)(SetUsername);