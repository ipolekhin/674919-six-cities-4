import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

const review = {
  date: new Date(2020, 7, 17),
  id: `01`,
  rating: `92%`,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  userAvatar: `img/avatar-max.jpg`,
  userName: `Max`,
};


it(`Render ReviewsItem`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review = {review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
