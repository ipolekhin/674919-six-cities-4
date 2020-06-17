import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";

const countPlaces = 312;

const placeCards = [{
  id: `1`,
  image: `img/apartment-01.jpg`,
  premiumPlace: true,
  price: 100,
  cardName: `Wood and stone place`,
  cardType: `Room`,
  cardRating: `80%`,
}];

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(<MainScreen
      countPlaces = {countPlaces}
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
