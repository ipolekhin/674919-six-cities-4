import React from "react";
import {connect} from "react-redux";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import withReviewForm from '../../hocs/with-review-form/with-review-form.js';
import {blockedForm, getReviews} from "../../reducer/reviews/selectors.js";
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import {
  functionType,
  isBoolType,
  isNumberType,
  reviewsType,
} from "../../types/types";
import {getSortedList} from "../../utils/common.js";
import {Sort} from "../../const.js";
const ReviewFormWrapped = withReviewForm(ReviewForm);

const Reviews = (props) => {
  const {
    authorizationStatus,
    isFormBlocked,
    offerId,
    onSubmitReview,
    reviews
  } = props;
  const MAX_REVIEWS = 10;
  const sortedReviews = getSortedList(reviews, Sort.BY_DATE);

  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>

        <ReviewsList
          reviews = {sortedReviews.slice(0, MAX_REVIEWS)}
        />

        {authorizationStatus && (
          <ReviewFormWrapped
            isFormBlocked={isFormBlocked}
            offerId={offerId}
            onSubmitReview={onSubmitReview}
          />
        )}
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return ({
    isFormBlocked: blockedForm(state),
    reviews: getReviews(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(offerId, data) {
    return dispatch(ReviewOperation.postReview(offerId, data));
  },
});

Reviews.propTypes = {
  authorizationStatus: isBoolType,
  isFormBlocked: isBoolType,
  offerId: isNumberType,
  onSubmitReview: functionType,
  reviews: reviewsType,
};

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
