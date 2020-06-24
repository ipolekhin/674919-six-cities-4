import React from "react";
import PlaceCard from "../placa-card/place-card.jsx";
import {placeCardsType, titleClickType} from "../../types/types";

export default class PlaceCards extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {placeCardId: null};
    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    const {placeCards, titleClickHandler} = this.props;

    return (
      <React.Fragment>
        {placeCards.map((placeCard) => (
          <PlaceCard
            key={placeCard.id}
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
  placeCards: placeCardsType,
  titleClickHandler: titleClickType,
};
