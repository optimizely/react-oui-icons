import React, { Component } from 'react';
import { icons } from './config';
import './App.css';

import Icon from './Icon';

class App extends Component {
  state = {
    size: "small",
    color: "#666"
  }
  
  render() {
    const iconsElements = icons.map( (icon, index) => {
      return <div key={index} className="icon-box">
        <Icon 
          className="icon"
          description={icon} 
          name={icon} 
          size={this.state.size} 
          fill={this.state.color}
        />
      </div>
    });
    return (
      <div className="App">
        <div className="icon-container">
          { iconsElements }
        </div>
      </div>
    );
  }
}


export default App;
