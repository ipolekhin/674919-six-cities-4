import React, {createRef} from "react";
import leaflet from 'leaflet';
import {coordinateActivePinType, currentCityType, placeCardsType, renderFunctionType} from "../../types/types";
import {MapProps, TownCoordinates} from "../../const";


const icon = leaflet.icon({
  iconUrl: MapProps.ICON_URL,
  iconSize: MapProps.ICON_SIZE,
});

const iconActive = leaflet.icon({
  iconUrl: MapProps.ICON_ACTIVE_URL,
  iconSize: MapProps.ICON_SIZE,
});

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = null;
    this._map = null;
    this._mapRef = createRef();
    this._offerCords = null;
    this._zoom = MapProps.ZOOM;
  }

  componentDidMount() {
    const {placeCards, currentCity, coordinateActivePin = null} = this.props;
    this._city = TownCoordinates[currentCity];
    this._offerCords = placeCards.map(({coordinatesItem}) => coordinatesItem);
    this._map = leaflet.map(this._mapRef.current, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._offerCords.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(this._map);
    });

    if (coordinateActivePin) {
      leaflet.marker(coordinateActivePin, {iconActive}).addTo(this._map);
    }
  }

  componentWillUnmount() {
    this._city = null;
    this._map = null;
    this._offerCords = null;
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
  coordinateActivePin: coordinateActivePinType,
  currentCity: currentCityType,
  placeCards: placeCardsType,
  renderMap: renderFunctionType,
};
