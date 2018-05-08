import React from 'react';
import icons from '../src/Icon/icons.json';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';
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

stories.add('all icons', () => {
        const iconsElements = icons.map( (icon, index) => {
          const Box = styled.div`
          border: 1px solid #eee;
          border-radius: 8px;
          box-sizing: border-box;
          display: flex;
          height: 100px;
          justify-content: center;
          align-items: center;
          margin: 5px;
          padding: 20px 10px
          text-align: center;
          width: 100px;
          &:after {
            color: #666;
            transition: all 0.4s ease;
            content: '${icon.title}';
            font-family: Helvetica;
            font-size: 0.6rem;
            max-width: 90px;
            position: absolute;
            margin-top: 70px;
            opacity: 0.6;
          }
          &:hover:after {
            opacity: 1;
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
  );

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
