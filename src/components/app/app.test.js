import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
};
const mockStore = configureStore([]);
// const cities = [`Amsterdam`, `Dusseldorf`];
const currentCity = `Amsterdam`;
const offersOfTown = [{
  adults: 3,
  townName: `Amsterdam`,
  bedrooms: 2,
  cardName: `Wood and stone place`,
  cardRating: 4.6,
  cardRatingStars: `92%`,
  cardType: `Room`,
  coordinatesItem: [52.3909553943508, 4.85309666406198],
  description: `Text text....`,
  id: 1,
  image: `img/apartment-01.jpg`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
  insideItems: [`wi-fi`, `bathroom`],
  premiumPlace: true,
  price: 100,
  reviews: [
    {
      date: new Date(2020, 7, 17),
      id: 1,
      rating: 4,
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
}];
const onFunctionClick = () => {};
const sortByName = `Popular`;

describe(`App Test`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      activeOfferId: null,
      offers: [],
      sortByName: `Popular`,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              // cities = {cities}
              authorizationStatus = {AuthorizationStatus.NO_AUTH}
              currentCity = {currentCity}
              offers = {offersOfTown}
              offersOfTown = {offersOfTown}
              onSortClick = {onFunctionClick}
              onActiveItemChange = {onFunctionClick}
              sortByName = {sortByName}
              sortOffersOfTown = {offersOfTown}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
