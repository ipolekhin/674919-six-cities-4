import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

const review = {
  date: `2020-06-21T16:06:01.820Z`,
  id: 1,
  rating: `80%`,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  userAvatar: `img/avatar-max.jpg`,
  userName: `Max`,
};

describe(`ReviewsItem Test`, () => {
  it(`Render ReviewsItem`, () => {
    const tree = renderer
      .create(
          <ReviewsItem
            review={review}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
