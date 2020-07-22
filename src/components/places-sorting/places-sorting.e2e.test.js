import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlacesSorting from "./places-sorting.jsx";

const sortByName = `Popular`;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should click on options`, () => {
  const onSortClick = jest.fn();
  const placesOptions = shallow(
      <PlacesSorting
        sortByName = {sortByName}
        onSortClick = {onSortClick}
      />
  );

  const titleOptions = placesOptions.find(`.places__option`);

  titleOptions.forEach((option) => {
    option.simulate(`click`, {preventDefault() {}});
  });

  expect(onSortClick.mock.calls.length).toBe(titleOptions.length);
});
