import React from 'react';
import icons from '../src/Icon/icons.json';
import styled from 'styled-components';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Icon from '../src/Icon';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const styles = {
  icon: {
    alignSelf: "center",
  }
}

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('All icons', withInfo()(() => {
        const iconsElements = icons.map( (icon, index) => {
          const Box = styled.div`
          border: 1px solid #eee;
          box-sizing: border-box;
          display: flex;
          width: 20%;
          height: 150px;
          justify-content: center;
          margin: 0;
          padding: 40px 20px;
          text-align: center;
          position: relative;
          &:after {
            text-align: center;
            color: #333;
            transition: all 0.4s ease;
            content: '${icon.title}';
            font-family: Helvetica;
            font-size: 10px;
            position: absolute;
            bottom: 30px;
          }
        `
          return <Box key={index}>
            <Icon
              style={ styles.icon }
              description={icon.title}
              name={icon.title.split(' ').join('-')}
              size='medium'
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
  ));

stories.add('Inherited stroke colors', () => {
  return (
    <ul>
      <li style={{'color':'yellow'}}>Stroke <Icon name='pencil' /></li>
      <li style={{'color':'orange'}}>Stroke <Icon name='pencil' /></li>
      <li style={{'color':'red'}}>Stroke <Icon name='pencil' /></li>
      <li style={{'color':'purple'}}>Stroke <Icon name='pencil' /></li>
    </ul>
  );
});

stories.add('Inherited fill colors', () => {
  return (
    <ul>
      <li>Fill <Icon name='save' fill={ text('color', 'yellow') } /></li>
      <li>Fill <Icon name='save' fill={ text('color', 'green') } /></li>
      <li>Fill <Icon name='save' fill={ text('color', 'blue') } /></li>
      <li>Fill <Icon name='save' fill={ text('color', 'purple') } /></li>
    </ul>
  );
});

stories.add('Colored icons', () => {
  return (
    <ul style={ { 'color': 'purple' } }>
      <li>
        Purple text &amp; icon: <Icon name='calendar' />
      </li>
      <li style={ { 'color': 'orange' } }>
        Orange text &amp; icon: <Icon name='calendar' />
      </li>
      <li style={{'color': 'orange'}}>
        Orange text, <span style={ { 'color': 'purple' } }>Purple icon:</span> <Icon name='calendar' fill={ text('color', 'purple') } />
      </li>
      <li>
        Purple text, <span style={ { 'color': 'orange' } }>Orange icon:</span> <Icon name='calendar' fill={ text('color', 'orange') } />
      </li>
    </ul>
  );
});

stories.add('Stroke vs fill', () => {
  return (
    <div>
      <p style={ { 'color': 'red' } }>
        Red text (stroke icons should be <span style={{'color':'green'}}>green</span> <span style={{'color':'blue'}}>blue</span> <span style={{'color':'purple'}}>purple</span>)
        <Icon name='pencil' size='small' fill={ text('color', 'green') } />
        <Icon name='pencil' fill={ text('color', 'blue') } />
        <Icon name='pencil' size='large' fill={ text('color', 'purple') } />
      </p>
      <p style={ { 'color': 'red' } }>
        Red text (stroke icons should be <span style={{'color':'green'}}>green</span> <span style={{'color':'blue'}}>blue</span> <span style={{'color':'purple'}}>purple</span>)
        <Icon name='program-management' size='small' stroke={ text('color', 'green') } />
        <Icon name='program-management' stroke={ text('color', 'blue') } />
        <Icon name='program-management' size='large' stroke={ text('color', 'purple') } />
      </p>
      <p style={ { 'color': 'red' } }>
        Red text (fill icons should be <span style={{'color':'green'}}>green</span> <span style={{'color':'blue'}}>blue</span> <span style={{'color':'purple'}}>purple</span>)
        <Icon name='save' size='small' fill={ text('color', 'green') } />
        <Icon name='save' fill={ text('color', 'blue') } />
        <Icon name='save' size='large' fill={ text('color', 'purple') } />
      </p>
    </div>
  );
});

stories.add('Program management', () => {
  return (
    <p>
      <Icon name='program-management' />
    </p>
  );
});

stories.add('Pencil', () => {
  return (
    <p>
      <Icon name='pencil' />
    </p>
  );
});
