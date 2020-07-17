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
  reviews: [
    {
      date: `16.07.2020`,
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

const className = `page`;

const titleClickHandler = () => {};

it(`Render PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      className = {className}
      placeCard = {placeCard}
      titleClickHandler = {titleClickHandler}
      handleHover = {handleHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
