import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";
import {Router} from 'react-router-dom';
import history from '../../history';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const authorizationStatus = false;
const favoritesOffers = [];
const mockStore = configureStore([]);
const sortedFavoritesOffers = [];
const noop = () => {};

describe(`Favorites Test`, () => {
  it(`Render Favorites`, () => {
    const store = mockStore({});
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <Favorites
                authorizationStatus={authorizationStatus}
                favoritesOffers={favoritesOffers}
                sortedFavoritesOffers={sortedFavoritesOffers}
                loadFavoriteOffers={noop}
              />
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
