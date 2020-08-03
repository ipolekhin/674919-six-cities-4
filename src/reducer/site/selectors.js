import NameSpace from "../name-space.js";
import {createSelector} from "reselect";
import {getSortedOffers} from "../../utils/common";
import {getOffersOfTown} from "../data/selectors";

const NAME_SPACE = NameSpace.SITE;

export const getActiveOfferId = (state) => {
  // console.log(`Selector - getActiveOfferId`);
  return state[NAME_SPACE].activeOfferId;
};

export const getSortName = (state) => {
  // console.log(`Selector - sortByName`);
  return state[NAME_SPACE].sortByName;
};

export const getSortOffers = createSelector(
    getOffersOfTown,
    getSortName,
    (resultOne, resultTwo) => {
      return getSortedOffers(resultOne, resultTwo);
    }
);
