import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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

it(`Render MainScreen`, () => {
  const tree = renderer
    .create(<Main
      countPlaces = {countPlaces}
      placeCards = {placeCards}
      titleClickHandler = {titleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
