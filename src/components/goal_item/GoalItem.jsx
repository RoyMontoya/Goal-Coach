import React from 'react';
import PropTypes from 'prop-types'

export default class GoalItem extends React.Component {
  render() {
    const {email, title} = this.props.goal;

    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span> submitted by <em>{email}</em></span>
      </div>
    );
  }
}

GoalItem.propTypes = {
  goal: PropTypes.object,
};
