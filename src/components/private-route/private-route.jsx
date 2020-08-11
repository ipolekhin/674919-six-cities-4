import React from "react";
import {Route, Redirect} from "react-router-dom";
import {functionType, isBoolType, isStringType} from "../../types/types.js";
import {AppRoute} from "../../const.js";


const PrivateRoute = (props) => {
  const {authorizationStatus, loading, render, path, exact} = props;

  return (
    loading
      ? <div>Загрузка данных</div>
      : <Route
        path={path}
        exact={exact}
        render={() => {
          return (
            authorizationStatus
              ? render()
              : <Redirect to={AppRoute.SIGN_IN} />
          );
        }
        }
      />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: isBoolType,
  exact: isBoolType,
  path: isStringType,
  render: functionType,
  loading: isBoolType,
};

export default PrivateRoute;
