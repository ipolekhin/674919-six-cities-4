// import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export const blockedForm = (state) => {
  return state[NAME_SPACE].isFormBlocked;
};
