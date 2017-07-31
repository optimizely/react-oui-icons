import React from 'react';
import { icons } from '../src/config';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Icon from '../src/Icon';

storiesOf('Button', module)
  .add('with text', () => {      
        const iconsElements = icons.map( (icon, index) => {
          return <div key={index} style={ styles.iconBox }>
            <Icon 
              style={styles.icon}
              description={icon} 
              name={icon} 
            />
          </div>
        });
        return (
          <div className="App">
            <div style={styles.iconContainer}>
              { iconsElements }
            </div>
          </div>
        );
      }
  );


const styles = {
  iconContainer:  {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  iconBox: {
    border: "1px dashed #ccc",
    borderRadius: 8,
    boxSizing: "border-box",
    display: "flex",
    height: 100,
    justifyContent: "center",
    margin: 5,
    padding: "20px 10",
    textAlign: "center",
    width: 100,
  }, 
  icon: {
    alignSelf: "center",
  }
}