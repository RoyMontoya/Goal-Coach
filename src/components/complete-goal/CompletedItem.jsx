import React, { Component } from 'react';

class CompletedItem extends Component {

    clearSingle = () =>{
        this.props.clearSingle(this.props.code)
    }

    render() {
        return (
            <div>
                <strong>{this.props.title}</strong> completed by <em>this.props.{this.props.email}</em>
                <button onClick = {this.clearSingle}
                className="btn btn-primary" style={{margin: '5px'}}>Clear</button>
              </div>
          );
    }
}

export default CompletedItem;
