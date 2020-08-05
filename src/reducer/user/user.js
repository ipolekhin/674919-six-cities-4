import {AuthorizationStatus} from "../../const";
import {extend} from "../../utils/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  // login: (authData) => (dispatch, getState, api) => {
  //   return api.post(`/login`, {
  //     email: authData.login,
  //     password: authData.password,
  //   })
  //     .then(() => {
  //       dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
  //     });
  // },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
