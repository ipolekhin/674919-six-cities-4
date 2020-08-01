import {extend} from "../../utils/common.js";
import {generatePlaceCards} from "../../mocks/offers.js";
import {SortType} from "../../const.js";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  city: `Amsterdam`,
  offers: placeCards,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OFFERS_LIST:
      return extend(state, {
        offersOfTown: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionCreator, ActionType, placeCards};
