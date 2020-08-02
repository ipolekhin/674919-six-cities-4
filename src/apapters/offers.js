import {CARD_IMAGES, CARD_NAMES, INSIDE_ITEMS} from "./const";
import {CARD_TYPES, Ratings, TOWN_NAMES} from "../const";
import {
  getRandomBooleanValue,
  getRandomCoordinateOffer,
  getRandomIntegerNumber,
  getRandomItem,
  reshuffle,
} from "../utils/common";

const MIN_RATING = 1;
const MAX_RATING = 5;
const MAX_PRICE = 300;
const MAX_BEDROOMS = 5;
const MAX_ADULTS = 8;

const adapterOffer = (offer) => {
  return {
    adults: offer.max_adults,
    townName: offer.city.name,
    bedrooms: offer.bedrooms,
    cardName: offer.title,
    cardRating: offer.rating,
    cardRatingStars: Ratings[offer.rating - 1],
    cardType: offer.type,
    coordinatesItem: [offer.location.latitude, offer.location.longitude],
    description: offer.description,
    favoritePlace: offer.is_favorite,
    id: offer.id,
    image: offer.preview_image,
    images: offer.images,
    insideItems: offer.goods,
    premiumPlace: offer.is_premium,
    price: offer.price,
    user: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      pro: offer.host.is_pro,
    },
  };
};

const adapterOffers = (offers) => (offers.map((offer) => adapterOffer(offer)));

const generatePlaceCard = () => {
  const adults = getRandomIntegerNumber(1, MAX_ADULTS);
  const date = new Date();
  const description = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;
  const bedrooms = getRandomIntegerNumber(1, MAX_BEDROOMS);
  const cardName = getRandomItem(CARD_NAMES);
  const cardType = getRandomItem(CARD_TYPES);
  const cardRating = getRandomIntegerNumber(MIN_RATING, MAX_RATING);
  const cardRatingStars = Ratings[cardRating - 1];
  const rating = Ratings[cardRating - 1];
  const townName = getRandomItem(TOWN_NAMES);
  const coordinatesItem = getRandomCoordinateOffer(townName);
  const id = String(Math.random());
  const images = reshuffle(CARD_IMAGES, CARD_IMAGES.length);
  const image = getRandomItem(images);
  const insideItems = reshuffle(INSIDE_ITEMS, INSIDE_ITEMS.length);
  const premiumPlace = getRandomBooleanValue();
  const price = getRandomIntegerNumber(0, MAX_PRICE);
  const userPro = getRandomBooleanValue();

  return {
    adults,
    townName,
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

    reviews: [
      {
        date,
        id,
        rating,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        userAvatar: `img/avatar-max.jpg`,
        userName: `Max`,
      }
    ],
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

export {adapterOffers, generatePlaceCards};
