import {extend} from "../../utils/common.js";

const initialState = {
  reviews: [],
};

const ActionType = {
  ADD_REVIEW: `ADD_REVIEW`,
  GET_REVIEWS: `GET_REVIEWS`,
};

const ActionCreator = {
  addReview: (value) => {
    return ({
      type: ActionType.ADD_REVIEW,
      payload: value,
    });
  },
  getReviews: (value) => {
    return ({
      type: ActionType.ADD_REVIEW,
      payload: value,
    });
  },
};

const Operation = {
  getReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
      })
      .catch((err) => {
        throw err;
      });
  },
  postReview: (offerId, postReview) => (dispatch, getState, api) => {
    // console.log(`Отправка на сервер, начало`);
    // console.log(offerId);
    // console.log(postReview);

    return api.post(`/comments/${offerId}`, {
      postReview
    })
      // .then((response) => {
      .then(() => {
        // console.log(`Отправка на сервер`);
        // dispatch(ActionCreator.addReview(response.data));
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
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
