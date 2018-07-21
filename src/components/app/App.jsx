import React, { Component } from 'react';
import firebaseApp from '../../utilities/firebase';
import {connect} from 'react-redux'
import AddGoal from '../add_goal/AddGoal'
import GoalList from '../goal_list/GoalList'
import CompleteGoalList from '../complete-goal/CompleteGoalList'

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return (
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr/>
        <h4>Goals</h4>
        <GoalList />
        <hr/>
        <h4>Complete Goal</h4>
        <CompleteGoalList />
        <hr/>
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
