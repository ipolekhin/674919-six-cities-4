import React from "react";
import PlaceCard from "../placa-card/place-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {classNameType, placeCardsType, functionClickType} from "../../types/types";

class PlaceCards extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {placeCardId: null};
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    const {className, placeCards, onTitleClick, onOptionHover} = this.props;
    // const {className, placeCards, onTitleClick} = this.props;

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

  _handleHover(placeCardId) {
    this.setState({placeCardId});
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

// export default PlaceCards;
export {PlaceCards};
export default connect(null, mapDispatchToProps)(PlaceCards);
