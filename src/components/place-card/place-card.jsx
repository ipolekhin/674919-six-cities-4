import React from "react";
import {classNameType, placeCardType, functionClickType, isBoolType} from "../../types/types";
import {Link} from "react-router-dom";
import {AppRoute, OfferCardsClassesType} from "../../const";
import history from "../../history.js";

const PlaceCard = (props) => {
  const {
    authorizationStatus,
    className,
    onFavoriteClick,
    onOptionHover,
    // onActiveItemChange,
    // onTitleClick,
    placeCard
  } = props;
  // console.log(authorizationStatus);

  // const onClick = (event) => {
  //   event.preventDefault();
  //   // onActiveItemChange(placeCard.id);
  //   onTitleClick(placeCard.id);
  // };
  const onFavoriteButtonClick = (event) => {
    event.preventDefault();
    return (authorizationStatus
      ? (() => {
        onFavoriteClick(placeCard.id, +!placeCard.favoritePlace);
        placeCard.favoritePlace = !placeCard.favoritePlace;
      })()
      : history.push(AppRoute.SIGN_IN));
  };
  const imageWidth = className === OfferCardsClassesType.FAVORITES_CONTAINER ? 150 : 260;
  const imageHeight = className === OfferCardsClassesType.FAVORITES_CONTAINER ? 110 : 200;

  return (
    <React.Fragment>
      <article
        className={(className ? `${className}__card place-card` : `${OfferCardsClassesType.MAIN_CONTAINER} place-card`)}
        onMouseOver={(event) => {
          event.preventDefault();
          onOptionHover(placeCard.id);
        }}
      >

        {placeCard.premiumPlace && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}

        <div className={`${className}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/offer/${placeCard.id}`}>
            <img className="place-card__image" src={placeCard.image} width={imageWidth} height={imageHeight} alt="Place image" />
          </Link>
        </div>

        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{placeCard.price}</b>

              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            <button
              className={`place-card__bookmark-button button
              ${placeCard.favoritePlace
                ? `place-card__bookmark-button--active`
                : ``} ${placeCard.favoritePlace}`}
              type="button"
              onClick={onFavoriteButtonClick}
            >
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
            <Link
              to={`/offer/${placeCard.id}`}
              // onClick={onClick}
            >
              {placeCard.cardName}
            </Link>
          </h2>

          <p className="place-card__type">{placeCard.cardType}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

PlaceCard.propTypes = {
  authorizationStatus: isBoolType,
  className: classNameType,
  // onActiveItemChange: functionClickType,
  onFavoriteClick: functionClickType,
  // onTitleClick: functionClickType,
  onOptionHover: functionClickType,
  placeCard: (placeCardType).isRequired,
};

export default PlaceCard;
