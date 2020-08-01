import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.SITE;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

export const sortByName = (state) => {
  return state[NAME_SPACE].sortByName;
};
