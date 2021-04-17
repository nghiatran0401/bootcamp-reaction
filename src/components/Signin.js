import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function signIn() {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(e => setError(e.message))
  }

  return (
    <div className="form-inline" style={{margin: '5%'}}>
      <h2>Sign In</h2>
      <div className="form-group">
        <input 
          className="form-control"
          type="email"
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
          onClick={signIn}
        >
          Sign In
        </button>
        <div>{error}</div>
        <div><Link to={'./signup'}>Sign Up instead</Link></div>
      </div>
    </div>
  )
}

export default Signin;