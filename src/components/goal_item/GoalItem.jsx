import React from 'react';
import {completeGoalRef, goalRef} from '../../utilities/firebase';
import {connect} from 'react-redux'

class GoalItem extends React.Component {
  constructor(props) {
    super(props);
    this.completeGoal = this.completeGoal.bind(this);
  }

  completeGoal() {
    const {email} = this.props.user;
    const {title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title})
  }

  render() {
    const {email, title} = this.props.goal;

    return (<div style={{
        margin: '5px'
      }}>
      <strong>{title}</strong>
      <span style={{
          margin: '0 5px'
        }}>submitted by
        <em>{email}</em>
      </span>
      <button onClick={this.completeGoal} className="btn btn-sm btn-primary">Complete</button>
    </div>);
  }
}

export default connect((state) => ({user: state.user}), null)(GoalItem)
