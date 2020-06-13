import {CARD_IMAGES, CARD_NAMES} from "./const";

import {CARD_TYPES, Ratings} from "../const";

import {
  getRandomBooleanValue,
  getRandomIntegerNumber,
  getRandomItem
} from "../utils/common";

const MIN_RATING = 0;
const MAX_RATING = 4;
const MAX_PRICE = 300;

const generatePlaceCard = () => {
  const id = String(Math.random());
  const image = getRandomItem(CARD_IMAGES);
  const premiumPlace = getRandomBooleanValue();
  const price = getRandomIntegerNumber(0, MAX_PRICE);
  const cardName = getRandomItem(CARD_NAMES);
  const cardType = getRandomItem(CARD_TYPES);
  const cardRating = Ratings[getRandomIntegerNumber(MIN_RATING, MAX_RATING)];

  return {
    id,
    image,
    premiumPlace,
    price,
    cardName,
    cardType,
    cardRating,
  };
};

const generatePlaceCards = (count) => {
  return new Array(count).fill(``)
    .map(generatePlaceCard);
};

export {generatePlaceCards};
