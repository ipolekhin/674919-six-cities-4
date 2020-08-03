import {extend} from "../../utils/common.js";
import {adapterOffers} from "../../apapters/offers.js";

import {generatePlaceCards} from "../../apapters/offers.js";

const MAX_COUNT_PLACES = 24;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const initialState = {
  city: ``,
  offers: [],
  offersOfTown: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OFFERS_LIST: `OFFERS_LIST`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },
  getOffersList: (offers) => {
    return ({
      type: ActionType.OFFERS_LIST,
      // payload: initialState.offers.filter((place) => place.townName === city),
      payload: offers,
    });
  },
};

const Operation = {
  getOffersList: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const allOffers = adapterOffers(response.data);

        console.log(allOffers);
        // let cities = new Set();
        // allOffers.forEach((offer) => cities.add(offer.townName));

        dispatch(ActionCreator.getOffersList(allOffers));
        dispatch(ActionCreator.changeCity(allOffers[0].townName));
        // dispatch(ActionCreator.getCities(Array.from(cities)));
        // console.log(Array.from(cities));
        // const friendsNames = Array.from(allOffers, ({townName}) => townName);
        // console.log([...new Set(friendsNames)]);
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

export {ActionCreator, ActionType, Operation, placeCards, reducer};
