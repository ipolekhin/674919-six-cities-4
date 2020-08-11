import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route.jsx";
import {Router} from 'react-router-dom';
import history from '../../history';
import PlaceCard from "../place-card/place-card";

const authorizationStatus = false;
const noop = () => {};

describe(`PrivateRoute Test`, () => {
  it(`Render PrivateRoute`, () => {
    const tree = renderer
      .create(
          <Router
            history={history}
          >
            <PrivateRoute
              authorizationStatus={authorizationStatus}
              render={noop}
            />
          </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
