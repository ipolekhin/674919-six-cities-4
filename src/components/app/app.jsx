import React from "react";
import {Link, Redirect, Route, Router, Switch} from "react-router-dom";
import history from "../../history.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getOffersOfTown, getCurrentCity, getFavoritesOffers} from "../../reducer/data/selectors.js";
// import {Operation as ReviewOperation} from '../../reducer/reviews/reviews.js';
import PrivateRoute from "../private-route/private-route.jsx";
import {getActiveOfferId, getSortName, getSortOffers} from "../../reducer/site/selectors.js";
import {getAuthorizationStatus, getLoadingStatus, getUser} from "../../reducer/user/selectors.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  activeOfferIdType,
  currentCityType,
  functionClickType,
  isBoolType,
  // functionType,
  isStringType,
  loginType,
  placeCardsType,
  sortNameType, userType
} from "../../types/types";
import {AppRoute} from "../../const.js";

const OfferWrapped = withActiveItem(Offer);

const App = (props) => {
  const {
    // activeItem,
    activeOfferId,
    authorizationStatus,
    currentCity,
    favoritesOffers,
    // loadReviews,
    loading,
    login,
    offersOfTown,
    // onActiveItemChange,
    onSortClick,
    sortByName,
    sortOffersOfTown,
    user,
  } = props;
  // console.log(`App - 7`);
  // console.log(loading);

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
                    // onActiveItemChange={onActiveItemChange}
                    placeCards={sortOffersOfTown}
                    onSortClick={onSortClick}
                    sortByName={sortByName}
                  />
                  {/*{*/}
                  {/*  renderOfferScreen(*/}
                  {/*      activeItem,*/}
                  {/*      activeOfferId,*/}
                  {/*      authorizationStatus,*/}
                  {/*      currentCity,*/}
                  {/*      // loadReviews,*/}
                  {/*      onActiveItemChange,*/}
                  {/*      offersOfTown,*/}
                  {/*      onSortClick,*/}
                  {/*      sortByName,*/}
                  {/*      sortOffersOfTown*/}
                  {/*  )*/}
                  {/*}*/}
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
            component={Offer}
          >
            {/*<Offer*/}
            {/*  placeCards={offersOfTown}*/}
            {/*  currentCity={currentCity}*/}
            {/*/>*/}
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            authorizationStatus={authorizationStatus}
            loading={loading}
            render={() => {
              return (
                <Favorites
                  favoritesOffers={favoritesOffers}
                  user={user}
                />
              );
            }}
          />
          {/*<Route exact path={AppRoute.FAVORITES}>*/}
          {/*  <Favorites/>*/}
          {/*</Route>*/}
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

          {/*<Route exact path="/dev-offer">*/}
          {/*  <PageContainer*/}
          {/*    offersOfTown={offersOfTown}*/}
          {/*    renderContainer={() => (*/}
          {/*      <div className="page">*/}
          {/*        <Header*/}
          {/*          authorizationStatus={authorizationStatus}*/}
          {/*          user={user}*/}
          {/*        />*/}
          {/*        <OfferWrapped*/}
          {/*          authorizationStatus={authorizationStatus}*/}
          {/*          currentCity={currentCity}*/}
          {/*          // loadReviews={loadReviews}*/}
          {/*          placeCards={offersOfTown}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    )}*/}
          {/*  >*/}
          {/*  </PageContainer>*/}
          {/*</Route>*/}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

// const renderOfferScreen = (
//     activeItem,
//     activeOfferId,
//     authorizationStatus,
//     currentCity,
//     // loadReviews,
//     onActiveItemChange,
//     offersOfTown,
//     onSortClick,
//     sortByName,
//     sortOffersOfTown
// ) => {
//   if (activeItem === null) {
//     return (
//       <Main
//         activeOfferId={activeOfferId}
//         currentCity={currentCity}
//         onActiveItemChange={onActiveItemChange}
//         placeCards={sortOffersOfTown}
//         onSortClick={onSortClick}
//         sortByName={sortByName}
//       />
//     );
//   } else {
//     return (
//       <OfferWrapped
//         activeOfferId={activeOfferId}
//         authorizationStatus={authorizationStatus}
//         currentCity={currentCity}
//         // loadReviews={loadReviews}
//         placeCards={offersOfTown}
//       />
//     );
//   }
// };

const mapStateToProps = (state) => {
  return ({
    activeOfferId: getActiveOfferId(state),
    authorizationStatus: getAuthorizationStatus(state),
    currentCity: getCurrentCity(state),
    favoritesOffers: getFavoritesOffers(state),
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
  // loadReviews(offerId) {
  //   dispatch(ReviewOperation.getReviews(offerId));
  // },
});

App.propTypes = {
  activeOfferId: activeOfferIdType,
  authorizationStatus: isBoolType,
  // activeItem: isStringType,
  currentCity: currentCityType,
  // loadReviews: functionType,
  login: loginType,
  offersOfTown: placeCardsType,
  onSortClick: functionClickType,
  // onActiveItemChange: functionClickType,
  sortByName: sortNameType,
  sortOffersOfTown: placeCardsType,
  user: userType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
