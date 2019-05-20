/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, RECTANGLE } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick",
    "onDragEnd": "dragend",
    "onDragStart": "dragstart",
    "onMouseDown": "mousedown",
    "onMouseMove": "mousemove",
    "onMouseOut": "mouseout",
    "onMouseOver": "mouseover",
    "onMouseUp": "mouseup",
    "onRightClick": "rightclick",
    "onBoundsChanged": "bounds_changed",
    "onClick": "click",
    "onDrag": "drag"
  },
  "getInstanceFromComponent": "this.state[RECTANGLE]"
}`

/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
export class Rectangle extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    defaultBounds: PropTypes.any,

    /**
     * @type boolean
     */
    defaultDraggable: PropTypes.bool,

    /**
     * @type boolean
     */
    defaultEditable: PropTypes.bool,

    /**
     * @type RectangleOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type boolean
     */
    defaultVisible: PropTypes.bool,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    bounds: PropTypes.any,

    /**
     * @type boolean
     */
    draggable: PropTypes.bool,

    /**
     * @type boolean
     */
    editable: PropTypes.bool,

    /**
     * @type RectangleOptions
     */
    options: PropTypes.any,

    /**
     * @type boolean
     */
    visible: PropTypes.bool,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  constructor(props, context) {
    super(props, context)
    const rectangle = new google.maps.Rectangle()
    construct(Rectangle.propTypes, updaterMap, this.props, rectangle)
    rectangle.setMap(this.context[MAP])
    this.state = {
      [RECTANGLE]: rectangle,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[RECTANGLE], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[RECTANGLE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const rectangle = this.state[RECTANGLE]
    if (rectangle) {
      rectangle.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * Returns the bounds of this rectangle.
   * @type LatLngBounds
   * @public
   */
  getBounds() {
    return this.state[RECTANGLE].getBounds()
  }

  /**
   * Returns whether this rectangle can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[RECTANGLE].getDraggable()
  }

  /**
   * Returns whether this rectangle can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[RECTANGLE].getEditable()
  }

  /**
   * Returns whether this rectangle is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[RECTANGLE].getVisible()
  }
}

export default Rectangle

const eventMap = {}

const updaterMap = {
  bounds(instance, _bounds) {
    instance.setBounds(_bounds)
  },

  draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },

  editable(instance, _editable) {
    instance.setEditable(_editable)
  },

  options(instance, _options) {
    instance.setOptions(_options)
  },

  visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}
