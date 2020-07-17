import React from "react";
import PlaceCard from "../placa-card/place-card.jsx";
import {classNameType, placeCardsType, titleClickType} from "../../types/types";

export default class PlaceCards extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {placeCardId: null};
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    const {className, placeCards, onTitleClick} = this.props;

    return (
      <React.Fragment>
        {placeCards.map((placeCard) => (
          <PlaceCard
            className = {className}
            handleHover = {this._handleHover}
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
  onTitleClick: titleClickType,
};
