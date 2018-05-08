import React from 'react'
import Icon from '../Icon'
import { shallow, mount, render } from 'enzyme'

describe('<Icon/> Component', () => {
  it('size prop is equal to medium', () => {
      const component = shallow(
        <Icon
          name="ab"
          size="large"
        />);
      expect(component.props().height).toEqual('24');
  });

  it('name prop is equal to ab', () => {
      const component = shallow(<Icon
        name="ab"
      />);
      expect(component.props().name).toEqual('ab');
  });

  it('color prop is equal tomato', () => {
    const component = shallow(
      <Icon
        name="ab"
        size="medium"
        stroke="tomato"
      />);
    expect(component.props().stroke).toEqual('tomato');
  });

    it('fill is equal tomato', () => {
      const component = shallow(
        <Icon
          name="ab"
          size="medium"
          fill="tomato"
        />);
      expect(component.props().style).toEqual({"fill": "tomato"});
    });

    it('style is equal to obj with color style and does not affect fill', () => {
      const component = shallow(
        <Icon
          name="ab"
          size="medium"
          fill="tomato"
          style={ { "color": "blue"} }
        />);
      expect(component.props().style).toEqual({"color": "blue", "fill": "tomato"});
    });

  it('role prop is equal to ab icon', () => {
    const component = shallow(
      <Icon
        name="ab"
        size="medium"
        role="ab icon"
      />);
    expect(component.props().role).toEqual('ab icon');
  });

  it('when description provided render <desc>{description}</desc>', () => {
    const component = shallow(
      <Icon
        name="ab"
        description="ab"
      />);
    expect(component.contains(<desc>ab</desc>)).toEqual(true);
  });

  it('should contain <title> with name of the icon', () => {
    const component = shallow(
      <Icon
        name="ab"
      />);
    expect(component.contains(<title>ab</title>)).toEqual(true);
  });
  //

  // const component = shallow(<Icon name='bell' />)
  // console.log(component);
});
