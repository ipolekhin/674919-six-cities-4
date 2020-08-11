import React from "react";
import {Link, Redirect, Route, Router, Switch} from "react-router-dom";
import history from "../../history.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getOffersOfTown, getCurrentCity} from "../../reducer/data/selectors.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {getActiveOfferId, getSortName, getSortOffers} from "../../reducer/site/selectors.js";
import {getAuthorizationStatus, getLoadingStatus, getUser} from "../../reducer/user/selectors.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import {
  activeOfferIdType,
  currentCityType,
  functionClickType,
  isBoolType,
  loginType,
  placeCardsType,
  sortNameType, userType
} from "../../types/types";
import {AppRoute} from "../../const.js";

const App = (props) => {
  const {
    activeOfferId,
    authorizationStatus,
    currentCity,
    loading,
    login,
    offersOfTown,
    onSortClick,
    sortByName,
    sortOffersOfTown,
    user,
  } = props;

  return (
    <React.Fragment>
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <PageContainer
              offersOfTown={offersOfTown}
              renderContainer={() => (
                <div className="page page--gray page--main">
                  <Header
                    isMain={true}
                    authorizationStatus={authorizationStatus}
                    user={user}
                  />
                  <Main
                    activeOfferId={activeOfferId}
                    currentCity={currentCity}
                    placeCards={sortOffersOfTown}
                    onSortClick={onSortClick}
                    sortByName={sortByName}
                  />
                </div>
              )}>
            </PageContainer>
          </Route>
          <Route
            path={AppRoute.SIGN_IN}
            exact
            render={() => {
              return (
                !authorizationStatus
                  ? <SignIn
                    onSubmit = {login}
                  />
                  : <Redirect to={AppRoute.ROOT} />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.OFFER}
            render={({match}) => {
              return (<PageContainer
                offersOfTown={offersOfTown}
                renderContainer={() => (
                  <div className="page">
                    <Header
                      authorizationStatus={authorizationStatus}
                      user={user}
                    />
                    <Offer
                      authorizationStatus={authorizationStatus}
                      offerId={+match.params.id}
                    />
                  </div>
                )}>
              </PageContainer>);
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            authorizationStatus={authorizationStatus}
            loading={loading}
            render={() => {
              return (
                <Favorites
                  authorizationStatus={authorizationStatus}
                  user={user}
                />
              );
            }}
          />
          <Route
            render={() => (
              <React.Fragment>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to={AppRoute.ROOT}>Go to main page</Link>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return ({
    activeOfferId: getActiveOfferId(state),
    authorizationStatus: getAuthorizationStatus(state),
    currentCity: getCurrentCity(state),
    loading: getLoadingStatus(state),
    offersOfTown: getOffersOfTown(state),
    sortByName: getSortName(state),
    sortOffersOfTown: getSortOffers(state),
    user: getUser(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  onSortClick(sortName) {
    dispatch(ActionCreator.changeSortOptions(sortName));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

App.propTypes = {
  activeOfferId: activeOfferIdType,
  authorizationStatus: isBoolType,
  currentCity: currentCityType,
  loading: isBoolType,
  login: loginType,
  offersOfTown: placeCardsType,
  onSortClick: functionClickType,
  sortByName: sortNameType,
  sortOffersOfTown: placeCardsType,
  user: userType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
