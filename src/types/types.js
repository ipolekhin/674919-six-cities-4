import PropTypes from "prop-types";

const countPlacesType = PropTypes.number.isRequired;

const handleHoverType = PropTypes.func.isRequired;

const placeCardType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  premiumPlace: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  cardName: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
  cardRating: PropTypes.string.isRequired,
}).isRequired;

const placeCardsType = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      premiumPlace: PropTypes.bool.isRequired,
      price: PropTypes.number.isRequired,
      cardName: PropTypes.string.isRequired,
      cardType: PropTypes.string.isRequired,
      cardRating: PropTypes.string.isRequired,
    })
).isRequired;

const titleClickType = PropTypes.func.isRequired;

export {
  placeCardType,
  countPlacesType,
  handleHoverType,
  placeCardsType,
  titleClickType,
};
