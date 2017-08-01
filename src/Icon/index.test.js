import React from 'react'
import Icon from '../Icon'
import { shallow, mount, render } from 'enzyme'

test('Icon component size prop is equal to medium', () => {
    const component = mount(
      <Icon
        name="ab"
        description="icon description"
        size="medium"
      />
    );

    expect(component.props().size).toEqual('medium');
});

test('Icon component name prop is equal to ab', () => {
    const component = mount(
      <Icon
        name="ab"
        description="icon description"
        size="medium"
      />
    );

    expect(component.props().name).toEqual('ab');
});

test('Icon component description prop is equal to \'icon description\'', () => {
    const component = mount(
      <Icon
        name="ab"
        description="icon description"
        size="medium"
      />
    );

    expect(component.props().description).toEqual('icon description');
});