import React from "react";
import {Route, Redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import {getAuthorizationStatus, getLoadingStatus} from "../../reducer/user/selectors.js";
import {functionType, isBoolType, isStringType} from "../../types/types.js";
import {AppRoute} from "../../const";
// import {Operation as UserOperation} from "../../reducer/user/user.js";


const PrivateRoute = (props) => {
  const {authorizationStatus, loading, render, path, exact} = props;
  console.log(`PrivateRoute loading`);
  console.log(loading);

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
  // checkAuth: functionType,
  loading: isBoolType,
};

// const mapStateToProps = (state) => ({
//   authorizationStatus: getAuthorizationStatus(state),
//   loading: getLoadingStatus(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   checkAuth() {
//     dispatch(UserOperation.checkAuth());
//   },
// });

export default PrivateRoute;
// export {PrivateRoute};
// export default connect(mapStateToProps)(PrivateRoute);
