import PropTypes from "prop-types";

const cityCoordinateType = PropTypes.arrayOf(PropTypes.number.isRequired).isRequired;

const childrenType = PropTypes.node.isRequired;

const classNameType = PropTypes.string.isRequired;

const coordinateActivePinType = PropTypes.arrayOf(PropTypes.number.isRequired);

const countPlacesType = PropTypes.number.isRequired;

const handleHoverType = PropTypes.func.isRequired;

const isMainType = PropTypes.bool;

const placeCardType = PropTypes.shape({
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardRating: PropTypes.number.isRequired,
  cardRatingStars: PropTypes.string.isRequired,
  coordinatesItem: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  premiumPlace: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
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

const reviewType = PropTypes.shape({
  date: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}).isRequired;

const reviewsType = PropTypes.arrayOf(reviewType).isRequired;

const titleClickType = PropTypes.func.isRequired;

const renderFunctionType = PropTypes.func.isRequired;

export {
  cityCoordinateType,
  childrenType,
  classNameType,
  coordinateActivePinType,
  countPlacesType,
  handleHoverType,
  isMainType,
  placeCardType,
  placeCardsType,
  renderFunctionType,
  reviewType,
  reviewsType,
  titleClickType,
};
