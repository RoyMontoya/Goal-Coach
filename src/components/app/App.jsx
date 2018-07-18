import React, { Component } from 'react';
import firebaseApp from '../../utilities/firebase';
import {connect} from 'react-redux'
import AddGoal from '../add_goal/AddGoal'
import GoalList from '../goal_list/GoalList'

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return (
      <div>
        <h3>Goals</h3>
        <AddGoal />
        <GoalList />
        <button className="btn btn-danger"
          onClick={this.signOut.bind(this)}>SignOut</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps, null)(App);
