import React from "react";
import PlaceCard from "../placa-card/place-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {classNameType, placeCardsType, functionClickType} from "../../types/types";

class PlaceCards extends React.PureComponent {
  render() {
    const {className, placeCards, onTitleClick, onOptionHover} = this.props;

    return (
      <React.Fragment>
        {placeCards.map((placeCard) => (
          <PlaceCard
            className = {className}
            onOptionHover = {onOptionHover}
            key = {placeCard.id}
            onTitleClick = {onTitleClick}
            placeCard = {placeCard}
          />
        ))}
      </React.Fragment>
    );
  }
}

PlaceCards.propTypes = {
  className: classNameType,
  placeCards: placeCardsType,
  onTitleClick: functionClickType,
  onOptionHover: functionClickType,
};

const mapDispatchToProps = (dispatch) => ({
  onOptionHover(activeOfferId) {
    dispatch(ActionCreator.setActiveOffer(activeOfferId));
  },
});

export {PlaceCards};
export default connect(null, mapDispatchToProps)(PlaceCards);
