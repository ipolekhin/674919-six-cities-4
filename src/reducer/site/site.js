import {extend} from "../utils/common.js";
import {TownType} from "../const.js";
import {TOWN_NAMES} from "../const";
import {SortType} from "../const";


const initialState = {
  activeOfferId: null,
  cities: TOWN_NAMES,
  city: TownType.AMSTERDAM,
  sortByName: SortType.POPULAR,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },

  changeSortOptions: (sortByName) => {
    return ({
      type: ActionType.CHANGE_SORT_OPTIONS,
      payload: sortByName,
    });
  },

  setActiveOffer: (activeOfferId) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: activeOfferId,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CHANGE_SORT_OPTIONS:
      return extend(state, {
        sortByName: action.payload,
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType};
