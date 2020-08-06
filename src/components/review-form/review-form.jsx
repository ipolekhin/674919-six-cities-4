import React, {createRef} from "react";
import {FIVE_STAR, STARS_PROPERTY} from "../../const.js";
import {
  functionType,
  isBoolType,
  isNumberType,
  isStringType,
} from "../../types/types.js";

const ReviewForm = (props) => {
  const {isFormBlocked, comment, offerId, onSubmitReview, onReviewFormChange, isActive, rating} = props;
  const formRef = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitReview(offerId, {
      comment,
      rating,
    });
  };

  const onChange = (event) => {
    onReviewFormChange(event);
  };

  // console.log(`isActive`);
  // console.log(isActive);
  // console.log(rating);
  // console.log(`isFormBlocked`);
  // console.log(isFormBlocked);

  return (
    <React.Fragment>
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
        onChange={onChange}
        ref={formRef}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            FIVE_STAR.map((value) => {
              return (
                <React.Fragment key={value}>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value={value}
                    id={`${value}-stars`}
                    type="radio"
                    disabled={isFormBlocked}
                  />
                  <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={STARS_PROPERTY[value - 1]}>
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </React.Fragment>
              );
            })
          }
        </div>

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          // minLength="3"
          minLength="50"
          maxLength="300"
          required=""
          disabled={isFormBlocked}
        >
        </textarea>

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!isActive || isFormBlocked}
          >
              Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

ReviewForm.propTypes = {
  isFormBlocked: isBoolType,
  comment: isStringType,
  isActive: isBoolType,
  offerId: isNumberType,
  onSubmitReview: functionType,
  onReviewFormChange: functionType,
  rating: isNumberType,
};

export default ReviewForm;
