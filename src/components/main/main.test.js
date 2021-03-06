import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import NameSpace from "../../reducer/name-space.js";
import {Router} from 'react-router-dom';
import history from '../../history';

const activeOfferId = 1;
const authorizationStatus = false;
const currentCity = `Amsterdam`;
const mockStore = configureStore([]);
const noop = () => {};
const placeCards = [{
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
const sortByName = `Popular`;

describe(`Main Test`, () => {
  it(`Render MainScreen`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        offers: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: false,
      },
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <Main
                authorizationStatus={authorizationStatus}
                activeOfferId = {activeOfferId}
                currentCity = {currentCity}
                onSortClick = {noop}
                placeCards = {placeCards}
                sortByName = {sortByName}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
