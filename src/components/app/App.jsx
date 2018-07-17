import React, { Component } from 'react';
import firebaseApp from '../../utilities/firebase'

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return (
      <div>
        App
        <button className="btn btn-danger"
          onClick={this.signOut.bind(this)}>SignOut</button>
      </div>
    )
  }
}

export default App;
