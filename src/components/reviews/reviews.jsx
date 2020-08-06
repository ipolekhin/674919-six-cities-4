import React from "react";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import {AuthorizationStatus} from "../../const";
import {
  authorizationStatusType,
  isNumberType,
  reviewsType,
} from "../../types/types";

const Reviews = (props) => {
  const {authorizationStatus, offerId, reviews} = props;
  // console.log(reviews);

  return (
    <React.Fragment>
      <div>{offerId}</div>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>

        <ReviewsList
          reviews = {reviews}
        />

        {authorizationStatus === AuthorizationStatus.AUTH && (
          <ReviewForm
            onSubmit = {() => {}}
          />
        )}
      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  authorizationStatus: authorizationStatusType,
  offerId: isNumberType,
  reviews: reviewsType,
};

export default Reviews;
