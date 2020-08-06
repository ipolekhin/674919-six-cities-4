import {extend} from "../../utils/common.js";
import {adapterOffers} from "../../adapters/offers.js";

const initialState = {
  city: ``,
  offers: [],
  offersOfTown: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  OFFERS_LIST: `OFFERS_LIST`,
  OFFERS_OF_TOWN: `OFFERS_OF_TOWN`,
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
      payload: offers,
    });
  },
  getOffersOfTown: (city) => {
    return ({
      type: ActionType.OFFERS_OF_TOWN,
      payload: city,
    });
  },
};

const Operation = {
  getOffersList: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const allOffers = adapterOffers(response.data);
        dispatch(ActionCreator.getOffersList(allOffers));
        dispatch(ActionCreator.changeCity(allOffers[0].townName));
        dispatch(ActionCreator.getOffersOfTown(allOffers));
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

    case ActionType.OFFERS_OF_TOWN:
      return extend(state, {
        offersOfTown: action.payload.filter((offer) => offer.townName === state.city),
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
