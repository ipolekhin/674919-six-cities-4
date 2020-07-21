import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const currentCity = `Amsterdam`;

const offersOfTown = [{
  adults: 3,
  townName: `Amsterdam`,
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
  reviews: [
    {
      date: new Date(2020, 7, 17),
      id: `01`,
      rating: `92%`,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      userAvatar: `img/avatar-max.jpg`,
      userName: `Max`,
    }
  ],
  user: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    pro: true,
  },
}];

const onCityClick = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          currentCity = {currentCity}
          offersOfTown = {offersOfTown}
          onCityClick = {onCityClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
