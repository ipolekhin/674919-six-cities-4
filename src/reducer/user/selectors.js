import NameSpace from "../name-space.js";
import {AuthorizationStatus} from "../../const.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return (state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH);
};

export const getLoadingStatus = (state) => {
  return state[NameSpace.USER].isLoading;
};

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};
