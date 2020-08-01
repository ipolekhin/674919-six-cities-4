import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getSortedOffers} from "../../utils/common.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

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

export const getSortOffers = createSelector(
    getOffersOfTown,
    getSortByName,
    (resultOne, resultTwo) => {
      return getSortedOffers(resultOne, resultTwo);
    }
);
