import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebaseApp from '../../utilities/firebase';

class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message:''
      }
    }
  }

  signIn(){
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.setState({error})
      })
  }

  render(){
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>SignIn</h2>
        <div className="form-group">
          <input className="form-control"
          type="text"
          style={{marginRight: '5px'}}
          placeholder="email"
          onChange={event => this.setState({email: event.target.value})}/>
          <input className="form-control"
          type="password"
          placeholder="password"
          onChange={event => this.setState({password: event.target.value})}/>
          <button className="btn btn-primary"
            onClick={this.signIn.bind(this)}
            type="button ">SignIn</button>
        </div>
        <div>{this.state.error.message }</div>
        <div><Link to={'/signup'}>Sign Up Instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
