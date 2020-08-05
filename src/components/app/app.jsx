import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getOffersOfTown, getCurrentCity} from "../../reducer/data/selectors.js";
import {getActiveOfferId, getSortName, getSortOffers} from "../../reducer/site/selectors.js";
import {getAuthorizationStatus, getUser} from "../../reducer/user/selectors.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  activeOfferIdType,
  authorizationStatusType,
  currentCityType,
  functionClickType,
  isStringType,
  loginType,
  placeCardsType,
  sortNameType, userType
} from "../../types/types";
import {AuthorizationStatus} from "../../const";

const OfferWrapped = withActiveItem(Offer);

const App = (props) => {
  const {
    activeItem,
    activeOfferId,
    authorizationStatus,
    currentCity,
    login,
    offersOfTown,
    onActiveItemChange,
    onSortClick,
    sortByName,
    sortOffersOfTown,
    user,
  } = props;
  // console.log(`App - 7`);
  // console.log(user);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer
              offersOfTown = {offersOfTown}
              renderContainer={() => (
                <div className="page page--gray page--main">
                  <Header
                    isMain = {true}
                    authorizationStatus = {authorizationStatus}
                    user = {user}
                  />
                  {
                    renderOfferScreen(
                        activeItem,
                        activeOfferId,
                        authorizationStatus,
                        currentCity,
                        onActiveItemChange,
                        offersOfTown,
                        onSortClick,
                        sortByName,
                        sortOffersOfTown
                    )
                  }
                </div>
              )}>
            </PageContainer>
          </Route>
          <Route exact path="/dev-offer">
            <PageContainer
              offersOfTown = {offersOfTown}
              renderContainer={() => (
                <div className="page">
                  <Header
                    authorizationStatus = {authorizationStatus}
                    user = {user}
                  />
                  <OfferWrapped
                    authorizationStatus = {authorizationStatus}
                    currentCity = {currentCity}
                    placeCards = {offersOfTown}
                  />
                </div>
              )}
            >
            </PageContainer>
          </Route>
          <Route exact path="/dev-sign-in">
            {
              authorizationStatus === AuthorizationStatus.NO_AUTH && (
                <SignIn onSubmit = {login}/>
              ) || (
                <PageContainer
                  offersOfTown = {offersOfTown}
                  renderContainer={() => (
                    <div className="page page--gray page--main">
                      <Header
                        isMain = {true}
                        authorizationStatus = {authorizationStatus}
                        user = {user}
                      />
                      {
                        renderOfferScreen(
                            activeItem,
                            activeOfferId,
                            currentCity,
                            onActiveItemChange,
                            offersOfTown,
                            onSortClick,
                            sortByName,
                            sortOffersOfTown
                        )
                      }
                    </div>
                  )}>
                </PageContainer>
              )
            }
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

const renderOfferScreen = (
    activeItem,
    activeOfferId,
    authorizationStatus,
    currentCity,
    onActiveItemChange,
    offersOfTown,
    onSortClick,
    sortByName,
    sortOffersOfTown
) => {
  if (activeItem === null) {
    return (
      <Main
        activeOfferId = {activeOfferId}
        currentCity = {currentCity}
        onActiveItemChange = {onActiveItemChange}
        placeCards = {sortOffersOfTown}
        onSortClick = {onSortClick}
        sortByName = {sortByName}
      />
    );
  } else {
    return (
      <OfferWrapped
        activeOfferId = {activeOfferId}
        authorizationStatus = {authorizationStatus}
        currentCity = {currentCity}
        placeCards = {offersOfTown}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    activeOfferId: getActiveOfferId(state),
    authorizationStatus: getAuthorizationStatus(state),
    currentCity: getCurrentCity(state),
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
  authorizationStatus: authorizationStatusType,
  activeItem: isStringType,
  currentCity: currentCityType,
  login: loginType,
  offersOfTown: placeCardsType,
  onSortClick: functionClickType,
  onActiveItemChange: functionClickType,
  sortByName: sortNameType,
  sortOffersOfTown: placeCardsType,
  user: userType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
