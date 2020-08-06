import {extend} from "../../utils/common.js";

const initialState = {
  reviews: [],
};

const ActionType = {
  ADD_REVIEW: `ADD_REVIEW`,
};

const ActionCreator = {
  addReview: (value) => {
    return ({
      type: ActionType.ADD_REVIEW,
      payload: value,
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
