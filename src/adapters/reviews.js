import {Ratings} from "../const";

const adapterReview = (review) => {
  return ({
    date: review.date,
    comment: review.comment,
    id: review.id,
    rating: Ratings[Math.round(review.rating) - 1],
    userAvatar: review.user.avatar_url,
    userId: review.user.id,
    userName: review.user.name,
    userPro: review.user.is_pro,
  });
};

const adapterReviews = (reviews) => {
  return (reviews.map((review) => adapterReview(review)));
};

export {adapterReviews};
