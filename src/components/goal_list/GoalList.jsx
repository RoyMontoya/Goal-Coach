import React, {Component} from 'react'
import firebaseApp from '../../utilities/firebase'
import {setGoals} from '../../actions'
import {connect} from 'react-redux'
import GoalItem from '../goal_item/GoalItem'

class GoalList extends Component {

  componentDidMount() {
    //CLEAN
    const self = this;
    firebaseApp.database().ref('goals').on('value', function(snapshot) {
      let goals = []
      snapshot.forEach(goal => {
        const {email, title} = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
      })
      self.props.setGoals(goals);
    });
  }

  render() {
    return (<div>{this.props.goals.map((goal, index) => {
      return (
        // <div key={index}>{goal.title}</div>
        <GoalItem key={index} goal={goal} />
      )
    })}</div>)
  }
}

export default connect((state) => ({goals: state.goals}), {setGoals})(GoalList);
