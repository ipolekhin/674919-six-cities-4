import {extend} from "./utils/common.js";
import {TownType} from "./const.js";

const initialState = {
  city: TownType.AMSTERDAM,
  offers: {},
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OFFERS_LIST: `OFFERS_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.OFFERS_LIST:
      return extend(state, {
        offers: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionType};
