import React from "react";
import renderer from "react-test-renderer";
import PlaceCards from "./place-cards";

const placeCards = [
  {
    adults: 3,
    bedrooms: 2,
    cardName: `Wood and stone place`,
    cardRating: 4.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
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
  },
  {
    adults: 2,
    bedrooms: 1,
    cardName: `Wood and stone place`,
    cardRating: 3.6,
    cardRatingStars: `92%`,
    cardType: `Room`,
    description: `Text text....`,
    id: `2`,
    image: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    insideItems: [`bathroom`],
    premiumPlace: true,
    price: 120,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: true,
    },
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
