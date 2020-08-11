import React from "react";
import {FIVE_STAR, STARS_PROPERTY} from "../../const.js";
import {
  functionType,
  isBoolType,
  isNumberType,
  isStringType,
} from "../../types/types.js";

const ReviewForm = (props) => {
  const {
    comment,
    isActive,
    isFormBlocked,
    messageError,
    onReviewFormChange,
    onReviewFormSubmit,
    rating,
  } = props;

  return (
    <React.Fragment>
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={onReviewFormSubmit}
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
                    onChange={onReviewFormChange}
                    checked={rating === value}
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
          minLength="50"
          maxLength="300"
          required=""
          onChange={onReviewFormChange}
          disabled={isFormBlocked}
          value={comment}
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
        {messageError && (
          <div
            className="field_error_message"
            style={{
              margin: `10 0`,
              fontWeight: `bold`,
              color: `#f05242`,
            }}
          >{messageError}</div>)
        }
      </form>
    </React.Fragment>
  );
};

ReviewForm.propTypes = {
  isFormBlocked: isBoolType,
  comment: isStringType,
  isActive: isBoolType,
  messageError: isStringType,
  onReviewFormChange: functionType,
  onReviewFormSubmit: functionType,
  rating: isNumberType,
};

export default ReviewForm;
