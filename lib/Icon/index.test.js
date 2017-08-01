'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Icon component size prop is equal to medium', function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(_Icon2.default, {
    name: 'ab',
    description: 'icon description',
    size: 'medium'
  }));

  expect(component.props().size).toEqual('medium');
});

test('Icon component name prop is equal to ab', function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(_Icon2.default, {
    name: 'ab',
    description: 'icon description',
    size: 'medium'
  }));

  expect(component.props().name).toEqual('ab');
});

test('Icon component description prop is equal to \'icon description\'', function () {
  var component = (0, _enzyme.mount)(_react2.default.createElement(_Icon2.default, {
    name: 'ab',
    description: 'icon description',
    size: 'medium'
  }));

  expect(component.props().description).toEqual('icon description');
});