import {extend} from "./utils/common.js";
import {generatePlaceCards} from "./mocks/offers";
import {TownType} from "./const.js";
import {TOWN_NAMES} from "./const";
import {SortType} from "./const";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  activeOfferId: null,
  city: TownType.AMSTERDAM,
  cities: TOWN_NAMES,
  sortByName: SortType.POPULAR,
  offers: placeCards,
  offersOfTown: placeCards.filter((place) => place.townName === TownType.AMSTERDAM),
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_OPTIONS: `CHANGE_SORT_OPTIONS`,
  OFFERS_LIST: `OFFERS_LIST`,
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

  getOffersList: (city) => {
    return ({
      type: ActionType.OFFERS_LIST,
      payload: initialState.offers.filter((place) => place.townName === city),
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

    case ActionType.OFFERS_LIST:
      return extend(state, {
        offersOfTown: action.payload,
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType, placeCards};
