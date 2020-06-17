import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      countPlaces = {countPlaces}
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
