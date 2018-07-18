import React, {Component} from 'react'
import firebaseApp from '../../utilities/firebase'

class GoalList extends Component {
  componentWillMount() {
    //CLEAN
    firebaseApp.database().ref('goals').on('value', function(snapshot) {
      let goals = []
      snapshot.forEach(goal => {
        const {email, title} = goal.val();
        goals.push({email, title});
      })
      console.log(goals);
    });
  }

  render() {
    return (<div>Goal List</div>)
  }
}

export default GoalList;
