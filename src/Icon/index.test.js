import React from 'react'
import Icon from '../Icon'
import { shallow, mount, render } from 'enzyme'

test('Icon component size prop is equal to medium', () => {
    const component = mount(
      <Icon
        name="ab"
        size="medium"
      />);
    expect(component.props().size).toEqual('medium');
});

test('Icon component name prop is equal to ab', () => {
    const component = mount(<Icon 
      name="ab" 
    />);
    expect(component.props().name).toEqual('ab');
});

test('Icon component color prop is equal tomato', () => {
  const component = mount(
    <Icon
      name="ab"
      size="medium"
      color="tomato"
    />);
  expect(component.props().color).toEqual('tomato');
});

test('Icon component style is equal to obj with color style', () => {
  const component = mount(
    <Icon
      name="ab"
      size="medium"
      style={ {'color': 'tomato'} }
    />);
  expect(component.props().style).toEqual({'color': 'tomato'});
});

test('Icon component role prop is equal to ab icon', () => {
  const component = mount(
    <Icon
      name="ab"
      size="medium"
      role="ab icon"
    />);
  expect(component.props().role).toEqual('ab icon');
});

test('When not description provided, desc will be icon for <name of icon>', () => {
  const component = mount(
    <Icon
      name="ab"
      size="medium"
      role="ab icon"
    />);
  console.log(component);
  //expect(component.props.desc.toEqual('icon for ab'));
});