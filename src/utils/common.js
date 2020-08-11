import moment from "moment";
import {Sort, SortType, TownCoordinates} from "../const.js";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getMonthYear = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const getDateTime = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

const getRandomBooleanValue = () => Math.random() > 0.5;

const getRandomCoordinateOffer = (townName) => {
  const townCoordinate = TownCoordinates[townName];
  const x = townCoordinate[0] + Math.random() / 20;
  const y = townCoordinate[1] + Math.random() / 20;
  return [x, y];
};

const getRandomIntegerNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const getRandomItem = (items) => {
  const randomIndex = getRandomIntegerNumber(0, items.length);

  return items[randomIndex];
};

const getSortedOffers = (offers, sortType) => {
  let sortedOffers = [];
  const showingOffers = offers.slice();

  switch (sortType) {
    case SortType.POPULAR:
      sortedOffers = offers;
      break;
    case SortType.PRICE_LOW:
      sortedOffers = showingOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.PRICE_HIGH:
      sortedOffers = showingOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED_FIRST:
      sortedOffers = showingOffers.sort((a, b) => b.cardRating - a.cardRating);
      break;
  }

  return sortedOffers;
};

const getSortedList = (offers, sortType) => {
  let sortedList = [];
  const showingList = offers.slice();

  switch (sortType) {
    case Sort.BY_DATE:
      sortedList = showingList.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }

  return sortedList;
};

const getRebuildFavoriteOffers = (offers, towns) => {
  return towns.map(
      (town) => {
        return {
          town,
          offers: offers.filter((offer) => offer.townName === town),
        };
      }
  );
};

const reshuffle = (data, maxNumber) => {
  const shuffle = data.slice().sort(() => Math.random() - 0.5);
  shuffle.length = getRandomIntegerNumber(1, maxNumber);
  return shuffle;
};

export {
  extend,
  getDateTime,
  getMonthYear,
  getRandomBooleanValue,
  getRandomCoordinateOffer,
  getRandomIntegerNumber,
  getRandomItem,
  getRebuildFavoriteOffers,
  getSortedList,
  getSortedOffers,
  reshuffle,
};
