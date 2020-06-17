import React from "react";
import renderer from "react-test-renderer";
import PlaceCards from "./place-cards";

const placeCards = [{
  id: `1`,
  image: `img/apartment-01.jpg`,
  premiumPlace: true,
  price: 100,
  cardName: `Wood and stone place`,
  cardType: `Room`,
  cardRating: `80%`,
}];

it(`Render PlaceCards`, () => {
  const tree = renderer
    .create(<PlaceCards
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
