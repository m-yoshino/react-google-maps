/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { SEARCH_BOX } from "../../constants"

/**
 * A wrapper around `google.maps.places.SearchBox` without the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
class SearchBox extends React.PureComponent {
  static displayName = "StandaloneSearchBox"

  static propTypes = {}

  state = {
    [SEARCH_BOX]: null,
  }

  componentDidMount() {
    invariant(
      google.maps.places,
      `Did you include "libraries=places" in the URL?`
    )
    const element = ReactDOM.findDOMNode(this)
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    const searchBox = new google.maps.places.SearchBox(
      element.querySelector("input") || element
    )
    construct(SearchBox.propTypes, updaterMap, this.props, searchBox)

    componentDidMount(this, searchBox, eventMap)
    this.setState({
      [SEARCH_BOX]: searchBox,
    })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[SEARCH_BOX],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export const StandaloneSearchBox = SearchBox

export default StandaloneSearchBox

const eventMap = {}

const updaterMap = {}
