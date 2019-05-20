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

import { MAP, POLYLINE } from "../constants"

/**
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */
export class Polyline extends React.PureComponent {
  static propTypes = {
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
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  constructor(props, context) {
    super(props, context)
    const polyline = new google.maps.Polyline()
    construct(Polyline.propTypes, updaterMap, this.props, polyline)
    polyline.setMap(this.context[MAP])
    this.state = {
      [POLYLINE]: polyline,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[POLYLINE], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[POLYLINE],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const polyline = this.state[POLYLINE]
    if (polyline) {
      polyline.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default Polyline

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
}

const updaterMap = {}
