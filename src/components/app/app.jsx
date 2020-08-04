import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getOffersOfTown, getCurrentCity} from "../../reducer/data/selectors.js";
import {getActiveOfferId, getSortName, getSortOffers} from "../../reducer/site/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  activeOfferIdType,
  authorizationStatusType,
  currentCityType,
  functionClickType,
  isStringType,
  placeCardsType,
  sortNameType
} from "../../types/types";

const OfferWrapped = withActiveItem(Offer);

const App = (props) => {
  const {
    activeItem,
    activeOfferId,
    // authoriz ationStatus,
    currentCity,
    offersOfTown,
    onActiveItemChange,
    onSortClick,
    sortByName,
    sortOffersOfTown
  } = props;
  // console.log(`App - 7`);
  // console.log(authorizationStatus);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer
              offersOfTown = {offersOfTown}
              renderContainer={() => (
                <div className="page page--gray page--main">
                  <Header isMain={true}/>
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
          </Route>
          <Route exact path="/dev-offer">
            <PageContainer
              offersOfTown = {offersOfTown}
              renderContainer={() => (
                <div className="page">
                  <Header/>
                  <OfferWrapped
                    currentCity = {currentCity}
                    placeCards = {offersOfTown}
                  />
                </div>
              )}
            >
            </PageContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

const renderOfferScreen = (
    activeItem,
    activeOfferId,
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
  currentCity: currentCityType,
  activeItem: isStringType,
  offersOfTown: placeCardsType,
  onSortClick: functionClickType,
  onActiveItemChange: functionClickType,
  sortByName: sortNameType,
  sortOffersOfTown: placeCardsType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
