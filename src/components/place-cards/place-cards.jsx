import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import {classNameType, placeCardsType, functionClickType} from "../../types/types";

const PlaceCards = (props) => {
  const {className, placeCards, onActiveItemChange, onOptionHover, onTitleClick} = props;

  return (
    <React.Fragment>
      {placeCards.map((placeCard) => (
        <PlaceCard
          className = {className}
          onOptionHover = {onOptionHover}
          key = {placeCard.id}
          onActiveItemChange = {onActiveItemChange}
          onTitleClick = {onTitleClick}
          placeCard = {placeCard}
        />
      ))}
    </React.Fragment>
  );
};

PlaceCards.propTypes = {
  className: classNameType,
  placeCards: placeCardsType,
  onActiveItemChange: functionClickType,
  onOptionHover: functionClickType,
  onTitleClick: functionClickType,
};

const mapDispatchToProps = (dispatch) => ({
  onOptionHover(activeOfferId) {
    dispatch(ActionCreator.setActiveOffer(activeOfferId));
  },
  onTitleClick(offerId) {
    dispatch(ReviewOperation.getReviews(offerId));
  },
});

export {PlaceCards};
export default connect(null, mapDispatchToProps)(PlaceCards);
