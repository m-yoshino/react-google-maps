/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, HEATMAP_LAYER } from "../../constants"

/**
 * A wrapper around `google.maps.visualization.HeatmapLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
export class HeatmapLayer extends React.PureComponent {
  static propTypes = {
    /**
     * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
     */
    defaultData: _propTypes2.default.any,

    /**
     * @type HeatmapLayerOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
     */
    data: _propTypes2.default.any,

    /**
     * @type HeatmapLayerOptions
     */
    options: _propTypes2.default.any,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  constructor(props, context) {
    super(props, context)
    invariant(
      google.maps.visualization,
      `Did you include "libraries=visualization" in the URL?`
    )
    const heatmapLayer = new google.maps.visualization.HeatmapLayer()
    construct(HeatmapLayer.propTypes, updaterMap, this.props, heatmapLayer)
    heatmapLayer.setMap(this.context[MAP])
    this.state = {
      [HEATMAP_LAYER]: heatmapLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[HEATMAP_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[HEATMAP_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const heatmapLayer = this.state[HEATMAP_LAYER]
    if (heatmapLayer) {
      heatmapLayer.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * Returns the data points currently displayed by this heatmap.
   * @type MVCArray<LatLng|WeightedLocation>
   * @public
   */
  getData() {
    return this.state[_constants.HEATMAP_LAYER].getData()
  }
}

export default HeatmapLayer

const eventMap = {}

const updaterMap = {
  data: function data(instance, _data) {
    instance.setData(_data)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
}
