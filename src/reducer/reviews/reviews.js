import {extend} from "../../utils/common.js";
import {adapterReviews} from "../../adapters/reviews.js";

const initialState = {
  reviews: [],
  isFormBlocked: false,
};

const ActionType = {
  ADD_REVIEW: `ADD_REVIEW`,
  GET_REVIEWS: `GET_REVIEWS`,
  CHANGE_BLOCKED: `CHANGE_BLOCKED`,
};

const ActionCreator = {
  addReview: (value) => {
    return ({
      type: ActionType.ADD_REVIEW,
      payload: value,
    });
  },
  changeBlocked: (value) => {
    return ({
      type: ActionType.CHANGE_BLOCKED,
      payload: value,
    });
  },
  getReviews: (value) => {
    return ({
      type: ActionType.GET_REVIEWS,
      payload: value,
    });
  },
};

const Operation = {
  getReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(adapterReviews(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  // postReview: () => (dispatch) => {
  postReview: (offerId, postReview) => (dispatch, getState, api) => {
  //   console.log(`Отправка на сервер, начало`);
    dispatch(ActionCreator.changeBlocked(true));
    // console.log(offerId);
    // console.log(postReview);

    return api.post(`/comments/${offerId}`, postReview)
      .then((response) => {
      // .then(() => {
        // console.log(`Отправка на сервер`);
        if (response.status === 200) {
          dispatch(ActionCreator.addReview(adapterReviews(response.data)));
        }
        dispatch(ActionCreator.changeBlocked(false));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.CHANGE_BLOCKED:
      return extend(state, {
        isFormBlocked: action.payload,
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
