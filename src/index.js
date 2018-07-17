import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import SignIn from './components/sign-in/SignIn'
import SignUp from './components/sign-up/SignUp'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(<Router>
  <div>
    <Route exact="exact" path="/" component={App}/>
    <Route exact="exact" path="/signin" component={SignIn}/>
    <Route exact="exact" path="/signup" component={SignUp}/>
  </div>
</Router>, document.getElementById('root'))
