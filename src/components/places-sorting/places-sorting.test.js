import React from "react";
import renderer from "react-test-renderer";
import PlacesSorting from "./places-sorting.jsx";

const sortByName = `Popular`;
const onSortClick = () => {};

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlacesSorting
      sortByName = {sortByName}
      onSortClick = {onSortClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
