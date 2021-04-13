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

  it('stroke prop is equal tomato', () => {
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
    expect(component.props().style).toEqual({"fill": "tomato", "stroke": "none"});
  });

  it('style is equal to obj with color style and does not affect fill', () => {
    const component = shallow(
      <Icon
        name="ab"
        size="medium"
        fill="tomato"
        style={ { "color": "blue"} }
      />);
    expect(component.props().style).toEqual({"color": "blue", "fill": "tomato", "stroke": "none"});
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

  describe('When title prop is provided', () => {
    let props;
    const testTitle='test title';

    beforeEach(() => {
      props = {
        title: testTitle,
        name: 'winner'
      };
    });

    describe('When component mounts', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<Icon {...props} />);
      });

      it('should contain <title> with the provided title', () => {
        expect(wrapper.contains(<title>{testTitle}</title>)).toBeTruthy();
      });
    })
  });

  describe('When title prop is not provided', () => {
    let props;

    describe('When icon is different than "help"', () => {
      const testName = 'ab';

      beforeEach(() => {
        props = {
          name: testName
        };
      });

      describe('When component mounts', () => {
        let wrapper;

        beforeEach(() => {
          wrapper = shallow(<Icon {...props} />)
        });

        it('should contain <title> with the name of the icon', () => {
          expect(wrapper.find('title').exists()).toBeTruthy();
          expect(wrapper.contains(<title>{testName}</title>)).toBeTruthy();
        });
      });
    });

    describe('When the "help" icon is used', () => {
      const testName = 'help';

      beforeEach(() => {
        props = {
          name: testName
        };
      });

      describe('When component mounts', () => {
        let wrapper;

        beforeEach(() => {
          wrapper = shallow(<Icon {...props} />);
        });

        it('should not contain a <title> element', () => {
          expect(wrapper.contains(<title>{testName}</title>)).toBeFalsy();
          expect(wrapper.find('title').exists()).toBeFalsy();
        });
      });
    });
  });
});
