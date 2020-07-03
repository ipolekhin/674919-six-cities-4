const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.marker = () => {
  return {addTo: () => {
    return {};
  }};
};

leaflet.tileLayer = () => {
  return {addTo: () => {
    return {};
  }};
};

export default leaflet;
