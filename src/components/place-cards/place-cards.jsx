import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import {classNameType, placeCardsType, functionClickType, isBoolType} from "../../types/types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const PlaceCards = (props) => {
  const {
    authorizationStatus,
    className,
    placeCards,
    onFavoriteClick,
    // onActiveItemChange,
    onOptionHover,
    onTitleClick
  } = props;

  return (
    <React.Fragment>
      {placeCards.map((placeCard) => (
        <PlaceCard
          authorizationStatus={authorizationStatus}
          className={className}
          onFavoriteClick={onFavoriteClick}
          onOptionHover={onOptionHover}
          key={placeCard.id}
          // onActiveItemChange={onActiveItemChange}
          onTitleClick={onTitleClick}
          placeCard={placeCard}
        />
      ))}
    </React.Fragment>
  );
};

PlaceCards.propTypes = {
  authorizationStatus: isBoolType,
  className: classNameType,
  // onActiveItemChange: functionClickType,
  onFavoriteClick: functionClickType,
  onOptionHover: functionClickType,
  onTitleClick: functionClickType,
  placeCards: placeCardsType,
};

const mapStateToProps = (state) => {
  return ({
    authorizationStatus: getAuthorizationStatus(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onOptionHover(activeOfferId) {
    dispatch(ActionCreator.setActiveOffer(activeOfferId));
  },
  onTitleClick(offerId) {
    dispatch(ReviewOperation.getReviews(offerId));
  },
  onFavoriteClick(offerId, isFavorite) {
    dispatch(DataOperation.setFavoriteOffer(offerId, isFavorite));
  }
});

export {PlaceCards};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCards);
