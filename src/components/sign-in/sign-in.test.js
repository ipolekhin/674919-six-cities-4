import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from 'react-router-dom';
import history from '../../history';

const onSubmit = () => {};

describe(`SignIn Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <SignIn
            onSubmit = {onSubmit}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
