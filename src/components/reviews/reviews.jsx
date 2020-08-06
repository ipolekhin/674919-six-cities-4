import React from "react";
import {connect} from "react-redux";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import withReviewForm from '../../hocs/with-review-form/with-review-form.js';
import {blockedForm, getReviews} from "../../reducer/reviews/selectors.js";
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import {AuthorizationStatus} from "../../const";
import {
  authorizationStatusType,
  functionType,
  isBoolType,
  isNumberType,
  reviewsType,
} from "../../types/types";
const ReviewFormWrapped = withReviewForm(ReviewForm);

const Reviews = (props) => {
  const {authorizationStatus, isFormBlocked, offerId, onSubmitReview, reviews} = props;
  // console.log(offerId, `offerId`);
  // console.log(reviews, `reviews`);

  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>

        <ReviewsList
          reviews = {reviews}
        />

        {authorizationStatus === AuthorizationStatus.AUTH && (
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
  // console.log(`mapStateToProps`);
  return ({
    isFormBlocked: blockedForm(state),
    reviews: getReviews(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(offerId, data) {
    dispatch(ReviewOperation.postReview(offerId, data));
  },
});

Reviews.propTypes = {
  authorizationStatus: authorizationStatusType,
  isFormBlocked: isBoolType,
  offerId: isNumberType,
  onSubmitReview: functionType,
  reviews: reviewsType,
};

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
