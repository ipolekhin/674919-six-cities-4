import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const handleHover = () => {};

const placeCard = {
  id: `1`,
  image: `img/apartment-01.jpg`,
  premiumPlace: true,
  price: 100,
  cardName: `Wood and stone place`,
  cardType: `Room`,
  cardRating: `80%`,
};

const titleClickHandler = () => {};

it(`Render PlaceCards`, () => {
  const tree = renderer
    .create(<PlaceCard
      placeCard = {placeCard}
      titleClickHandler = {titleClickHandler}
      handleHover = {handleHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
