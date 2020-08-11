import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";

const authorizationStatus = false;

describe(`PrivateRoute Test`, () => {
  it(`Render PrivateRoute`, () => {
    const tree = renderer
      .create(
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
