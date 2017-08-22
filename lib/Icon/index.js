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

var propTypes = {
  className: _propTypes2.default.string,
  description: _propTypes2.default.string,
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
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return _react2.default.createElement('path', prop.attrs);
    } else if (prop.name === 'circle') {
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return _react2.default.createElement('circle', prop.attrs);
    } else if (prop.name === 'rect') {
      delete prop.attrs.stroke;
      delete prop.attrs.fill;
      return _react2.default.createElement('rect', prop.attrs);
    } else if (prop.name === 'g') {
      return buildSvg(prop.childs);
    }
  });

  return svgElements;
}

var Icon = function Icon(_ref) {
  var className = _ref.className,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? 'icon' : _ref$description,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      name = _ref.name,
      role = _ref.role,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'medium' : _ref$size,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'none' : _ref$stroke,
      style = _ref.style;

  var icon = findIcon('' + name);
  var sizeNumber = void 0;

  if (size === 'small') {
    sizeNumber = '12';
  } else if (size === 'medium') {
    sizeNumber = '16';
  } else if (size === 'large') {
    sizeNumber = '24';
  }

  var props = {
    className: className,
    fill: fill,
    height: sizeNumber,
    name: '' + name,
    role: role,
    stroke: stroke,
    style: style,
    viewBox: icon.attrs.viewBox,
    width: sizeNumber
  };

  var content = icon ? buildSvg(icon.childs) : '';

  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      icon.title
    ),
    _react2.default.createElement(
      'desc',
      null,
      description
    ),
    content
  );
};

Icon.propTypes = propTypes;

exports.default = Icon;