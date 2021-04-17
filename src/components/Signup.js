import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function signUp() {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(e => setError(e.message))
  }

  return (
    <div className="form-inline" style={{margin: '5%'}}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <input 
          className="form-control"
          type="text"
          value={email}
          style={{marginRight: '5px'}}
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          className="form-control"
          type="password"
          value={password}
          style={{marginRight: '5px'}}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button 
          className="btn btn-primary"
          type="button"
          onClick={signUp}
        >
          Sign Up
        </button>
        <div>{error}</div>
        <div><Link to={'/signin'}>Already a user? Sign In instead.</Link></div>
      </div>
    </div>
  )
}

export default Signup;