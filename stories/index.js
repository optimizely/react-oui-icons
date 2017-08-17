import React from 'react';
import icons from '../src/Icon/icons.json';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Icon from '../src/Icon';

const stories = storiesOf('Icons', module);

// this add knobs to test component with diff props
stories.addDecorator(withKnobs);

stories.add('all icons', () => {      
        const iconsElements = icons.map( (icon, index) => {
          return <div key={index} style={ styles.iconBox }>
            <Icon 
              style={styles.icon}
              description={icon.title} 
              name={icon.title.split(' ').join('-')}
              stroke={ text('color', 'black') } 
              size={ select('size', {small: 'small', medium: 'medium', large: 'large'},'medium') }
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