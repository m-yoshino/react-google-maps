"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.StreetViewPanorama = undefined

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

var _invariant = require("invariant")

var _invariant2 = _interopRequireDefault(_invariant)

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
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
var StreetViewPanorama = (exports.StreetViewPanorama = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(StreetViewPanorama, _React$PureComponent)

  function StreetViewPanorama(props, context) {
    ;(0, _classCallCheck3.default)(this, StreetViewPanorama)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        StreetViewPanorama.__proto__ ||
        (0, _getPrototypeOf2.default)(StreetViewPanorama)
      ).call(this, props, context)
    )

    ;(0, _invariant2.default)(
      !!_this.context[_constants.MAP],
      "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
    )
    ;(0, _MapChildHelper.construct)(
      StreetViewPanorama.propTypes,
      updaterMap,
      _this.props,
      _this.context[_constants.MAP].getStreetView()
    )
    return _this
  }

  ;(0, _createClass3.default)(StreetViewPanorama, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        return (0, _defineProperty3.default)(
          {},
          _constants.MAP,
          this.context[_constants.MAP].getStreetView()
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.context[_constants.MAP].getStreetView(),
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.context[_constants.MAP].getStreetView(),
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
        var streetViewPanorama = this.context[_constants.MAP].getStreetView()
        if (streetViewPanorama) {
          streetViewPanorama.setVisible(false)
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
  return StreetViewPanorama
})(
  _react2.default.PureComponent
)) /*
                                   * -----------------------------------------------------------------------------
                                   * This file is auto-generated from the corresponding file at `src/macros/`.
                                   * Please **DO NOT** edit this file directly when creating PRs.
                                   * -----------------------------------------------------------------------------
                                   */

StreetViewPanorama.propTypes = {
  /**
   * function
   */
  onCloseClick: _propTypes2.default.func,
}
StreetViewPanorama.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
StreetViewPanorama.childContextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = StreetViewPanorama

var eventMap = {
  onCloseClick: "closeclick",
}

var updaterMap = {}
