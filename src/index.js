import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { firebaseApp } from './firebase';
import PubSub from './pubnub';
import { logUser } from './actions/logUser';
import rootReducer from './reducers';
import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import './index.css';


// Redux Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// History Object
const history = createBrowserHistory();

// PubSub channels
const pubsub = new PubSub();
pubsub.addListener({
  message: messageObject => store.dispatch(messageObject.message)
});

// Firebase auth
firebaseApp.auth().onAuthStateChanged(user => {  
  if (user) {
    store.dispatch(logUser(user.email))
    history.push('/app')
  } else {
    history.push('/signin')
  }
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/app' component={App} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);