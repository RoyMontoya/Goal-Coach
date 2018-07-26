import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import history from './utilities/history';
import {logUser} from './actions/index'
import firebaseApp from './utilities/firebase';
import App from './components/app/App';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const {email} = user;
    store.dispatch(logUser(email))
    history.push('/')
  } else {
    history.push('/signin')
  }
})

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </div>
  </Router>
</Provider>, document.getElementById('root'))
