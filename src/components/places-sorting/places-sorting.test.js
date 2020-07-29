import React from "react";
import renderer from "react-test-renderer";
import PlacesSorting from "./places-sorting.jsx";

const handleClick = () => {};
const isOpen = false;
const onSortClick = () => {};
const sortByName = `Popular`;

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlacesSorting
      handleClick = {handleClick}
      isOpen = {isOpen}
      onSortClick = {onSortClick}
      sortByName = {sortByName}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
