import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/site/site.js";
import {getOffersOfTown, getCurrentCity} from "../../reducer/data/selectors.js";
import {getActiveOfferId, getSortName, getSortOffers} from "../../reducer/site/selectors.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {
  activeOfferIdType,
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
    currentCity,
    offersOfTown,
    onActiveItemChange,
    onSortClick,
    sortByName,
    sortOffersOfTown
  } = props;
  console.log(`App - 7`);
  console.log(activeItem);

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
  const bdcbsdf = `12312`;
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
    console.log(`activeOfferId`);
    console.log(activeOfferId);
    console.log(activeItem);
    return (
      <OfferWrapped
        activeItem = {activeOfferId}
        activeOfferId = {activeOfferId}
        currentCity = {currentCity}
        placeCards = {offersOfTown}
        bdcbsdf = {bdcbsdf}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    activeOfferId: getActiveOfferId(state),
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
});

App.propTypes = {
  activeOfferId: activeOfferIdType,
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
