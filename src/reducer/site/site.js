import {extend} from "../../utils/common.js";
import {SortType} from "../../const.js";


const initialState = {
  activeOfferId: null,
  sortByName: SortType.POPULAR,
};

const ActionType = {
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

const ActionCreator = {
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
