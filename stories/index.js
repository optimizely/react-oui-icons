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
  justify-content: space-around;
`

const styles = {
  icon: {
    alignSelf: "center",
  }
}

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('all icons', withInfo()(() => {
        const iconsElements = icons.map( (icon, index) => {
          const Box = styled.div`
          border: 1px solid #eee;
          box-sizing: border-box;
          display: flex;
          width: 20%;
          height: 150px;
          justify-content: center;
          margin: 0;
          padding: 40px 20px
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

stories.add('Colored icon', () => {
  return (
    <h2 style={ { 'color': 'red' } }>
      Test Me Red <Icon name='bell' size='large' />
    </h2>
  );
});

stories.add('large icon', () => {
  return (
    <Icon name='bell' size='large' fill={ text('color', 'hotpink') } />
  );
});

stories.add('checkmark mix', () => {
  return (
    <Icon name='checkmark-mixed' size='large' />
  );
});

stories.add('program management', () => {
  return (
    <Icon name='program-management' size='large' />
  );
});
