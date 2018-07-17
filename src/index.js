import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main/Main'
import { Router, Route, Link } from 'react-router-dom';
import history from './utilities/history';
import firebaseApp from './utilities/firebase'
import App from './components/app/App'
import SignIn from './components/sign-in/SignIn'
import SignUp from './components/sign-up/SignUp'

let isSigned = false;

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
      console.log('signed');
      history.push('/')
  }else{
      console.log('unsigned');
      history.push('/signin')
  }
})

ReactDOM.render(
  <Router history={history}>
  <div>
  <Route exact path="/" component={App}/>
  <Route path="/signin" component={SignIn}/>
  <Route path="/signup" component={SignUp}/>
  </div>
</Router>, document.getElementById('root'))
