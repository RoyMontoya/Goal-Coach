import React, { Component } from 'react';
import firebaseApp from '../../utilities/firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {

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

  signUp(){
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.setState({error})
      })
  }

  render(){
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>SignUp</h2>
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
            onClick={this.signUp.bind(this )}
            type="button ">SignUp</button>
        </div>
        <div>{this.state.error.message }</div>
        <div><Link to={'/signin'}>Already a user? SignIn Instead</Link></div>
      </div>
    )
  }
}

export default SignUp;
