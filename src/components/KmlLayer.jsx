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

import { MAP, KML_LAYER } from "../constants"

/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
export class KmlLayer extends React.PureComponent {
  static propTypes = {
    /**
     * function
     */
    onDefaultViewportChanged: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  constructor(props, context) {
    super(props, context)
    const kmlLayer = new google.maps.KmlLayer()
    construct(KmlLayer.propTypes, updaterMap, this.props, kmlLayer)
    kmlLayer.setMap(this.context[MAP])
    this.state = {
      [KML_LAYER]: kmlLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[KML_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[KML_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const kmlLayer = this.state[KML_LAYER]
    if (kmlLayer) {
      kmlLayer.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default KmlLayer

const eventMap = {
  onDefaultViewportChanged: "defaultviewport_changed",
}

const updaterMap = {}
