import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list.jsx";

const cities = [`Amsterdam`, `Dusseldorf`];
const onCityClick = () => {};
const onActiveItemChange = () => {};

it(`Render CitiesList`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities = {cities}
          onActiveItemChange = {onActiveItemChange}
          onCityClick = {onCityClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
