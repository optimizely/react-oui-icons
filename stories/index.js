import React from 'react';
import icons from '../src/Icon/icons.json';
import styled from 'styled-components';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Icon from '../src/Icon';

const testIcon = "pencil";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;`

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

stories.add('Program management', () => {
  return (
    <p>
      <Icon name='program-management' />
    </p>
  );
});


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
      <li style={{'color':'yellow'}}>Fill <Icon name='save' fill={ text('color', 'yellow') } /></li>
      <li style={{'color':'orange'}}>Fill <Icon name='save' fill={ text('color', 'orange') } /></li>
      <li style={{'color':'red'}}>Fill <Icon name='save' fill={ text('color', 'red') } /></li>
      <li style={{'color':'purple'}}>Fill <Icon name='save' fill={ text('color', 'purple') } /></li>
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

stories.add('Test: ' + testIcon, () => {
  return (
    <div>
      <h1>{ testIcon }</h1>
      <Icon name={ testIcon } size='small' />
      <Icon name={ testIcon } />
      <Icon name={ testIcon } size='large' />
      <h3>Inherit Color</h3>
      <ul className="oui-list oui-list--plain">
        <li style={{'color':'yellow'}}>Stroke <Icon name={ testIcon } /></li>
        <li style={{'color':'orange'}}>Stroke <Icon name={ testIcon } /></li>
        <li style={{'color':'red'}}>Stroke <Icon name={ testIcon } /></li>
        <li style={{'color':'purple'}}>Stroke <Icon name={ testIcon } /></li>
      </ul>
      <h3>Fill Color</h3>
      <ul>
        <li>Fill <Icon name={ testIcon } fill={ text('color', 'yellow') } /></li>
        <li>Fill <Icon name={ testIcon } fill={ text('color', 'orange') } /></li>
        <li>Fill <Icon name={ testIcon } fill={ text('color', 'red') } /></li>
        <li>Fill <Icon name={ testIcon } fill={ text('color', 'purple') } /></li>
      </ul>
      <h3>Inherit and Fill Mixed</h3>
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
      <h3>Inherit; No Override</h3>
      <p style={ { 'color': 'red' } }>
        Red text and icons
        <Icon name={ testIcon } size='small' />
        <Icon name={ testIcon } />
        <Icon name={ testIcon } size='large' />
      </p>
      <h3>Inherit; Override Fill</h3>
      <p style={ { 'color': 'red' } }>
        Red text (stroke icons should be <span style={{'color':'yellow'}}>yellow</span> <span style={{'color':'orange'}}>orange</span> <span style={{'color':'purple'}}>purple</span>)
        <Icon name={ testIcon } size='small' fill='yellow' />
        <Icon name={ testIcon } fill='orange' />
        <Icon name={ testIcon } size='large' fill='purple' />
      </p>
      <h3>Inherit; Override Stroke</h3>
      <p style={ { 'color': 'red' } }>
        Red text (stroke icons should be <span style={{'color':'yellow'}}>yellow</span> <span style={{'color':'orange'}}>orange</span> <span style={{'color':'purple'}}>purple</span>)
        <Icon name={ testIcon } size='small' stroke='yellow' />
        <Icon name={ testIcon } stroke='orange' />
        <Icon name={ testIcon } size='large' stroke='purple' />
      </p>
    </div>
  );
});
