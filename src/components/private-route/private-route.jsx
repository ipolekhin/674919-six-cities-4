import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {functionType, isBoolType, isStringType} from "../../types/types.js";
import {AppRoute} from "../../const";
import {Operation as UserOperation} from "../../reducer/user/user.js";

let authorizationStatus = true;

const PrivateRoute = (props) => {
  const {render, path, exact, isUserAuthorized} = props;
  console.log(props);
  isUserAuthorized()
    .then(() => {
      console.log(`авто`);
      console.log(authorizationStatus);
      authorizationStatus = true;
      console.log(authorizationStatus);
    })
    .catch(() => {
      console.log(`неавто`);
      console.log(authorizationStatus);
      authorizationStatus = false;
      console.log(authorizationStatus);
    });
  console.log(authorizationStatus, `authorizationStatus`);

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
      }}
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

// const mapStateToProps = (state) => ({
//   authorizationStatus: getAuthorizationStatus(state),
// });

const mapDispatchToProps = (dispatch) => ({
  isUserAuthorized() {
    return dispatch(UserOperation.checkAuth());
  },
});

export {PrivateRoute};
export default connect(null, mapDispatchToProps)(PrivateRoute);
