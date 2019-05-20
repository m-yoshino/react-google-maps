/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import React from "react"
import PropTypes from "prop-types"
import makeMarkerWithLabel from "markerwithlabel"
import ReactDOM from "react-dom"

import {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  construct,
} from "../../utils/MapChildHelper"

import { MAP, MARKER_CLUSTERER, MARKER_WITH_LABEL } from "../../constants"

/**
 * A wrapper around `MarkerWithLabel`
 *
 * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
 */
export class MarkerWithLabel extends React.PureComponent {
  static propTypes = {
    /**
     * It will be `MarkerWithLabel#labelContent`.
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    children: PropTypes.node,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelAnchor: PropTypes.object,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelClass: PropTypes.string,

    /**
     * For `MarkerWithLabel`. This is for native JS style object, so you may
     * expect some React shorthands for inline styles not working here.
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelStyle: PropTypes.object,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelVisible: PropTypes.bool,

    /**
     * For the 2nd argument of `MarkerCluster#addMarker`
     * @see https://github.com/mikesaidani/marker-clusterer-plus
     */
    noRedraw: PropTypes.bool,

    /**
     * @type Animation
     */
    defaultAnimation: _propTypes2.default.any,

    /**
     * @type boolean
     */
    defaultClickable: _propTypes2.default.bool,

    /**
     * @type string
     */
    defaultCursor: _propTypes2.default.string,

    /**
     * @type boolean
     */
    defaultDraggable: _propTypes2.default.bool,

    /**
     * @type string|Icon|Symbol
     */
    defaultIcon: _propTypes2.default.any,

    /**
     * @type string|MarkerLabel
     */
    defaultLabel: _propTypes2.default.any,

    /**
     * @type number
     */
    defaultOpacity: _propTypes2.default.number,

    /**
     * @type MarkerOptions
     */
    defaultOptions: _propTypes2.default.any,

    /**
     * @type MarkerPlace
     */
    defaultPlace: _propTypes2.default.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    defaultPosition: _propTypes2.default.any,

    /**
     * @type MarkerShape
     */
    defaultShape: _propTypes2.default.any,

    /**
     * @type string
     */
    defaultTitle: _propTypes2.default.string,

    /**
     * @type boolean
     */
    defaultVisible: _propTypes2.default.bool,

    /**
     * @type number
     */
    defaultZIndex: _propTypes2.default.number,

    /**
     * @type Animation
     */
    animation: _propTypes2.default.any,

    /**
     * @type boolean
     */
    clickable: _propTypes2.default.bool,

    /**
     * @type string
     */
    cursor: _propTypes2.default.string,

    /**
     * @type boolean
     */
    draggable: _propTypes2.default.bool,

    /**
     * @type string|Icon|Symbol
     */
    icon: _propTypes2.default.any,

    /**
     * @type string|MarkerLabel
     */
    label: _propTypes2.default.any,

    /**
     * @type number
     */
    opacity: _propTypes2.default.number,

    /**
     * @type MarkerOptions
     */
    options: _propTypes2.default.any,

    /**
     * @type MarkerPlace
     */
    place: _propTypes2.default.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    position: _propTypes2.default.any,

    /**
     * @type MarkerShape
     */
    shape: _propTypes2.default.any,

    /**
     * @type string
     */
    title: _propTypes2.default.string,

    /**
     * @type boolean
     */
    visible: _propTypes2.default.bool,

    /**
     * @type number
     */
    zIndex: _propTypes2.default.number,

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

  static defaultProps = {
    labelVisible: true,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  }

  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  constructor(props, context) {
    super(props, context)
    const NativeMarkerWithLabel = makeMarkerWithLabel(google.maps)
    const markerWithLabel = new NativeMarkerWithLabel()
    construct(
      MarkerWithLabel.propTypes,
      updaterMap,
      this.props,
      markerWithLabel
    )
    const markerClusterer = this.context[MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(markerWithLabel, !!this.props.noRedraw)
    } else {
      markerWithLabel.setMap(this.context[MAP])
    }
    this.state = {
      [MARKER_WITH_LABEL]: markerWithLabel,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER_WITH_LABEL], eventMap)
    const container = document.createElement(`div`)
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      React.Children.only(this.props.children),
      container
    )
    this.state[MARKER_WITH_LABEL].set(`labelContent`, container)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER_WITH_LABEL],
      eventMap,
      updaterMap,
      prevProps
    )
    if (this.props.children !== prevProps.children) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        React.Children.only(this.props.children),
        this.state[MARKER_WITH_LABEL].get("labelContent")
      )
    }
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const markerWithLabel = this.state[MARKER_WITH_LABEL]
    if (markerWithLabel) {
      const markerClusterer = this.context[MARKER_CLUSTERER]
      if (markerClusterer) {
        markerClusterer.removeMarker(markerWithLabel, !!this.props.noRedraw)
      }
      if (markerWithLabel.get("labelContent")) {
        ReactDOM.unmountComponentAtNode(markerWithLabel.get("labelContent"))
      }
      markerWithLabel.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   *
   * @type Animation
   * @public
   */
  getAnimation() {
    return this.state[_constants.MARKER_WITH_LABEL].getAnimation()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getClickable() {
    return this.state[_constants.MARKER_WITH_LABEL].getClickable()
  }

  /**
   *
   * @type string
   * @public
   */
  getCursor() {
    return this.state[_constants.MARKER_WITH_LABEL].getCursor()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getDraggable() {
    return this.state[_constants.MARKER_WITH_LABEL].getDraggable()
  }

  /**
   *
   * @type string|Icon|Symbol
   * @public
   */
  getIcon() {
    return this.state[_constants.MARKER_WITH_LABEL].getIcon()
  }

  /**
   *
   * @type MarkerLabel
   * @public
   */
  getLabel() {
    return this.state[_constants.MARKER_WITH_LABEL].getLabel()
  }

  /**
   *
   * @type number
   * @public
   */
  getOpacity() {
    return this.state[_constants.MARKER_WITH_LABEL].getOpacity()
  }

  /**
   *
   * @type MarkerPlace
   * @public
   */
  getPlace() {
    return this.state[_constants.MARKER_WITH_LABEL].getPlace()
  }

  /**
   *
   * @type LatLng
   * @public
   */
  getPosition() {
    return this.state[_constants.MARKER_WITH_LABEL].getPosition()
  }

  /**
   *
   * @type MarkerShape
   * @public
   */
  getShape() {
    return this.state[_constants.MARKER_WITH_LABEL].getShape()
  }

  /**
   *
   * @type string
   * @public
   */
  getTitle() {
    return this.state[_constants.MARKER_WITH_LABEL].getTitle()
  }

  /**
   *
   * @type boolean
   * @public
   */
  getVisible() {
    return this.state[_constants.MARKER_WITH_LABEL].getVisible()
  }

  /**
   *
   * @type number
   * @public
   */
  getZIndex() {
    return this.state[_constants.MARKER_WITH_LABEL].getZIndex()
  }
}

export default MarkerWithLabel

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed",
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
}

const updaterMap = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor(instance, labelAnchor) {
    instance.set(`labelAnchor`, labelAnchor)
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass(instance, labelClass) {
    instance.set(`labelClass`, labelClass)
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle(instance, labelStyle) {
    instance.set(`labelStyle`, labelStyle)
  },
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible(instance, labelVisible) {
    instance.set(`labelVisible`, labelVisible)
  },
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation)
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable)
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon)
  },
  label: function label(instance, _label) {
    instance.setLabel(_label)
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  place: function place(instance, _place) {
    instance.setPlace(_place)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape)
  },
  title: function title(instance, _title) {
    instance.setTitle(_title)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex)
  },
}
