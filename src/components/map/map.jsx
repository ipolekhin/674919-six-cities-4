import React, {createRef} from "react";
import leaflet from 'leaflet';
import {placeCardsType} from "../../types/types";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30],
});

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = null;
    this._map = null;
    this._mapRef = createRef();
    this._offerCords = null;
    this._zoom = 12;
  }

  componentDidMount() {
    const {placeCards} = this.props;
    this._city = [52.38333, 4.9];
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

    this._offerCords.map((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(this._map);
    });
  }

  componentWillUnmount() {
    this._city = null;
    this._city = null;
    this._offerCords = null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="cities__right-section">
          <section className="cities__map map" ref={this._mapRef}></section>
        </div>
      </React.Fragment>
    );
  }
}

Map.propTypes = {
  placeCards: placeCardsType,
};
