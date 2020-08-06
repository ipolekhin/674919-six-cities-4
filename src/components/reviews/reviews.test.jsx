import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

const authorizationStatus = {
  NO_AUTH: `NO_AUTH`,
};
const offerId = 1;
const reviews = [
  {
    date: new Date(20, 3, 15),
    id: offerId,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `Max`,
  }
];

describe(`Reviews Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <Reviews
          authorizationStatus = {authorizationStatus.NO_AUTH}
          offerId = {offerId}
          reviews = {reviews}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
