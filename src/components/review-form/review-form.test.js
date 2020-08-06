import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

const onSubmit = () => {};

describe(`ReviewForm Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <ReviewForm
          onSubmit = {onSubmit}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
