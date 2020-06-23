import React from "react";
import renderer from "react-test-renderer";
import PlaceCards from "./place-cards";

const placeCards = [
  {
    id: `1`,
    image: `img/apartment-01.jpg`,
    premiumPlace: true,
    price: 100,
    cardName: `Wood and stone place`,
    cardType: `Room`,
    cardRating: `80%`,
  },
  {
    id: `2`,
    image: `img/apartment-01.jpg`,
    premiumPlace: true,
    price: 120,
    cardName: `Wood and stone place`,
    cardType: `Room`,
    cardRating: `60%`,
  },
];

const titleClickHandler = () => {};

it(`Render PlaceCards`, () => {
  const tree = renderer
    .create(<PlaceCards
      placeCards = {placeCards}
      titleClickHandler = {titleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
