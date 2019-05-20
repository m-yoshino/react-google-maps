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

import { MAP, POLYGON } from "../constants"

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
export class Polygon extends React.PureComponent {
  static propTypes = {
    /**
     * @type boolean
     */
    defaultDraggable: _propTypes2.default.bool,

    /**
     * @type boolean
     */
    defaultEditable: _propTypes2.default.bool,

    /**
     * @type PolygonOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
     */
    defaultPath: _propTypes2.default.any,

    /**
     * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
     */
    defaultPaths: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultVisible: _propTypes2.default.bool,

    /**
     * @type boolean
     */
    draggable: _propTypes2.default.bool,

    /**
     * @type boolean
     */
    editable: _propTypes2.default.bool,

    /**
     * @type PolygonOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
     */
    path: _propTypes2.default.any,

    /**
     * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
     */
    paths: _propTypes2.default.any,

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
    return this.state[_constants.POLYGON].getDraggable()
  }

  /**
   * Returns whether this shape can be edited by the user.
   * @type boolean
   * @public
   */
  getEditable() {
    return this.state[_constants.POLYGON].getEditable()
  }

  /**
   * Retrieves the first path.
   * @type MVCArray<LatLng>
   * @public
   */
  getPath() {
    return this.state[_constants.POLYGON].getPath()
  }

  /**
   * Retrieves the paths for this polygon.
   * @type MVCArray<MVCArray<LatLng>>
   * @public
   */
  getPaths() {
    return this.state[_constants.POLYGON].getPaths()
  }

  /**
   * Returns whether this poly is visible on the map.
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[_constants.POLYGON].getVisible()
  }
}

export default Polygon

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
  onClick: "click",
  onDrag: "drag",
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
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  path: function path(instance, _path) {
    instance.setPath(_path)
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}
