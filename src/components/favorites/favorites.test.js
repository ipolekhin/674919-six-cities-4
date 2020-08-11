import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";

const authorizationStatus = false;

describe(`Favorites Test`, () => {
  it(`Render Favorites`, () => {
    const tree = renderer
      .create(
          <Favorites
            authorizationStatus={authorizationStatus}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
