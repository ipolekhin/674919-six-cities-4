import React from "react";
import Map from "../map/map.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {placeCardType} from "../../types/types";
import {OfferCardsClassesType} from "../../const";

const Offer = (props) => {
  const {cityCoordinate, offer, placeCards, titleClickHandler} = props;
  const nearPlaces = placeCards.filter((place) => offer.id !== place.id);

  return (
    <React.Fragment>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, index) => (
                <div className="property__image-wrapper" key={index}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.premiumPlace && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.cardName}
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
                  <span style={{width: offer.cardRatingStars}}></span>

                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="property__rating-value rating__value">{offer.cardRating}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.cardType}
                </li>

                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>

                <li className="property__feature property__feature--adults">
                  Max {offer.adults} adults
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>

                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What inside</h2>

                <ul className="property__inside-list">
                  {offer.insideItems.map((item, index) => (
                    <li className="property__inside-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>

                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${offer.user.pro ? `property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={offer.user.avatar} alt="Host avatar"
                      width="74" height="74" />
                  </div>

                  <span className="property__user-name">{offer.user.name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{offer.reviews.length}</span></h2>

                <ReviewsList
                  reviews = {offer.reviews}
                />

                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
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
            cityCoordinate = {cityCoordinate}
            placeCards = {nearPlaces}
            renderMap = {(mapRef) => (<section className="property__map map" ref={mapRef}></section>)}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <div className="near-places__list places__list">
              <PlaceCards
                className = {OfferCardsClassesType.OFFER_CONTAINER}
                placeCards = {nearPlaces}
                titleClickHandler = {titleClickHandler}
              />
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

Offer.propTypes = {
  offer: (placeCardType).isRequired,
};

export default Offer;
