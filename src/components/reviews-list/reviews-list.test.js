import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
    date: new Date(),
    id: `01`,
    rating: `92%`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `Max`,
  },
  {
    date: new Date(),
    id: `02`,
    rating: `91%`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `John`,
  }
];

it(`Render ReviewsList`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews = {reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
