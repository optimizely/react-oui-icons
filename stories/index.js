import React from 'react';
import icons from '../src/Icon/icons.json';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Icon from '../src/Icon';
import './style.css';

const stories = storiesOf('Icons', module);

// this add knobs to test component with diff props
stories.addDecorator(withKnobs);

stories.add('all icons', () => {      
        const iconsElements = icons.map( (icon, index) => {
          const Box = styled.div`
          border: 1px dashed #ccc;
          border-radius: 8px;
          box-sizing: border-box;
          display: flex;
          height: 100px;
          justify-content: center;
          margin: 5px;
          padding: 20px 10px
          text-align: center;
          width: 100px;
          &:after {
            color: white;
            transition: all 0.4s ease;
            content: '${icon.title}';
            font-family: Helvetica;
            font-size: 0.5rem;
            max-width: 90px;
            position: absolute;
            margin-top: 70px;
          }
          &:hover:after {
            color: #666;
          }
        `
          return <Box key={index} style={ styles.iconBox }>
            <Icon 
              style={styles.icon}
              description={icon.title} 
              name={icon.title.split(' ').join('-')}
              fill={ text('color', 'black') } 
              size={ select('size', {small: 'small', medium: 'medium', large: 'large'},'medium') }
            />
          </Box>
        });
        return (
          <div className="App">
            <Container>
              { iconsElements }
            </Container>
          </div>
        );
      }
  );

stories.add('icon docs', withInfo('react <Icon /> component')( () => {      
  return (
    <Icon name='bell' size='large' />
  );
}
));

stories.add('animated icon', () => {      
  return (
    <Icon className='rotating' name='settings' size='large' />
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const styles = {
  icon: {
    alignSelf: "center",
  }
}