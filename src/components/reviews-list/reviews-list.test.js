import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
    date: new Date(2020, 7, 17),
    id: 1,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `Max`,
  },
  {
    date: new Date(2020, 7, 15),
    id: 2,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `John`,
  }
];

describe(`ReviewsList Test`, () => {
  it(`Render ReviewsList`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews={reviews}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
