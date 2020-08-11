import {AuthorizationStatus} from "../../const";
import {extend} from "../../utils/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
  isLoading: true,
};

const ActionType = {
  CHECK_LOADING: `CHECK_LOADING`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  checkLoading: (status) => {
    return {
      type: ActionType.CHECK_LOADING,
      payload: status,
    };
  },
  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  },
  setUser: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data.email));
        dispatch(ActionCreator.checkLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.checkLoading(false));
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.setUser(response.data.email));
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECK_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload,
      });

    default:
      return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
