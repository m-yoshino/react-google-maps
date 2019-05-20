/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, POLYGON } from "../constants"

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
    "onClick": "click",
    "onDrag": "drag"
  },
  "getInstanceFromComponent": "this.state[POLYGON]"
}`

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
export class Polygon extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,

    /**
     * @type boolean
     */
    defaultDraggable: PropTypes.bool,

    /**
     * @type boolean
     */
    defaultEditable: PropTypes.bool,

    /**
     * @type PolygonOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
     */
    defaultPath: PropTypes.any,

    /**
     * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
     */
    defaultPaths: PropTypes.any,

    /**
     * @type boolean
     */
    defaultVisible: PropTypes.bool,

    /**
     * @type boolean
     */
    draggable: PropTypes.bool,

    /**
     * @type boolean
     */
    editable: PropTypes.bool,

    /**
     * @type PolygonOptions
     */
    options: PropTypes.any,

    /**
     * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
     */
    path: PropTypes.any,

    /**
     * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
     */
    paths: PropTypes.any,

    /**
     * @type boolean
     */
    visible: PropTypes.bool,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  constructor(props, context) {
    super(props, context)
    const polygon = new google.maps.Polygon()
    construct(Polygon.propTypes, updaterMap, this.props, polygon)
    polygon.setMap(this.context[MAP])
    this.state = {
      [POLYGON]: polygon,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[POLYGON], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[POLYGON],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const polygon = this.state[POLYGON]
    if (polygon) {
      polygon.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * Returns whether this shape can be dragged by the user.
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[POLYGON].getDraggable()
  }

  /**
   * Returns whether this shape can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[POLYGON].getEditable()
  }

  /**
   * Retrieves the first path.
   * @type MVCArray<LatLng>
   * @public
   */
  getPath() {
    return this.state[POLYGON].getPath()
  }

  /**
   * Retrieves the paths for this polygon.
   * @type MVCArray<MVCArray<LatLng>>
   * @public
   */
  getPaths() {
    return this.state[POLYGON].getPaths()
  }

  /**
   * Returns whether this poly is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[POLYGON].getVisible()
  }
}

export default Polygon

const eventMap = {}

const updaterMap = {
  draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },

  editable(instance, _editable) {
    instance.setEditable(_editable)
  },

  options(instance, _options) {
    instance.setOptions(_options)
  },

  path(instance, _path) {
    instance.setPath(_path)
  },

  paths(instance, _paths) {
    instance.setPaths(_paths)
  },

  visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}
