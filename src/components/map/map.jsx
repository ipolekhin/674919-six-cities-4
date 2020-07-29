import React, {createRef} from "react";
import leaflet from 'leaflet';
import {activeOfferIdType, currentCityType, placeCardsType, renderFunctionType} from "../../types/types";
import {MapProps, TownCoordinates} from "../../const";


// 111
const iconsAll = {
  default: leaflet.icon({
    iconUrl: MapProps.ICON_URL,
    iconSize: MapProps.ICON_SIZE,
  }),
  orangeIcons: leaflet.icon({
    iconUrl: MapProps.ICON_ACTIVE_URL,
    iconSize: MapProps.ICON_SIZE,
  })
};

// 222 leaflet.icon({
//   iconUrl: MapProps.ICON_URL,
//   iconSize: MapProps.ICON_SIZE,
// });

// leaflet
//   .marker(offerProp[1], {icon: defaultIcon})
//   .addTo(this._map);

// const LeafIcon = leaflet.Icon.extend({
//   options: {
//     iconSize: MapProps.ICON_SIZE,
//   }
// });
//
// const defaultIcon = new LeafIcon({iconUrl: MapProps.ICON_URL});
// const orangeIcon = new LeafIcon({iconUrl: MapProps.ICON_ACTIVE_URL});

// leaflet.icon = function (options) {
//   return new leaflet.Icon(options);
// };
// console.log(leaflet);

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = null;
    this._map = null;
    this._mapRef = createRef();
    this._markers = null;
    this._offerProps = null;
    this._zoom = MapProps.ZOOM;
  }

  componentDidMount() {
    const {currentCity, placeCards} = this.props;
    this._city = TownCoordinates[currentCity];
    this._offerProps = placeCards.map(({id, coordinatesItem}) => [id, coordinatesItem]);
    this._map = leaflet.map(this._mapRef.current, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    // const bbb = leaflet;
    // console.log(bbb);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._renderMarkers();
  }

  componentDidUpdate() {
    // this._map.removeLayer(iconsAll.default);
    this._clearAllLayers();
    this._renderMarkers();

    // this._offerProps.forEach((offerProp) => {
    //   leaflet.removeLayer(offerProp);
    // });
  }

  componentWillUnmount() {
    this._city = null;
    this._map = null;
    this._markers = null;
    this._offerProps = null;
  }

  _renderMarkers() {
    const {activeOfferId = null} = this.props;
    // .marker(offerProp[1], {icon: orangeIcon})
    // .marker(offerProp[1], {icon: defaultIcon})
    // .marker(offerProp[1], {icon: iconsAll.default})
    // .marker(offerProp[1], {icon: iconsAll.orangeIcons})
    this._markers = this._offerProps
      .map((offerProp) => (
        leaflet
          .marker(offerProp[1], {icon: activeOfferId === offerProp[0] ? iconsAll.orangeIcons : iconsAll.default})
          .addTo(this._map)
      ));

    // this._markers = this._offerProps.map((offerProp) => {
    //   if (activeOfferId === offerProp[0]) {
    //     leaflet
    //       .marker(offerProp[1], {icon: iconsAll.orangeIcons})
    //       .addTo(this._map);
    //   } else {
    //     leaflet
    //       .marker(offerProp[1], {icon: iconsAll.default})
    //       .addTo(this._map);
    //   }
    //   // leaflet
    //   //   .marker(offerProp[1], {icon: iconsAll.default})
    //   //   .addTo(this._map);
    // });
  }

  _clearAllLayers() {
    this._markers.forEach((marker) => marker.remove());
    this._markers = null;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderMap(this._mapRef)}
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  activeOfferId: activeOfferIdType,
  currentCity: currentCityType,
  placeCards: placeCardsType,
  renderMap: renderFunctionType,
};
