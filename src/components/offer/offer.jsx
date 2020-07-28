import React from "react";
import Map from "../map/map.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {currentCityType, functionClickType, placeCardsType} from "../../types/types";
import {OfferCardsClassesType, STARS_PROPERTY} from "../../const";

const Offer = (props) => {
  const {currentCity, onTitleClick, placeCards} = props;
  const nearPlaces = placeCards.filter((place) => placeCards[0].id !== place.id);
  const FIVE_STAR = [5, 4, 3, 2, 1];

  return (
    <React.Fragment>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {placeCards[0].images.map((image, index) => (
                <div className="property__image-wrapper" key={index}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {placeCards[0].premiumPlace && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {placeCards[0].cardName}
                </h1>

                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: placeCards[0].cardRatingStars}}></span>

                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="property__rating-value rating__value">{placeCards[0].cardRating}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {placeCards[0].cardType}
                </li>

                <li className="property__feature property__feature--bedrooms">
                  {placeCards[0].bedrooms} Bedrooms
                </li>

                <li className="property__feature property__feature--adults">
                  Max {placeCards[0].adults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">€{placeCards[0].price}</b>

                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What inside</h2>

                <ul className="property__inside-list">
                  {placeCards[0].insideItems.map((item, index) => (
                    <li className="property__inside-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>

                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${placeCards[0].user.pro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={placeCards[0].user.avatar} alt="Host avatar"
                      width="74" height="74" />
                  </div>

                  <span className="property__user-name">{placeCards[0].user.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {placeCards[0].description}
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{placeCards[0].reviews.length}</span></h2>

                <ReviewsList
                  reviews = {placeCards[0].reviews}
                />

                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    {
                      FIVE_STAR.map((value) => {
                        return (
                          <React.Fragment key={value}>
                            <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" />
                            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={STARS_PROPERTY[value - 1]}>
                              <svg className="form__star-image" width="37" height="33">
                                <use xlinkHref="#icon-star"></use>
                              </svg>
                            </label>
                          </React.Fragment>
                        );
                      })
                    }
                  </div>

                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>

          <Map
            activeOfferId = {placeCards[0].id}
            currentCity = {currentCity}
            placeCards = {placeCards}
            renderMap = {(mapRef) => (
              <section className="property__map map" ref={mapRef}></section>
            )}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <PlaceCards
                className = {OfferCardsClassesType.OFFER_CONTAINER}
                onTitleClick = {onTitleClick}
                placeCards = {nearPlaces}
              />
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

Offer.propTypes = {
  currentCity: currentCityType,
  onTitleClick: functionClickType,
  placeCards: placeCardsType,
};

export default Offer;
