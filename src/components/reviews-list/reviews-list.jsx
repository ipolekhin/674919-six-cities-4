import React from "react";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import {reviewsType} from "../../types/types";

const ReviewsList = (props) => {
  const {reviews} = props;
  // console.log(reviews);

  return (
    <React.Fragment>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key = {review.id}
            review = {review}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsType,
};

export default ReviewsList;
