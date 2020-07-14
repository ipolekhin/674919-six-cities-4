import React from "react";
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;

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

export default ReviewsList;
