import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`CitiesList e2e test`, () => {
  it(`On city click and change active item`, () => {
    const cities = [`Amsterdam`, `Dusseldorf`, `London`];
    const onCityClick = jest.fn();
    const onActiveItemChange = jest.fn();
    const citiesListComponent = mount(
        <CitiesList
          cities = {cities}
          onActiveItemChange = {onActiveItemChange}
          onCityClick = {onCityClick}
        />
    );

    const cityLink = citiesListComponent.find(`a.locations__item-link`);

    cityLink.at(1).simulate(`click`, {
      preventDefault: () => {}
    });

    expect(onCityClick.mock.calls.length).toBe(1);
    expect(onCityClick.mock.calls[0][0]).toBe(`Dusseldorf`);

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(`Dusseldorf`);
  });
});
