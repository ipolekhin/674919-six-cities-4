import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Reviews} from "./reviews.jsx";

const authorizationStatus = false;
const mockStore = configureStore([]);
const noop = () => {};
const offerId = 1;
const reviews = [
  {
    date: `2020-06-21T16:06:01.820Z`,
    id: offerId,
    rating: `80%`,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userAvatar: `img/avatar-max.jpg`,
    userName: `Max`,
  }
];

describe(`Reviews Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const store = mockStore({});
    const tree = renderer.create(
        <Provider store={store}>
          <Reviews
            authorizationStatus = {authorizationStatus.NO_AUTH}
            offerId = {offerId}
            onSubmitReview = {noop}
            reviews = {reviews}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
