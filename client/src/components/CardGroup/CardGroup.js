import React, { Component } from 'react';
import './CardGroup.css';

class CardGroup extends Component {
  render() {
    return (
      <div className="CardGroup">
        {this.props.children}
        
      </div>
    );
  }
}

export default CardGroup;
