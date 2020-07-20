import {extend} from "./utils/common.js";
import {generatePlaceCards} from "./mocks/offers";
import {TownType} from "./const.js";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  city: TownType.AMSTERDAM,
  offers: placeCards.filter((place) => place.town === TownType.AMSTERDAM),
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OFFERS_LIST: `OFFERS_LIST`,
};

const ActionCreator = {
  changeCity: (city) => {
    console.log(`ActionCreator`);

    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },

  getOffersList: (city) => {
    console.log(`getOffersList`);

    return ({
      type: ActionType.OFFERS_LIST,
      payload: placeCards.filter((place) => place.town === city),
    });
  },
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

export {reducer, ActionCreator, ActionType};
