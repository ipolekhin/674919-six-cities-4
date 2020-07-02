import PropTypes from "prop-types";

const countPlacesType = PropTypes.number.isRequired;

const handleHoverType = PropTypes.func.isRequired;

const placeCardType = PropTypes.shape({
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardRating: PropTypes.number.isRequired,
  cardRatingStars: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.string.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  premiumPlace: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pro: PropTypes.bool.isRequired,
  }).isRequired,
});

const placeCardsType = PropTypes.arrayOf(placeCardType).isRequired;

const titleClickType = PropTypes.func.isRequired;

export {
  placeCardType,
  countPlacesType,
  handleHoverType,
  placeCardsType,
  titleClickType,
};
