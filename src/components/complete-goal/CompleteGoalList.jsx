import React from 'react';
import {completeGoalRef} from '../../utilities/firebase';
import {connect} from 'react-redux'
import {setCompleted} from '../../actions'

class CompleteGoalList  extends React.Component {
  constructor(props) {
    super(props);

    this.clearComplete = this.clearComplete.bind(this);
  }

  clearComplete(){
    completeGoalRef.set([]);
  }

  clearSingle(key){
    completeGoalRef.child(key).remove();
  }

  componentWillMount(){
    const self = this;
    completeGoalRef.on('value', function(snapshot) {
      let completeGoals = []
      snapshot.forEach(single =>{
        const key = single.key;
        const {email, title} = single.val();
        completeGoals.push({email, title, key})
      })
      self.props.setCompleted(completeGoals);
    });

  }

  render() {
    return (
      <div>
        {
          this.props.complete.map((goal, index) => {
            const {email, title, key} = goal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
                <button onClick={() => this.clearSingle(key)} className="btn btn-primary" style={{margin: '5px'}}>Clear</button>
              </div>
            )
          })
        }
        <button className="btn btn-primary"
          onClick={this.clearComplete}>
          Clear All
        </button>
      </div>
    )
  }
}

export default connect((state) => ({complete :state.complete}), {setCompleted})(CompleteGoalList)
