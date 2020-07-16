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
    const {className, placeCards, titleClickHandler} = this.props;

    return (
      <React.Fragment>
        {placeCards.map((placeCard) => (
          <PlaceCard
            className = {className}
            key = {placeCard.id}
            placeCard = {placeCard}
            titleClickHandler = {titleClickHandler}
            handleHover = {this._handleHover}
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
  titleClickHandler: titleClickType,
};
