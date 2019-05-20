/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, MARKER, ANCHOR, MARKER_CLUSTERER } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick"
  },
  "getInstanceFromComponent": "this.state[MARKER]"
}`

/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export class Marker extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    /**
     * For the 2nd argument of `MarkerCluster#addMarker`
     * @see https://github.com/mikesaidani/marker-clusterer-plus
     */
    noRedraw: PropTypes.bool,

    /**
     * @type Animation
     */
    defaultAnimation: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultClickable: _propTypes2.default.bool,

    /**
     * @type string
     */
    defaultCursor: _propTypes2.default.string,

    /**
     * @type boolean
     */
    defaultDraggable: _propTypes2.default.bool,

    /**
     * @type string|Icon|Symbol
     */
    defaultIcon: _propTypes2.default.any,

    /**
     * @type string|MarkerLabel
     */
    defaultLabel: _propTypes2.default.any,

    /**
     * @type number
     */
    defaultOpacity: _propTypes2.default.number,

    /**
     * @type MarkerOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type MarkerPlace
     */
    defaultPlace: _propTypes2.default.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    defaultPosition: _propTypes2.default.any,

    /**
     * @type MarkerShape
     */
    defaultShape: _propTypes2.default.any,

    /**
     * @type string
     */
    defaultTitle: _propTypes2.default.string,

    /**
     * @type boolean
     */
    defaultVisible: _propTypes2.default.bool,

    /**
     * @type number
     */
    defaultZIndex: _propTypes2.default.number,

    /**
     * @type Animation
     */
    animation: _propTypes2.default.any,

    /**
     * @type boolean
     */
    clickable: _propTypes2.default.bool,

    /**
     * @type string
     */
    cursor: _propTypes2.default.string,

    /**
     * @type boolean
     */
    draggable: _propTypes2.default.bool,

    /**
     * @type string|Icon|Symbol
     */
    icon: _propTypes2.default.any,

    /**
     * @type string|MarkerLabel
     */
    label: _propTypes2.default.any,

    /**
     * @type number
     */
    opacity: _propTypes2.default.number,

    /**
     * @type MarkerOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type MarkerPlace
     */
    place: _propTypes2.default.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    position: _propTypes2.default.any,

    /**
     * @type MarkerShape
     */
    shape: _propTypes2.default.any,

    /**
     * @type string
     */
    title: _propTypes2.default.string,

    /**
     * @type boolean
     */
    visible: _propTypes2.default.bool,

    /**
     * @type number
     */
    zIndex: _propTypes2.default.number,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  }

  static childContextTypes = {
    [ANCHOR]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  constructor(props, context) {
    super(props, context)
    const marker = new google.maps.Marker()
    construct(Marker.propTypes, updaterMap, this.props, marker)
    const markerClusterer = this.context[MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!this.props.noRedraw)
    } else {
      marker.setMap(this.context[MAP])
    }
    this.state = {
      [MARKER]: marker,
    }
  }

  getChildContext() {
    return {
      [ANCHOR]: this.context[ANCHOR] || this.state[MARKER],
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const marker = this.state[MARKER]
    if (marker) {
      const markerClusterer = this.context[MARKER_CLUSTERER]
      if (markerClusterer) {
        markerClusterer.removeMarker(marker, !!this.props.noRedraw)
      }
      marker.setMap(null)
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }

  /**
   *
   * @type Animation
   * @public
   */
  getAnimation() {
    return this.state[_constants.MARKER].getAnimation()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getClickable() {
    return this.state[_constants.MARKER].getClickable()
  }

  /**
   *
   * @type string
   * @public
   */
  getCursor() {
    return this.state[_constants.MARKER].getCursor()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[_constants.MARKER].getDraggable()
  }

  /**
   *
   * @type string|Icon|Symbol
   * @public
   */
  getIcon() {
    return this.state[_constants.MARKER].getIcon()
  }

  /**
   *
   * @type MarkerLabel
   * @public
   */
  getLabel() {
    return this.state[_constants.MARKER].getLabel()
  }

  /**
   *
   * @type number
   * @public
   */
  getOpacity() {
    return this.state[_constants.MARKER].getOpacity()
  }

  /**
   *
   * @type MarkerPlace
   * @public
   */
  getPlace() {
    return this.state[_constants.MARKER].getPlace()
  }

  /**
   *
   * @type LatLng
   * @public
   */
  getPosition() {
    return this.state[_constants.MARKER].getPosition()
  }

  /**
   *
   * @type MarkerShape
   * @public
   */
  getShape() {
    return this.state[_constants.MARKER].getShape()
  }

  /**
   *
   * @type string
   * @public
   */
  getTitle() {
    return this.state[_constants.MARKER].getTitle()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[_constants.MARKER].getVisible()
  }

  /**
   *
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[_constants.MARKER].getZIndex()
  }
}

export default Marker

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed",
}

const updaterMap = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation)
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable)
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon)
  },
  label: function label(instance, _label) {
    instance.setLabel(_label)
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  place: function place(instance, _place) {
    instance.setPlace(_place)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape)
  },
  title: function title(instance, _title) {
    instance.setTitle(_title)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex)
  },
}
