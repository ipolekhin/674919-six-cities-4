import {extend} from "./utils/common.js";
import {generatePlaceCards} from "./mocks/offers";
import {TownType} from "./const.js";
import {SortType} from "./const";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  city: TownType.AMSTERDAM,
  sortByName: SortType.POPULAR,
  offers: placeCards,
  offersOfTown: placeCards.filter((place) => place.townName === TownType.AMSTERDAM),
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  OFFERS_LIST: `OFFERS_LIST`,
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

  getOffersList: (city) => {
    return ({
      type: ActionType.OFFERS_LIST,
      payload: initialState.offers.filter((place) => place.townName === city),
    });
  },
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

    case ActionType.OFFERS_LIST:
      return extend(state, {
        offersOfTown: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType, placeCards};
