import React from 'react';
import {completeGoal} from '../../utilities/firebase'

export default class CompleteGoalList  extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    console.log('did');
    completeGoal.on('value', function(snapshot) {
      let completeGoals = []
      snapshot.forEach(complete =>{
        const {email, title} = complete.val();
        completeGoal.push({email, title})
      })
      console.log(completeGoals);
    });
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

// CompleteGoalList.propTypes = {
// };
