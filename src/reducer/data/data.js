import {extend} from "../../utils/common.js";
import adapterOffers from "../../apapters/offers.js";

import {generatePlaceCards} from "../../apapters/offers.js";
import {SortType} from "../../const.js";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  city: `Amsterdam`,
  cities: [],
  offers: [],
  offersOfTown: [],
  sortByName: SortType.POPULAR,
};

const ActionType = {
  OFFERS_LIST: `OFFERS_LIST`,
};

const ActionCreator = {
  getOffersList: (city) => {
    return ({
      type: ActionType.OFFERS_LIST,
      payload: initialState.offers.filter((place) => place.townName === city),
    });
  },
};

const Operation = {
  getOffersList: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const allOffers = adapterOffers(response.data);
        const cities = Array.from(allOffers.keys());
        dispatch(ActionCreator.getCities(cities));
        dispatch(ActionCreator.getOffersList(allOffers));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OFFERS_LIST:
      return extend(state, {
        offers: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, placeCards, reducer};
