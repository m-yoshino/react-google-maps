/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, CIRCLE } from "../constants"

/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
export class Circle extends React.PureComponent {
  static propTypes = {
    /**
     * @type LatLng|LatLngLiteral
     */
    defaultCenter: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultDraggable: _propTypes2.default.bool,

    /**
     * @type boolean
     */
    defaultEditable: _propTypes2.default.bool,

    /**
     * @type CircleOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type number
     */
    defaultRadius: _propTypes2.default.number,

    /**
     * @type boolean
     */
    defaultVisible: _propTypes2.default.bool,

    /**
     * @type LatLng|LatLngLiteral
     */
    center: _propTypes2.default.any,

    /**
     * @type boolean
     */
    draggable: _propTypes2.default.bool,

    /**
     * @type boolean
     */
    editable: _propTypes2.default.bool,

    /**
     * @type CircleOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type number
     */
    radius: _propTypes2.default.number,

    /**
     * @type boolean
     */
    visible: _propTypes2.default.bool,

    /**
     * function
     */
    onDblClick: PropTypes.func,

    /**
     * function
     */
    onDragEnd: PropTypes.func,

    /**
     * function
     */
    onDragStart: PropTypes.func,

    /**
     * function
     */
    onMouseDown: PropTypes.func,

    /**
     * function
     */
    onMouseMove: PropTypes.func,

    /**
     * function
     */
    onMouseOut: PropTypes.func,

    /**
     * function
     */
    onMouseOver: PropTypes.func,

    /**
     * function
     */
    onMouseUp: PropTypes.func,

    /**
     * function
     */
    onRightClick: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  constructor(props, context) {
    super(props, context)
    const circle = new google.maps.Circle()
    construct(Circle.propTypes, updaterMap, this.props, circle)
    circle.setMap(this.context[MAP])
    this.state = {
      [CIRCLE]: circle,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[CIRCLE], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[CIRCLE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const circle = this.state[CIRCLE]
    if (circle) {
      circle.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * Gets the `LatLngBounds` of this Circle.
   * @type LatLngBoundsLatLngBounds
   * @public
   */
  getBounds() {
    return this.state[_constants.CIRCLE].getBounds()
  }

  /**
   * Returns the center of this circle.
   * @type LatLng
   * @public
   */
  getCenter() {
    return this.state[_constants.CIRCLE].getCenter()
  }

  /**
   * Returns whether this circle can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[_constants.CIRCLE].getDraggable()
  }

  /**
   * Returns whether this circle can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[_constants.CIRCLE].getEditable()
  }

  /**
   * Returns the radius of this circle (in meters).
   * @type number
   * @public
   */
  getRadius() {
    return this.state[_constants.CIRCLE].getRadius()
  }

  /**
   * Returns whether this circle is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[_constants.CIRCLE].getVisible()
  }
}

export default Circle

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onRadiusChanged: "radius_changed",
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

const updaterMap = {
  center: function center(instance, _center) {
    instance.setCenter(_center)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}
