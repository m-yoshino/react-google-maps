"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.MarkerWithLabel = undefined

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

var _MarkerWithLabel$cont /*
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

var _markerwithlabel = require("markerwithlabel")

var _markerwithlabel2 = _interopRequireDefault(_markerwithlabel)

var _reactDom = require("react-dom")

var _reactDom2 = _interopRequireDefault(_reactDom)

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `MarkerWithLabel`
 *
 * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
 */
var MarkerWithLabel = (exports.MarkerWithLabel = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(MarkerWithLabel, _React$PureComponent)

  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  function MarkerWithLabel(props, context) {
    ;(0, _classCallCheck3.default)(this, MarkerWithLabel)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        MarkerWithLabel.__proto__ ||
        (0, _getPrototypeOf2.default)(MarkerWithLabel)
      ).call(this, props, context)
    )

    var NativeMarkerWithLabel = (0, _markerwithlabel2.default)(google.maps)
    var markerWithLabel = new NativeMarkerWithLabel()
    ;(0, _MapChildHelper.construct)(
      MarkerWithLabel.propTypes,
      updaterMap,
      _this.props,
      markerWithLabel
    )
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(markerWithLabel, !!_this.props.noRedraw)
    } else {
      markerWithLabel.setMap(_this.context[_constants.MAP])
    }
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.MARKER_WITH_LABEL,
      markerWithLabel
    )
    return _this
  }

  ;(0, _createClass3.default)(MarkerWithLabel, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.MARKER_WITH_LABEL],
          eventMap
        )
        var container = document.createElement("div")
        _reactDom2.default.unstable_renderSubtreeIntoContainer(
          this,
          _react2.default.Children.only(this.props.children),
          container
        )
        this.state[_constants.MARKER_WITH_LABEL].set("labelContent", container)
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.MARKER_WITH_LABEL],
          eventMap,
          updaterMap,
          prevProps
        )
        if (this.props.children !== prevProps.children) {
          _reactDom2.default.unstable_renderSubtreeIntoContainer(
            this,
            _react2.default.Children.only(this.props.children),
            this.state[_constants.MARKER_WITH_LABEL].get("labelContent")
          )
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var markerWithLabel = this.state[_constants.MARKER_WITH_LABEL]
        if (markerWithLabel) {
          var markerClusterer = this.context[_constants.MARKER_CLUSTERER]
          if (markerClusterer) {
            markerClusterer.removeMarker(markerWithLabel, !!this.props.noRedraw)
          }
          if (markerWithLabel.get("labelContent")) {
            _reactDom2.default.unmountComponentAtNode(
              markerWithLabel.get("labelContent")
            )
          }
          markerWithLabel.setMap(null)
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
  return MarkerWithLabel
})(_react2.default.PureComponent))

MarkerWithLabel.propTypes = {
  /**
   * It will be `MarkerWithLabel#labelContent`.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  children: _propTypes2.default.node,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: _propTypes2.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: _propTypes2.default.string,

  /**
   * For `MarkerWithLabel`. This is for native JS style object, so you may
   * expect some React shorthands for inline styles not working here.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: _propTypes2.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: _propTypes2.default.bool,

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
MarkerWithLabel.defaultProps = {
  labelVisible: true,
}
MarkerWithLabel.contextTypes = ((_MarkerWithLabel$cont = {}),
(0, _defineProperty3.default)(
  _MarkerWithLabel$cont,
  _constants.MAP,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _MarkerWithLabel$cont,
  _constants.MARKER_CLUSTERER,
  _propTypes2.default.object
),
_MarkerWithLabel$cont)
exports.default = MarkerWithLabel

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

var updaterMap = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: function labelAnchor(instance, _labelAnchor) {
    instance.set("labelAnchor", _labelAnchor)
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: function labelClass(instance, _labelClass) {
    instance.set("labelClass", _labelClass)
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: function labelStyle(instance, _labelStyle) {
    instance.set("labelStyle", _labelStyle)
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: function labelVisible(instance, _labelVisible) {
    instance.set("labelVisible", _labelVisible)
  },
}
