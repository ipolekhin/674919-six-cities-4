import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getRebuildFavoriteOffers} from "../../utils/common.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  // console.log(`Selectors - getOffers`);
  return state[NAME_SPACE].offers;
};

export const getCurrentCity = (state) => {
  // console.log(`Selectors - getCurrentCity`);
  return state[NAME_SPACE].city;
};

export const getCities = (state) => {
  // console.log(`Selectors - getCities`);
  const cities = Array.from(state[NAME_SPACE].offers, ({townName}) => townName);

  return [...new Set(cities)];
};

export const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getSortedFavoriteOffers = createSelector(
    getFavoriteOffers,
    getCities,
    (resultOne, resultTwo) => {
      return getRebuildFavoriteOffers(resultOne, resultTwo);
    }
);

export const getSortByName = (state) => {
  return state[NAME_SPACE].sortByName;
};

export const getOffersOfTown = createSelector(
    getOffers,
    getCurrentCity,
    (resultOne, resultTwo) => {
      return resultOne.filter((offer) => offer.townName === resultTwo);
    }
);
