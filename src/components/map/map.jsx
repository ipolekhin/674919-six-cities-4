import React, {createRef} from "react";
import leaflet from 'leaflet';
import {currentCityIdType, currentCityType, placeCardsType, renderFunctionType} from "../../types/types";
import {MapProps, TownCoordinates} from "../../const";


const LeafIcon = leaflet.Icon.extend({
  options: {
    iconSize: MapProps.ICON_SIZE,
  }
});

const defaultIcon = new LeafIcon({iconUrl: MapProps.ICON_URL});
const orangeIcon = new LeafIcon({iconUrl: MapProps.ICON_ACTIVE_URL});

leaflet.icon = function (options) {
  return new leaflet.Icon(options);
};

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = null;
    this._map = null;
    this._mapRef = createRef();
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

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._renderMarkers();
  }

  componentDidUpdate() {
    this._renderMarkers();
  }

  componentWillUnmount() {
    this._city = null;
    this._map = null;
    this._offerProps = null;
  }

  _renderMarkers() {
    const {currentCityId = null} = this.props;
    this._offerProps.forEach((offerProp) => {
      if (currentCityId === offerProp[0]) {
        leaflet
          .marker(offerProp[1], {icon: orangeIcon})
          .addTo(this._map);
      } else {
        leaflet
          .marker(offerProp[1], {icon: defaultIcon})
          .addTo(this._map);
      }
    });
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
  currentCityId: currentCityIdType,
  currentCity: currentCityType,
  placeCards: placeCardsType,
  renderMap: renderFunctionType,
};
