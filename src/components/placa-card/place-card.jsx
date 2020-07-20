import React from "react";
import {classNameType, placeCardType, functionClickType, handleHoverType} from "../../types/types";

const PlaceCard = (props) => {
  const {className, placeCard, onTitleClick, handleHover} = props;

  return (
    <React.Fragment>
      <article
        className={`${className} place-card`}
        onMouseOver={(event) => {
          event.preventDefault();
          handleHover(placeCard.id);
        }}
      >

        {placeCard.premiumPlace && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={placeCard.image} width="260" height="200" alt="Place image" />
          </a>
        </div>

        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{placeCard.price}</b>

              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>

              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>

          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: placeCard.cardRatingStars}}></span>

              <span className="visually-hidden">Rating</span>
            </div>
          </div>

          <h2 className="place-card__name">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onTitleClick(placeCard.id);
              }}
            >
              {placeCard.cardName}
            </a>
          </h2>

          <p className="place-card__type">{placeCard.cardType}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  className: classNameType,
  placeCard: (placeCardType).isRequired,
  onTitleClick: functionClickType,
  handleHover: handleHoverType,
};

export default PlaceCard;
