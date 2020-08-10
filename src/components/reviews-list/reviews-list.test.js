import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
    date: `2020-06-21T16:06:01.820Z`,
    id: 1,
    rating: `80%`,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `Max`,
  },
  {
    date: `2020-06-13T16:06:01.820Z`,
    id: 2,
    rating: `80%`,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
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
