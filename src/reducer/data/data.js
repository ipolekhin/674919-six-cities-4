import {extend} from "../../utils/common.js";
import {adapterOffers} from "../../adapters/offers.js";

const initialState = {
  city: ``,
  offers: [],
  favoriteOffers: [],
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FAVORITE_OFFERS_LIST: `FAVORITE_OFFERS_LIST`,
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
        const allOffers = adapterOffers(response.data);
        dispatch(ActionCreator.getOffersList(allOffers));
        dispatch(ActionCreator.changeCity(allOffers[0].townName));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadFavoritesOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavoriteOffers(response.data));
      });
  },
  setFavoriteOffer: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${+!status}`)
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
    case ActionType.OFFERS_LIST:
      return extend(state, {
        offers: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
