'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Icon/> Component', function () {
  it('size prop is equal to medium', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab',
      size: 'large'
    }));
    expect(component.props().height).toEqual('24');
  });

  it('name prop is equal to ab', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab'
    }));
    expect(component.props().name).toEqual('ab');
  });

  it('color prop is equal tomato', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab',
      size: 'medium',
      stroke: 'tomato'
    }));
    expect(component.props().stroke).toEqual('tomato');
  });

  it('style is equal to obj with color style', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab',
      size: 'medium',
      style: { 'color': 'tomato' }
    }));
    expect(component.props().style).toEqual({ 'color': 'tomato' });
  });

  it('role prop is equal to ab icon', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab',
      size: 'medium',
      role: 'ab icon'
    }));
    expect(component.props().role).toEqual('ab icon');
  });

  it('when description provided render <desc>{description}</desc>', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab',
      description: 'ab'
    }));
    expect(component.contains(_react2.default.createElement(
      'desc',
      null,
      'ab'
    ))).toEqual(true);
  });

  it('will contain <title> with name of the icon', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Icon2.default, {
      name: 'ab'
    }));
    expect(component.contains(_react2.default.createElement(
      'title',
      null,
      'ab'
    ))).toEqual(true);
  });
});