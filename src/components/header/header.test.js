import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {Router} from 'react-router-dom';
import history from '../../history';

const authorizationStatus = false;

describe(`Header Test`, () => {
  it(`Render Header`, () => {
    const tree = renderer
      .create(
          <Router
            history={history}
          >
            <Header
              authorizationStatus = {authorizationStatus}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
