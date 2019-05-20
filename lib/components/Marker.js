"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Marker = undefined

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

var _Marker$contextTypes /*
                           * -----------------------------------------------------------------------------
                           * This file is auto-generated from the corresponding file at `src/macros/`.
                           * Please **DO NOT** edit this file directly when creating PRs.
                           * -----------------------------------------------------------------------------
                           */
/* global google */

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
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
var Marker = (exports.Marker = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Marker, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  function Marker(props, context) {
    ;(0, _classCallCheck3.default)(this, Marker)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Marker.__proto__ || (0, _getPrototypeOf2.default)(Marker)).call(
        this,
        props,
        context
      )
    )

    var marker = new google.maps.Marker()
    ;(0, _MapChildHelper.construct)(
      Marker.propTypes,
      updaterMap,
      _this.props,
      marker
    )
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!_this.props.noRedraw)
    } else {
      marker.setMap(_this.context[_constants.MAP])
    }
    _this.state = (0, _defineProperty3.default)({}, _constants.MARKER, marker)
    return _this
  }

  ;(0, _createClass3.default)(Marker, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        return (0, _defineProperty3.default)(
          {},
          _constants.ANCHOR,
          this.context[_constants.ANCHOR] || this.state[_constants.MARKER]
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.MARKER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.MARKER],
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
        var marker = this.state[_constants.MARKER]
        if (marker) {
          var markerClusterer = this.context[_constants.MARKER_CLUSTERER]
          if (markerClusterer) {
            markerClusterer.removeMarker(marker, !!this.props.noRedraw)
          }
          marker.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },
    },
  ])
  return Marker
})(_react2.default.PureComponent))

Marker.propTypes = {
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes2.default.bool,

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
Marker.contextTypes = ((_Marker$contextTypes = {}),
(0, _defineProperty3.default)(
  _Marker$contextTypes,
  _constants.MAP,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _Marker$contextTypes,
  _constants.MARKER_CLUSTERER,
  _propTypes2.default.object
),
_Marker$contextTypes)
Marker.childContextTypes = (0, _defineProperty3.default)(
  {},
  _constants.ANCHOR,
  _propTypes2.default.object
)
exports.default = Marker

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
}

var updaterMap = {}
