import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

const onSubmit = () => {};

describe(`SignIn Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <SignIn
          onSubmit = {onSubmit}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
