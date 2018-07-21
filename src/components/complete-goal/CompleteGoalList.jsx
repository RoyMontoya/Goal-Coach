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

  componentWillMount(){
    //TODO clean
    console.log('did');
    const self = this;
    completeGoalRef.on('value', function(snapshot) {
      let completeGoals = []
      snapshot.forEach(single =>{
        const {email, title} = single.val();
        completeGoals.push({email, title})
      })
      console.log(completeGoals);
      self.props.setCompleted(completeGoals);
    });

  }

  render() {
    return (
      <div>
        {
          this.props.complete.map((goal, index) => {
            const {email, title} = goal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
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
