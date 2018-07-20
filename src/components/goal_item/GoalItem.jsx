import React from 'react';
import PropTypes from 'prop-types';
import {completeGoal, goalRef} from '../../utilities/firebase';
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
    // completeGoal.push({email, title})
  }

  render() {
    const {email, title} = this.props.goal;

    return (<div style={{
        margin: '5px'
      }}>
      <strong>{title}</strong>
      <span style={{
          marginRight: '5px'
        }}>
        submitted by
        <em>{email}</em>
      </span>
      <button onClick={this.completeGoal} className="btn btn-sm btn-primary">Complete</button>
    </div>);
  }
}

// GoalItem.propTypes = {
//   goal: PropTypes.object
// };

export default connect((state) => ({user: state.user}), null)(GoalItem)
