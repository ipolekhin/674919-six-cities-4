import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewForm from "./review-form.jsx";

const comment = `The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean.`;
const rating = 4;
const isActive = true;
const isFormBlocked = false;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewForm e2e test`, () => {
  it(`Should click on button of Form`, () => {
    const onReviewFormChange = jest.fn();
    const onReviewFormSubmit = jest.fn();
    const reviewForm = shallow(
        <ReviewForm
          onReviewFormSubmit={onReviewFormSubmit}
          onReviewFormChange={onReviewFormChange}
          comment={comment}
          rating={rating}
          isActive={isActive}
          isFormBlocked={isFormBlocked}
        />
    );

    reviewForm.simulate(`submit`);
    expect().toBe();
  });
});
