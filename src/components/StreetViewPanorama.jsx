/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
import invariant from "invariant"
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP } from "../constants"

/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
export class StreetViewPanorama extends React.PureComponent {
  static propTypes = {
    /**
     * @type Array<StreetViewLink>
     */
    defaultLinks: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultMotionTracking: _propTypes2.default.bool,

    /**
     * @type StreetViewPanoramaOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type string
     */
    defaultPano: _propTypes2.default.string,

    /**
     * @type LatLng|LatLngLiteral
     */
    defaultPosition: _propTypes2.default.any,

    /**
     * @type StreetViewPov
     */
    defaultPov: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultVisible: _propTypes2.default.bool,

    /**
     * @type number
     */
    defaultZoom: _propTypes2.default.number,

    /**
     * @type Array<StreetViewLink>
     */
    links: _propTypes2.default.any,

    /**
     * @type boolean
     */
    motionTracking: _propTypes2.default.bool,

    /**
     * @type StreetViewPanoramaOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type string
     */
    pano: _propTypes2.default.string,

    /**
     * @type LatLng|LatLngLiteral
     */
    position: _propTypes2.default.any,

    /**
     * @type StreetViewPov
     */
    pov: _propTypes2.default.any,

    /**
     * @type boolean
     */
    visible: _propTypes2.default.bool,

    /**
     * @type number
     */
    zoom: _propTypes2.default.number,

    /**
     * function
     */
    onCloseClick: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  static childContextTypes = {
    [MAP]: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    invariant(
      !!this.context[MAP],
      `Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?`
    )
    construct(
      StreetViewPanorama.propTypes,
      updaterMap,
      this.props,
      this.context[MAP].getStreetView()
    )
  }

  getChildContext() {
    return {
      [MAP]: this.context[MAP].getStreetView(),
    }
  }

  componentDidMount() {
    componentDidMount(this, this.context[MAP].getStreetView(), eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.context[MAP].getStreetView(),
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const streetViewPanorama = this.context[MAP].getStreetView()
    if (streetViewPanorama) {
      streetViewPanorama.setVisible(false)
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }

  /**
   * Returns the set of navigation links for the Street View panorama.
   * @type Array<StreetViewLink>
   * @public
   */
  getLinks() {
    return this.context[_constants.MAP].getLinks()
  }

  /**
   * Returns the StreetViewLocation of the current panorama.
   * @type StreetViewLocation
   * @public
   */
  getLocation() {
    return this.context[_constants.MAP].getLocation()
  }

  /**
   * Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.
   * @type boolean
   * @public
   */
  getMotionTracking() {
    return this.context[_constants.MAP].getMotionTracking()
  }

  /**
   * Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.
   * @type string
   * @public
   */
  getPano() {
    return this.context[_constants.MAP].getPano()
  }

  /**
   * Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the `pano_changed` event.
   * @type StreetViewPovpano_changed
   * @public
   */
  getPhotographerPov() {
    return this.context[_constants.MAP].getPhotographerPov()
  }

  /**
   * Returns the current `LatLng` position for the Street View panorama.
   * @type LatLngLatLng
   * @public
   */
  getPosition() {
    return this.context[_constants.MAP].getPosition()
  }

  /**
   * Returns the current point of view for the Street View panorama.
   * @type StreetViewPov
   * @public
   */
  getPov() {
    return this.context[_constants.MAP].getPov()
  }

  /**
   * Returns the status of the panorama on completion of the `setPosition()` or `setPano()` request.
   * @type StreetViewStatussetPosition()setPano()
   * @public
   */
  getStatus() {
    return this.context[_constants.MAP].getStatus()
  }

  /**
   * Returns `true` if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
   * @type booleantrue
   * @public
   */
  getVisible() {
    return this.context[_constants.MAP].getVisible()
  }

  /**
   * Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
   * @type number
   * @public
   */
  getZoom() {
    return this.context[_constants.MAP].getZoom()
  }
}

export default StreetViewPanorama

const eventMap = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed",
  onCloseClick: "closeclick",
}

const updaterMap = {
  links: function links(instance, _links) {
    instance.setLinks(_links)
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom)
  },
}
