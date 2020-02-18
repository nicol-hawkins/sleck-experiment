import React, { Component } from 'react';
import './ProjectSelector.css';

class ProjectSelector extends Component {
  render() {
    return (
      <div className="ChannelSelector">
        <div className="ChannelSelector-channelHeader">All Projects</div>
        {
          this.props.projects.map((projectName, index) => (
            this.props.selectedProject === projectName ? (
              <div key={index} className="ChannelSelector-channel ChannelSelector-channel--selected"># {projectName}</div>
            ) : (
              <div onClick={() => this.props.onSelectProject(projectName)} key={index} className="ChannelSelector-channel"> {projectName}</div>
            )
          ))
        }
      </div>
    );
  }
}

export default ProjectSelector;
