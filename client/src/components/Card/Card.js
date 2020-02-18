import React, { Component } from 'react';
import './Card.css';
import './SaveButton.css';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import Highlight from 'react-highlight';
import _ from 'lodash'


import SaveButton from '../SaveButton/SaveButton.js';

import starEmpty from './star_empty.svg';
import starFilled from './star_filled.svg';




class Card extends Component {
  state = {
    id: 1,
    title: 'cover with tests',
    completed: false,
    textarea: `Multiline example
    text value`,
    highlight: false,
    stars:[]

  }

  virtualServerCallback = (newState) => {
     if (this.state.simulateXHR) {
     window.setTimeout(function() {
       this.changeState(newState);
     }.bind(this), this.state.XHRDelay);
     } else {
     this.changeState(newState);
     }
   };

   isStringAcceptable = (string) => {
  return (string.length >= 1);  // Minimum 4 letters long
};

changeState = (newState) => {
  this.setState(newState);
};

  render() {
    let className = 'card--show card';
    let starIcon = starEmpty;

    if (this.props.isStarred) {
      starIcon = starFilled;
    }

return (
  
  <div
  className={className}>

  <input 
    className="Title" 
    value={this.props.title} 
    onChange={this.props.onChangeTitle} 
    placeholder="Title" />
  <h3>{this.props.title} </h3>

  {/* <RIETextArea
           value={this.state.textarea}
           change={this.virtualServerCallback}
           propName="textarea"
           className={this.state.highlight ? "editable" : ""}
           validate={this.isStringAcceptable}
           classLoading="loading"
           classInvalid="invalid"
           isDisabled={this.state.isDisabled} />
         {this.state.showSource} */}

  <img 
    value={this.state.stars}
    onClick={this.props.onStarToggle} 
    className="ChatMessage-star" 
    src={starIcon} 
    alt="star" />
         
      

        <div className="NewMessage">
          <input 
            value={this.props.content} 
            onChange={this.props.onChangeContent} 
            placeholder="Type your message" 
          />
        </div>

        <button 
          className="save-btn" 
          onClick={this.props.onClickSend}>
          Save
          </button>
          {this.props.content}
          {this.props.children}
 
     
        </div>
);

};
}

export default Card;
