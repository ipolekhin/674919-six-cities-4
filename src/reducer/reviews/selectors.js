// import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.REVIEWS;

export const getOffers = (state) => {
  return state[NAME_SPACE].reviews;
};
