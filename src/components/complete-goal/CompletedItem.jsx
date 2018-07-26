import React, { Component } from 'react';

class CompletedItem extends Component {

    clearSingle = () =>{
        this.props.clearSingle(this.props.goal.key)
    }

    render() {
        return (
            <div>
                <strong>{this.props.goal.title}</strong> completed by <em>this.props.{this.props.goal.email}</em>
                <button onClick = {this.clearSingle}
                className="btn btn-primary" style={{margin: '5px'}}>Clear</button>
              </div>
          );
    }
}

export default CompletedItem;
