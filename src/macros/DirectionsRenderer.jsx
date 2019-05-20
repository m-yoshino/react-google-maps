/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, DIRECTIONS_RENDERER } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[DIRECTIONS_RENDERER]"
}`

/**
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
export class DirectionsRenderer extends React.PureComponent {
  static propTypes = {
    /**
     * @type DirectionsResult
     */
    defaultDirections: _propTypes2.default.any,

    /**
     * @type DirectionsRendererOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type Node
     */
    defaultPanel: _propTypes2.default.any,

    /**
     * @type number
     */
    defaultRouteIndex: _propTypes2.default.number,

    /**
     * @type DirectionsResult
     */
    directions: _propTypes2.default.any,

    /**
     * @type DirectionsRendererOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type Node
     */
    panel: _propTypes2.default.any,

    /**
     * @type number
     */
    routeIndex: _propTypes2.default.number,

    __jscodeshiftPlaceholder__: null,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  constructor(props, context) {
    super(props, context)
    const directionsRenderer = new google.maps.DirectionsRenderer()
    construct(
      DirectionsRenderer.propTypes,
      updaterMap,
      this.props,
      directionsRenderer
    )
    directionsRenderer.setMap(this.context[MAP])
    this.state = {
      [DIRECTIONS_RENDERER]: directionsRenderer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[DIRECTIONS_RENDERER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[DIRECTIONS_RENDERER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const directionsRenderer = this.state[DIRECTIONS_RENDERER]
    if (directionsRenderer) {
      directionsRenderer.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * Returns the renderer's current set of directions.
   * @type DirectionsResult
   * @public
   */
  getDirections() {
    return this.state[_constants.DIRECTIONS_RENDERER].getDirections()
  }

  /**
   * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
   * @type Node<div>DirectionsResult
   * @public
   */
  getPanel() {
    return this.state[_constants.DIRECTIONS_RENDERER].getPanel()
  }

  /**
   * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
   * @type numberDirectionsRenderer
   * @public
   */
  getRouteIndex() {
    return this.state[_constants.DIRECTIONS_RENDERER].getRouteIndex()
  }
}

export default DirectionsRenderer

const eventMap = {
  onDirectionsChanged: "directions_changed",
}

const updaterMap = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel)
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex)
  },
}
