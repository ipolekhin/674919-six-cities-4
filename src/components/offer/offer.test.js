import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const placeCards = [
  {
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
  },
  {
    adults: 2,
    bedrooms: 1,
    cardName: `Wood and stone place`,
    cardRating: 3.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    coordinatesItem: [52.369553943508, 4.85309666406198],
    description: `Text text....`,
    id: `2`,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`wi-fi`, `bathroom`],
    premiumPlace: true,
    price: 120,
    reviews: [
      {
        date: new Date(2020, 7, 15),
        id: `02`,
        rating: `82%`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        userAvatar: `img/avatar-max.jpg`,
        userName: `John`,
      }
    ],
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
  },
];

const offer = {
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
  reviews: [
    {
      date: new Date(2020, 7, 13),
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
};

const cityCoordinate = [52.38333, 4.9];

const onTitleClick = () => {};

it(`Render Offer`, () => {
  const tree = renderer
    .create(<Offer
      cityCoordinate = {cityCoordinate}
      offer = {offer}
      onTitleClick = {onTitleClick}
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
