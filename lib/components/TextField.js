'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    padding: 5px 0px;\n'], ['\n    width: 100%;\n    padding: 5px 0px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 80%;\n    outline: none;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n'], ['\n    width: 80%;\n    outline: none;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2);

var TextField = function (_React$Component) {
    _inherits(TextField, _React$Component);

    function TextField() {
        _classCallCheck(this, TextField);

        return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
    }

    _createClass(TextField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                label = _props.label,
                name = _props.name,
                type = _props.type,
                onChange = _props.onChange;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    Label,
                    null,
                    label
                ),
                _react2.default.createElement(Input, {
                    type: type,
                    name: name,
                    onChange: onChange,
                    value: value })
            );
        }
    }]);

    return TextField;
}(_react2.default.Component);

exports.default = TextField;