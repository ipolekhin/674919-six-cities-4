import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesItem from "./city-item.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`City list`, () => {
  it(`On city click and change active item`, () => {
    const city = `London`;
    const onCityClick = jest.fn();
    const onActiveItemChange = jest.fn();
    const cityItemComponent = shallow(
        <CitiesItem
          city = {city}
          onActiveItemChange = {onActiveItemChange}
          onCityClick = {onCityClick}
        />
    );

    const cityLink = cityItemComponent.find(`a.locations__item-link`);

    cityLink.simulate(`click`, {
      preventDefault: () => {}
    });

    expect(onCityClick.mock.calls.length).toBe(1);
    expect(onCityClick.mock.calls[0][0]).toBe(`London`);

    expect(onActiveItemChange.mock.calls.length).toBe(1);
    expect(onActiveItemChange.mock.calls[0][0]).toBe(`London`);
  });
});
