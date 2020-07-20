import moment from "moment";
import {TownCoordinates} from "../const";

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

const getRandomCoordinateOffer = (town) => {
  const townCoordinate = TownCoordinates[town];
  const x = townCoordinate[0] + Math.random() / 20;
  const y = townCoordinate[1] + Math.random() / 20;
  return [x, y];
};

const getRandomIntegerNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const getRandomItem = (items) => {
  const randomIndex = getRandomIntegerNumber(0, items.length);

  return items[randomIndex];
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
  reshuffle,
};
