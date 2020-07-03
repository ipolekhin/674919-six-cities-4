import React, {createRef} from "react";
import leaflet from 'leaflet';

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30],
});

export default class Map extends React.PureComponent {
  constructor() {
    super();
    this._city = null;
    this._map = null;
    this._mapRef = createRef();
    this._offerCords = null;
    this._zoom = 12;
  }

  componentDidMount() {
    this._city = [52.38333, 4.9];
    this._offerCords = [52.3709553943508, 4.89309666406198];

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

    leaflet
      .marker(this._offerCords, {icon})
      .addTo(this._map);
  }

  componentWillUnmount() {
    this._city = null;
    this._city = null;
    this._map = null;
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
};

// Map.propTypes = {
// };
