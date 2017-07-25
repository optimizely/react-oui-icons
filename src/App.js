import React, { Component } from 'react';
import { icons } from './config';
import './App.css';

import Icon from './Icon';



class App extends Component {
  render() {
    const iconsElements = icons.map( (icon, index) => {
      return <div key={index} className="icon-box">
        <Icon description={icon} name={icon} width="50" height="50"/>
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
