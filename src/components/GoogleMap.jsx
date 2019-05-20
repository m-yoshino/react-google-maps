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
}

export const GoogleMap = Map

export default Map

const eventMap = {
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
}
