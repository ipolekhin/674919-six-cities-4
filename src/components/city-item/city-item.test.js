import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./city-item.jsx";

const city = `Amsterdam`;
const currentCity = `Amsterdam`;
const onCityClick = () => {};
const onActiveItemChange = () => {};

describe(`CityItem Test`, () => {
  it(`Render CityItem`, () => {
    const tree = renderer
      .create(
          <CityItem
            city={city}
            currentCity={currentCity}
            onActiveItemChange={onActiveItemChange}
            onCityClick={onCityClick}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
