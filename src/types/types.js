import PropTypes from "prop-types";

const activeOfferIdType = PropTypes.number;

const authorizationStatusType = PropTypes.string.isRequired;

const childrenType = PropTypes.node.isRequired;

const citiesType = PropTypes.arrayOf(PropTypes.string.isRequired).isRequired;

const cityCoordinateType = PropTypes.arrayOf(PropTypes.number.isRequired).isRequired;

const classNameType = PropTypes.string.isRequired;

const currentCityType = PropTypes.string;

const functionClickType = PropTypes.func.isRequired;

const isBoolType = PropTypes.bool;

const isStringType = PropTypes.string;

const placeCardType = PropTypes.shape({
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardRating: PropTypes.number.isRequired,
  cardRatingStars: PropTypes.string.isRequired,
  coordinatesItem: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  premiumPlace: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        userAvatar: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pro: PropTypes.bool.isRequired,
  }).isRequired,
});

const placeCardsType = PropTypes.arrayOf(placeCardType).isRequired;

const renderFunctionType = PropTypes.func.isRequired;

const reviewType = PropTypes.shape({
  date: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}).isRequired;

const reviewsType = PropTypes.arrayOf(reviewType).isRequired;

const sortNameType = PropTypes.string.isRequired;

export {
  activeOfferIdType,
  authorizationStatusType,
  childrenType,
  citiesType,
  cityCoordinateType,
  classNameType,
  currentCityType,
  functionClickType,
  isBoolType,
  isStringType,
  placeCardType,
  placeCardsType,
  renderFunctionType,
  reviewType,
  reviewsType,
  sortNameType,
};
