import React, { Component } from 'react';
import { icons } from './config';
import './App.css';

import Icon from './Icon';



class App extends Component {
  render() {
    const iconsElements = icons.map( (icon, index) => {
      return <div key={index} className="icon-box">
        <Icon 
          className="icon"
          description={icon} 
          name={icon} 
          width="24" 
          height="24"
        />
      </div>
    });
    return (
      <div className="App">
        { iconsElements }
      </div>
    );
  }
}


export default App;
