import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

const noop = () => {};
const offerId = 1;

describe(`ReviewForm Test`, () => {
  it(`AuthScreen component render correctly`, () => {
    const tree = renderer.create(
        <ReviewForm
          offerId = {offerId}
          onSubmitReview = {noop}
          onReviewFormChange={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
