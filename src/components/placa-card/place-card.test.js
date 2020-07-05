import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const handleHover = () => {};

const placeCard = {
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
};

const titleClickHandler = () => {};

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      placeCard = {placeCard}
      titleClickHandler = {titleClickHandler}
      handleHover = {handleHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
