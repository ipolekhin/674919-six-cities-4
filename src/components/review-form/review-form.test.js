import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

const noop = () => {};

describe(`ReviewForm Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <ReviewForm
          onReviewFormSubmit={noop}
          onReviewFormChange={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
