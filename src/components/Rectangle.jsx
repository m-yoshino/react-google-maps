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

import { MAP, RECTANGLE } from "../constants"

/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
export class Rectangle extends React.PureComponent {
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
}

export default Rectangle

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
