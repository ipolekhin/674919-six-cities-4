import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const handleHover = () => {};

const offer = {
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
};

const titleClickHandler = () => {};

it(`Render Offer`, () => {
  const tree = renderer
    .create(<Offer
      offer = {offer}
      titleClickHandler = {titleClickHandler}
      handleHover = {handleHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
