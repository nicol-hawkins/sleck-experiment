import React, { Component } from 'react';
import './RemoveButton.css';

class RemoveButton extends Component {
  render() {
    let className = 'remove-btn';

return (
  
     <button
      className={className} 
      onClick={this.props.onClick}>
        delete
    </button>
 
 
    );
  }
}

export default RemoveButton;