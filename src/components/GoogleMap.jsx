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
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
export class Map extends React.PureComponent {
  static displayName = "GoogleMap"

  static propTypes = {
    /**
     * @type LatLng|LatLngLiteral
     */
    defaultCenter: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultClickableIcons: _propTypes2.default.bool,

    /**
     * @type number
     */
    defaultHeading: _propTypes2.default.number,

    /**
     * @type MapTypeId|string
     */
    defaultMapTypeId: _propTypes2.default.any,

    /**
     * @type MapOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type StreetViewPanorama
     */
    defaultStreetView: _propTypes2.default.any,

    /**
     * @type number
     */
    defaultTilt: _propTypes2.default.number,

    /**
     * @type number
     */
    defaultZoom: _propTypes2.default.number,

    /**
     * @type LatLng|LatLngLiteral
     */
    center: _propTypes2.default.any,

    /**
     * @type boolean
     */
    clickableIcons: _propTypes2.default.bool,

    /**
     * @type number
     */
    heading: _propTypes2.default.number,

    /**
     * @type MapTypeId|string
     */
    mapTypeId: _propTypes2.default.any,

    /**
     * @type MapOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type StreetViewPanorama
     */
    streetView: _propTypes2.default.any,

    /**
     * @type number
     */
    tilt: _propTypes2.default.number,

    /**
     * @type number
     */
    zoom: _propTypes2.default.number,

    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
     * @type Array<[id:string, mapType:MapType|*]>
     */
    defaultExtraMapTypes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),

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
    onMapTypeIdChanged: PropTypes.func,

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
    onRightClick: PropTypes.func,

    /**
     * function
     */
    onTilesLoaded: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  fitBounds(...args) {
    return this.context[MAP].fitBounds(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panBy(...args) {
    return this.context[MAP].panBy(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panTo(...args) {
    return this.context[MAP].panTo(...args)
  }

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   * @public
   */
  panToBounds(...args) {
    return this.context[MAP].panToBounds(...args)
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
   */
  constructor(props, context) {
    super(props, context)
    invariant(
      !!this.context[MAP],
      `Did you wrap <GoogleMap> component with withGoogleMap() HOC?`
    )
    construct(GoogleMap.propTypes, updaterMap, this.props, this.context[MAP])
  }

  componentDidMount() {
    componentDidMount(this, this.context[MAP], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(this, this.context[MAP], eventMap, updaterMap, prevProps)
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }

  /**
   * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
   * @type LatLngBoundsnullundefined
   * @public
   */
  getBounds() {
    return this.context[_constants.MAP].getBounds()
  }

  /**
   * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
   * @type LatLngLatLngLatLng
   * @public
   */
  getCenter() {
    return this.context[_constants.MAP].getCenter()
  }

  /**
   * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
   * @type boolean
   * @public
   */
  getClickableIcons() {
    return this.context[_constants.MAP].getClickableIcons()
  }

  /**
   *
   * @type Element
   * @public
   */
  getDiv() {
    return this.context[_constants.MAP].getDiv()
  }

  /**
   * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
   * @type number
   * @public
   */
  getHeading() {
    return this.context[_constants.MAP].getHeading()
  }

  /**
   *
   * @type MapTypeId|string
   * @public
   */
  getMapTypeId() {
    return this.context[_constants.MAP].getMapTypeId()
  }

  /**
   * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
   * @type ProjectionProjectionprojection_changed
   * @public
   */
  getProjection() {
    return this.context[_constants.MAP].getProjection()
  }

  /**
   * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
   * @type StreetViewPanoramaStreetViewPanoramasetStreetView()streetViewControl
   * @public
   */
  getStreetView() {
    return this.context[_constants.MAP].getStreetView()
  }

  /**
   * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
   * @type number045satellitehybridsetTiltsetTilt
   * @public
   */
  getTilt() {
    return this.context[_constants.MAP].getTilt()
  }

  /**
   *
   * @type number
   * @public
   */
  getZoom() {
    return this.context[_constants.MAP].getZoom()
  }
}

export const GoogleMap = Map

export default Map

const eventMap = {
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed",
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
}

const updaterMap = {
  extraMapTypes(instance, extra) {
    extra.forEach(it => instance.mapTypes.set(...it))
  },
  center: function center(instance, _center) {
    instance.setCenter(_center)
  },
  clickableIcons: function clickableIcons(instance, _clickableIcons) {
    instance.setClickableIcons(_clickableIcons)
  },
  heading: function heading(instance, _heading) {
    instance.setHeading(_heading)
  },
  mapTypeId: function mapTypeId(instance, _mapTypeId) {
    instance.setMapTypeId(_mapTypeId)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  streetView: function streetView(instance, _streetView) {
    instance.setStreetView(_streetView)
  },
  tilt: function tilt(instance, _tilt) {
    instance.setTilt(_tilt)
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom)
  },
}
