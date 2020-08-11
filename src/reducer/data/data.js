import {extend} from "../../utils/common.js";
import {adapterOffers} from "../../adapters/offers.js";

const initialState = {
  city: `Amsterdam`,
  favoriteOffers: [],
  nearOffers: [],
  offers: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FAVORITE_OFFERS_LIST: `FAVORITE_OFFERS_LIST`,
  NEAR_OFFERS_LIST: `NEAR_OFFERS_LIST`,
  OFFERS_LIST: `OFFERS_LIST`,
};

const ActionCreator = {
  changeCity: (city) => {
    return ({
      type: ActionType.CHANGE_CITY,
      payload: city,
    });
  },
  getFavoriteOffers: (offers) => ({
    type: ActionType.FAVORITE_OFFERS_LIST,
    payload: offers
  }),
  getNearOffers: (nearOffers) => ({
    type: ActionType.NEAR_OFFERS_LIST,
    payload: nearOffers
  }),
  getOffersList: (offers) => {
    return ({
      type: ActionType.OFFERS_LIST,
      payload: offers,
    });
  },
};

const Operation = {
  getOffersList: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getOffersList(adapterOffers(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadFavoritesOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavoriteOffers(adapterOffers(response.data)));
      });
  },
  loadNearOffer: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.getNearOffers(adapterOffers(response.data)));
      });
  },
  setFavoriteOffer: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then(() => {
        dispatch(Operation.getOffersList());
      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.FAVORITE_OFFERS_LIST:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.NEAR_OFFERS_LIST:
      return extend(state, {
        nearOffers: action.payload
      });
    case ActionType.OFFERS_LIST:
      return extend(state, {
        offers: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
