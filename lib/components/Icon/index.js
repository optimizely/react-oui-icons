'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = undefined;
exports.findIcon = findIcon;
exports.getSvgData = getSvgData;
exports.svgShapes = svgShapes;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  className: _propTypes2.default.string,
  description: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.string,
  fillRule: _propTypes2.default.string,
  height: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string,
  style: _propTypes2.default.object,
  viewBox: _propTypes2.default.string,
  width: _propTypes2.default.string
};

function findIcon(name) {
  var iconsObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _icons2.default;

  var icon = iconsObj.filter(function (obj) {
    return obj.name === name;
  });

  if (icon.length === 0) {
    return false;
  } else if (icon.length > 1) {
    throw new Error('Multiple icons found...');
  } else {
    return icon[0];
  }
}

function getSvgData(iconName) {
  var name = findIcon(iconName);
  return name ? name.svgData : false;
}

function svgShapes(svgData) {
  var svgElements = Object.keys(svgData).filter(function (key) {
    return svgData[key];
  }).map(function (svgProp) {
    var data = svgData[svgProp];

    if (svgProp === 'circles') {
      return data.map(function (circle) {
        var circleProps = {
          cx: circle.cx,
          cy: circle.cy,
          r: circle.r
        };

        return _react2.default.createElement('circle', circleProps);
      });
    } else if (svgProp === 'ellipses') {
      return data.map(function (ellipse) {
        var ellipseProps = {
          cx: ellipse.cx,
          cy: ellipse.cy,
          rx: ellipse.rx,
          ry: ellipse.ry
        };

        return _react2.default.createElement('ellipse', ellipseProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path) {
        return _react2.default.createElement('path', { d: path.d });
      });
    }

    return '';
  });

  return svgElements;
}

var Icon = function Icon(_ref) {
  var className = _ref.className,
      description = _ref.description,
      fill = _ref.fill,
      fillRule = _ref.fillRule,
      name = _ref.name,
      role = _ref.role,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'small' : _ref$size,
      style = _ref.style;

  var icon = findIcon('' + name);
  if (size === 'small') {
    size = '16';
  } else if (size === 'medium') {
    size = '24';
  }
  var props = {
    className: className,
    fill: fill,
    fillRule: fillRule,
    height: size,
    name: '' + name,
    role: role,
    style: style,
    viewBox: icon.viewBox,
    width: size
  };

  var svgContent = icon ? svgShapes(icon.svgData) : '';

  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'title',
      null,
      description
    ),
    svgContent
  );
};

Icon.propTypes = propTypes;

exports.icons = _icons2.default;
exports.default = Icon;