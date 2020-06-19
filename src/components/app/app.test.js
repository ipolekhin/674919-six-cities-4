import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

// jest.mock(`../main/main.jsx`, () => `Main`);

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

const titleClickHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      countPlaces = {countPlaces}
      placeCards = {placeCards}
      titleClickHandler = {titleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
