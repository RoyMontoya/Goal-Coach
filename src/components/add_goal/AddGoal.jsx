import React, {Component} from 'react';
import {goalRef} from '../../utilities/firebase';
import {connect} from 'react-redux';

class AddGoal extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }

    this.addGoal = this.addGoal.bind(this);
  }

addGoal(){
  const {title} = this.state;
  const {email} = this.props.user;
  goalRef.push({email , title});
  this.setState({title:''})
}

render() {
    return (<div className="form-inline ">
      <div className="form-group">
        <input type="text" placeholder="Add Goal"
            value={this.state.title}
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}/>
        <button className="btn btn-success"
          type="button"
          onClick={this.addGoal}>Submit</button>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
