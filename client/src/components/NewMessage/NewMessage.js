import React, { Component } from 'react';
import './NewMessage.css';

import SaveButton from '../SaveButton/SaveButton.js';

class NewMessage extends Component {
  render() {
    return (
      <div className="NewMessage">
        <input value={this.props.value} onChange={this.props.onChangeContent} placeholder="Type your message" />
        <SaveButton onClick={this.props.onClickSend}>Send</SaveButton>
      </div>
    );
  }
}

export default NewMessage;
