import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {functionType, isBoolType, isStringType} from "../../types/types.js";
import {AppRoute} from "../../const";

const PrivateRoute = (props) => {
  const {authorizationStatus, render, path, exact} = props;

  return (
    <Route
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
  isUserAuthorized: functionType,
  path: isStringType,
  render: functionType,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
