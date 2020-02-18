import React, { Component } from 'react';
import './Nav.css';
import {Button} from 'kc-react-widgets';  

import logo from './logo.svg';
import starFilled from '../ChatMessage/star_filled.svg';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 'project demo',
      stars: []
    };
   
  }

  render() {
    return (
      <div className="Nav">
        <img src={logo} className="Nav-logo" alt="sleck" />
        
        <div> {this.props.selectedProject}</div>
          {this.props.children}

        <div className="Nav-starredCount">
          {this.props.starCount}
          <img src={starFilled} alt="Star" />
        </div>
      </div>
    );
  }
}

export default Nav;
