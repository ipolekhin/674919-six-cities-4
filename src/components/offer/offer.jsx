import React from "react";
import {connect} from "react-redux";
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import Map from "../map/map.jsx";
import PlaceCards from "../place-cards/place-cards.jsx";
import Reviews from "../reviews/reviews.jsx";
import {
  // authorizationStatusType,
  currentCityType,
  functionClickType,
  isBoolType,
  isNumberType,
  isStringType,
  placeCardsType
} from "../../types/types";
// import {blockedForm, getReviews} from "../../reducer/reviews/selectors.js";
import {getNearOffers, getOffers} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data";
import history from "../../history";
import {AppRoute} from "../../const";
import {OfferCardsClassesType} from "../../const.js";

const MAX_IMAGES = 6;
const MAX_NEAR_OFFERS = 3;

class Offer extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.offersOfTown = null;
  }

  componentDidMount() {
    const {offerId, loadNearByOffer, loadReviews} = this.props;
    loadReviews(offerId);
    loadNearByOffer(offerId);
  }

  componentDidUpdate(prevProps) {
    const {offerId, loadNearByOffer, loadReviews} = this.props;
    if (prevProps.offerId !== offerId) {
      loadReviews(offerId);
      loadNearByOffer(offerId);
    }
  }

  render() {
    const {
      // activeItem,
      authorizationStatus,
      currentCity,
      // onActiveItemChange,
      nearOffers,
      offerId,
      onFavoriteClick,
      placeCards,
    } = this.props;
    console.log(nearOffers);
    const activeOffer = placeCards.find((card) => card.id === offerId);
    const onFavoriteButtonClick = (event) => {
      event.preventDefault();
      return (authorizationStatus
        ? (() => {
          onFavoriteClick(offerId, +!activeOffer.favoritePlace);
          activeOffer.favoritePlace = !activeOffer.favoritePlace;
        })()
        : history.push(AppRoute.SIGN_IN));
    };

    // const nearPlaces = placeCards.filter((place) => activeOffer.id !== place.id);
    console.log(`Offer1`);
    console.log(placeCards);
    // console.log(this.props);
    // console.log(offerId);
    // console.log(authorizationStatus);
    return (
      <React.Fragment>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {activeOffer.images.slice(0, MAX_IMAGES).map((image, index) => (
                  <div className="property__image-wrapper" key={index}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {activeOffer.premiumPlace && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {activeOffer.cardName}
                  </h1>

                  <button
                    className={`property__bookmark-button button
                    ${activeOffer.favoritePlace ? `property__bookmark-button--active` : ``}`}
                    type="button"
                    onClick={onFavoriteButtonClick}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: activeOffer.cardRatingStars}}></span>

                    <span className="visually-hidden">Rating</span>
                  </div>

                  <span className="property__rating-value rating__value">{activeOffer.cardRating}</span>
                </div>

                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {activeOffer.cardType}
                  </li>

                  <li className="property__feature property__feature--bedrooms">
                    {activeOffer.bedrooms} Bedrooms
                  </li>

                  <li className="property__feature property__feature--adults">
                    Max {activeOffer.adults} adults
                  </li>
                </ul>

                <div className="property__price">
                  <b className="property__price-value">€{activeOffer.price}</b>

                  <span className="property__price-text">&nbsp;night</span>
                </div>

                <div className="property__inside">
                  <h2 className="property__inside-title">What inside</h2>

                  <ul className="property__inside-list">
                    {activeOffer.insideItems.map((item, index) => (
                      <li className="property__inside-item" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>

                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${activeOffer.user.pro ? `property__avatar-wrapper--pro` : ``}`}>
                      <img className="property__avatar user__avatar" src={`/${activeOffer.user.avatar}`} alt="Host avatar" width="74" height="74" />
                    </div>

                    <span className="property__user-name">{activeOffer.user.name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {activeOffer.description}
                    </p>
                  </div>
                </div>

                <Reviews
                  authorizationStatus = {authorizationStatus}
                  offerId = {offerId}
                />
              </div>
            </div>

            <Map
              activeOfferId = {offerId}
              currentCity = {activeOffer.townName}
              placeCards = {nearOffers.slice(0, MAX_NEAR_OFFERS)}
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
                  // onActiveItemChange = {onActiveItemChange}
                  placeCards = {nearOffers.slice(0, MAX_NEAR_OFFERS)}
                />
              </div>
            </section>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

Offer.propTypes = {
  activeItem: isStringType,
  authorizationStatus: isBoolType,
  currentCity: currentCityType,
  offerId: isNumberType,
  // onActiveItemChange: functionClickType,
  loadNearByOffer: functionClickType,
  loadReviews: functionClickType,
  placeCards: placeCardsType,
  nearOffers: placeCardsType,
};

const mapStateToProps = (state) => {
  return ({
    placeCards: getOffers(state),
    nearOffers: getNearOffers(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    dispatch(ReviewOperation.getReviews(offerId));
  },
  onFavoriteClick(offerId, isFavorite) {
    dispatch(DataOperation.setFavoriteOffer(offerId, isFavorite));
  },
  loadNearByOffer(offerId) {
    dispatch(DataOperation.loadNearOffer(offerId));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
