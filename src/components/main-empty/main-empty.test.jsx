import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

describe(`MainEmpty Test`, () => {
  it(`Render MainEmpty`, () => {
    const tree = renderer
      .create(
          <MainEmpty/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
