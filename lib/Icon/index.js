'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _icons = require('./icons.json');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  className: _propTypes2.default.string,
  description: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.string,
  fillRule: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string,
  size: _propTypes2.default.string,
  style: _propTypes2.default.object,
  viewBox: _propTypes2.default.string
};

function findIcon(name) {
  var iconsObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _icons2.default;

  var icon = iconsObj.filter(function (obj) {
    return obj.title.split(' ').join('-') === name;
  });
  if (icon.length > 1) throw new Error('More that one icons was found with same name');
  var iconObj = icon.length === 0 ? false : icon[0];
  return iconObj;
}

function buildSvg(iconData) {
  var svgElements = iconData.map(function (prop, index) {
    if (prop.name === 'path') {
      return _react2.default.createElement('path', prop.attrs);
    } else if (prop.name === 'circle') {
      return _react2.default.createElement('circle', prop.attrs);
    } else if (prop.name === 'rect') {
      return _react2.default.createElement('rect', prop.attrs);
    } else if (prop.name === 'g') {
      return buildSvg(prop.childs);
    }
  });

  return svgElements;
}

var Icon = function Icon(_ref) {
  var className = _ref.className,
      description = _ref.description,
      name = _ref.name,
      role = _ref.role,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      stroke = _ref.stroke,
      style = _ref.style,
      other = _objectWithoutProperties(_ref, ['className', 'description', 'name', 'role', 'size', 'stroke', 'style']);

  var Svg = _glamorous2.default.svg({
    'stroke': 'black',
    'fill': 'none',
    ':hover': {
      'stroke': 'red'
    }
  });

  var icon = findIcon('' + name);
  var props = {
    className: className,
    height: size,
    name: '' + name,
    role: role,
    stroke: stroke,
    style: style,
    viewBox: icon.viewBox,
    width: size,
    other: other
  };

  var content = icon ? buildSvg(icon.childs) : '';

  return _react2.default.createElement(
    Svg,
    props,
    _react2.default.createElement(
      'title',
      null,
      icon.title
    ),
    content
  );
};

Icon.propTypes = propTypes;

exports.default = Icon;