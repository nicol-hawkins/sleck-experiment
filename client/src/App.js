import React, { Component } from 'react';
import './App.css';
import {Button} from 'kc-react-widgets';  

import NewMessage from './components/NewMessage/NewMessage.js';

import Nav from './components/Nav/Nav.js';
import ProjectSelector from './components/ProjectSelector/ProjectSelector.js';



//from mern starter
// import LandingPage from './components/LandingPage/LandingPage.js';
// import Project from './components/Project/Project.js';
// import AddCard from './components/AddCard/AddCard.js';

//from nicols hmk


import Card from './components/Card/Card.js';
import RemoveButton from './components/RemoveButton/RemoveButton.js';
import CardGroup from './components/CardGroup/CardGroup.js';


class App extends Component {
  state = {
    title: '',
    content: '',
    projects: [
      'parking-lot',
      'random',
      'jokes',
    ],
    selectedProject: 'parking-lot',
    stars: [],
    newCards: [],
    availableCards: []
  }

  componentDidMount = () => {
    // Do fetch for message & star data from server
    this.refreshCards();
    this.refreshStars();
  }

  refreshCards = () => {
    fetch('/get-contents/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving message data!', data);
        this.setState({
          content: data,
        });
      });
  }

  refreshStars = () => {
    fetch('/get-stars/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving star data!', data);
        this.setState({
          stars: data,
        });
      });
  }

  toggleStar = (indexOfCard) => {
    fetch('/toggle-star/' + indexOfCard, {method: "POST"})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        this.refreshStars();
      });
  }

  selectProject = (projectName) => {
    this.setState({
      selectedProject: projectName,
    });
  }

  onChangeTitle = (ev) => {
    let value = ev.target.value;
    console.log('getting a new title', value);
    this.setState({
      title: value,     
    });
   
  }

  onChangeContent = (ev) => {
    let value = ev.target.value;
    console.log('getting a new value!', value);
    this.setState({
      content: value,     
    });
   
  }

  sendContent = (index) => {
    const content = this.state.content;
    const title = this.state.title;
    console.log("title: ", title, "content: ", content)
    // Instead of doing a simple setState, we want to send this data to the server
    this.setState({ // set the state with new array
      content: '',
      title: ''
    });
    

    fetch('/send-contents/', {method: "POST", body: content})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        this.refreshCards();
      });


      
  }

  onNewCard = (title, index) => {
    
    const newCards = this.state.newCards.slice();
    const availableCards = this.state.availableCards.slice();
    const newCard = availableCards[index];

    newCards.push(newCard);
    availableCards.splice(index, 1)

    // console.log('new card', index, title)
    console.log('new card', newCards)
    this.setState({
      newCards: newCards,
      availableCards: availableCards,
    });

  };

  removeCard = (title, index) => {
    const newCards = this.state.newCards.slice();
    const availableCards = this.state.availableCards.slice();
    const newCard = newCards[index];

    availableCards.push(newCard);
    newCards.splice(index, 1);

    console.log('new card', newCards)
    this.setState({
      availableCards: availableCards,
      newCards: newCards
    });

  };

  render() {
    return (
      <div className="App">
        <Nav
          selectedProject={this.state.selectedProject}
          starCount={this.state.stars.length}>

            <div className="AddButton">
              <Button onClick={this.onNewCard}>
                  new card
              </Button>
             </div>
        </Nav>
                      
        <ProjectSelector
          projects={this.state.projects}
          selectedProject={this.state.selectedProject}
          onSelectProject={this.selectProject} />
          

        <CardGroup>
          <div className="Card" id="results">
              {this.state.newCards.map((index) => (
                <Card 
                  className="card--show card" 
                  starCount={this.state.stars.length} 
                  stars={this.state.stars}
                  onStarToggle={this.toggleStar}
                  contents={this.state.contents}
                  value={this.state.content}
                  onChangeContent={this.onChangeContent}
                  onChangeTitle={this.onChangeTitle}
                  onClickSend={this.sendContent}
                  >
        

                     {/* <Star>
                    onClick={() => this.Toggle}
                    stars={this.state.stars}
                    onStarToggle={this.toggleStar}
                    </Star> */}
                                         

                    <RemoveButton
                      onClick={() => this.removeCard(index)}>
                    </RemoveButton>

                    
                </Card>
                ))
              }
          </div>
          </CardGroup>
      </div>
    );
  }
}

export default App;
