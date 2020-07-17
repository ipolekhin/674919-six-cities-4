import React from "react";
import {reviewType} from "../../types/types";
import {getDateTime, getMonthYear} from "../../utils/common";

const ReviewsItem = (props) => {
  const {date, text, rating, userAvatar, userName} = props.review;
  const dateFormatted = getMonthYear(date);
  const dateTime = getDateTime(date);

  return (
    <React.Fragment>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={userAvatar} alt="Reviews avatar" width="54" height="54" />
            </div>

            <span className="reviews__user-name">{userName}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: rating}}></span>

                <span className="visually-hidden">Rating</span>
              </div>
            </div>

            <p className="reviews__text">
              {text}
            </p>
            <time className="reviews__time" dateTime={dateTime}>{dateFormatted}</time>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

ReviewsItem.propTypes = {
  review: reviewType,
};

export default ReviewsItem;
