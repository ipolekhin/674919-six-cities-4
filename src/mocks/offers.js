import {CARD_IMAGES, CARD_NAMES, COORDINATES_LIST, INSIDE_ITEMS} from "./const";
import {CARD_TYPES, Ratings} from "../const";
import {
  getRandomBooleanValue,
  getRandomIntegerNumber,
  getRandomItem,
  reshuffle,
} from "../utils/common";

const MIN_RATING = 1;
const MAX_RATING = 5;
const MAX_PRICE = 300;
const MAX_BEDROOMS = 5;
const MAX_ADULTS = 8;

const generatePlaceCard = () => {
  const adults = getRandomIntegerNumber(1, MAX_ADULTS);
  const description = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;
  const bedrooms = getRandomIntegerNumber(1, MAX_BEDROOMS);
  const cardName = getRandomItem(CARD_NAMES);
  const cardType = getRandomItem(CARD_TYPES);
  const cardRating = getRandomIntegerNumber(MIN_RATING, MAX_RATING);
  const cardRatingStars = Ratings[cardRating - 1];
  const coordinatesItem = COORDINATES_LIST.pop();
  const id = String(Math.random());
  const images = reshuffle(CARD_IMAGES, CARD_IMAGES.length);
  const image = getRandomItem(images);
  const insideItems = reshuffle(INSIDE_ITEMS, INSIDE_ITEMS.length);
  const premiumPlace = getRandomBooleanValue();
  const price = getRandomIntegerNumber(0, MAX_PRICE);
  const userPro = getRandomBooleanValue();

  return {
    adults,
    bedrooms,
    cardName,
    cardRating,
    cardRatingStars,
    cardType,
    coordinatesItem,
    description,
    id,
    image,
    images,
    insideItems,
    premiumPlace,
    price,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      pro: userPro,
    },
  };
};

const generatePlaceCards = (count) => {
  return new Array(count).fill(``)
    .map(generatePlaceCard);
};

export {generatePlaceCards};
