import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {TownCoordinates, TownType} from "../../__mocks__/const";

// jest.mocks(`../main/main.jsx`, () => `Main`);

const countPlaces = 312;

const placeCards = [{
  adults: 3,
  bedrooms: 2,
  cardName: `Wood and stone place`,
  cardRating: 4.6,
  cardRatingStars: `92%`,
  cardType: `Room`,
  coordinatesItem: [52.3909553943508, 4.85309666406198],
  description: `Text text....`,
  id: `1`,
  image: `img/apartment-01.jpg`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
  insideItems: [`wi-fi`, `bathroom`],
  premiumPlace: true,
  price: 100,
  user: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    pro: true,
  },
}];

const cityCoordinate = TownCoordinates[TownType.AMSTERDAM];

const titleClickHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      countPlaces = {countPlaces}
      placeCards = {placeCards}
      titleClickHandler = {titleClickHandler}
      cityCoordinate = {cityCoordinate}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
