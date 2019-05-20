"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Polygon = undefined

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = require("../utils/MapChildHelper")

var _constants = require("../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Polygon = (exports.Polygon = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Polygon, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  function Polygon(props, context) {
    ;(0, _classCallCheck3.default)(this, Polygon)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).call(
        this,
        props,
        context
      )
    )

    var polygon = new google.maps.Polygon()
    ;(0, _MapChildHelper.construct)(
      Polygon.propTypes,
      updaterMap,
      _this.props,
      polygon
    )
    polygon.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)({}, _constants.POLYGON, polygon)
    return _this
  }

  ;(0, _createClass3.default)(Polygon, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.POLYGON],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.POLYGON],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var polygon = this.state[_constants.POLYGON]
        if (polygon) {
          polygon.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },
    },
  ])
  return Polygon
})(_react2.default.PureComponent))

Polygon.propTypes = {
  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,
}
Polygon.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Polygon

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
}

var updaterMap = {}
