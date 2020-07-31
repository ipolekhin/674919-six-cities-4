import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {
  activeOfferIdType,
  currentCityType,
  functionClickType,
  isStringType,
  placeCardsType,
  sortNameType
} from "../../types/types";
import {getSortedOffers} from "../../utils/common";

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

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageContainer renderContainer={() => (
              <div className="page page--gray page--main">
                <Header isMain={true}/>
                {renderOfferScreen(
                    activeItem,
                    activeOfferId,
                    currentCity,
                    onActiveItemChange,
                    offersOfTown,
                    onSortClick,
                    sortByName,
                    sortOffersOfTown
                )}
              </div>
            )}>
            </PageContainer>
          </Route>
          <Route exact path="/dev-offer">
            <PageContainer renderContainer={() => (
              <div className="page">
                <Header/>
                <OfferWrapped
                  currentCity={currentCity}
                  placeCards={offersOfTown}
                />
              </div>
            )}>
            </PageContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

const renderOfferScreen = (
    activeItem, activeOfferId,
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
        currentCity = {currentCity}
        placeCards = {offersOfTown}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  activeOfferId: state.activeOfferId,
  currentCity: state.city,
  sortByName: state.sortByName,
  sortOffersOfTown: getSortedOffers(state.offersOfTown, state.sortByName),
  offersOfTown: state.offersOfTown,
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(sortByName) {
    dispatch(ActionCreator.changeSortOptions(sortByName));
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
