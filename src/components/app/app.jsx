import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import {currentCityType, functionClickType, placeCardsType} from "../../types/types";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {offer: null};
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  render() {
    const {currentCity, onCityClick, onSortClick, sortByName, offersOfTown} = this.props;

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PageContainer renderContainer = {() => (
                <div className="page page--gray page--main">
                  <Header isMain = {true} />
                  {this._renderOfferScreen(currentCity, onCityClick, offersOfTown, onSortClick, sortByName)}
                </div>
              )}>
              </PageContainer>
            </Route>
            <Route exact path="/dev-offer">
              <PageContainer renderContainer = {() => (
                <div className="page">
                  <Header/>
                  <Offer
                    currentCity = {currentCity}
                    onTitleClick = {this.handleTitleClick}
                    placeCards = {offersOfTown}
                  />
                </div>
              )}>
              </PageContainer>
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  _renderOfferScreen(currentCity, onCityClick, offersOfTown, onSortClick, sortByName) {
    if (this.state.offer === null) {
      return (
        <Main
          currentCity = {currentCity}
          onCityClick = {onCityClick}
          onTitleClick = {this.handleTitleClick}
          placeCards = {offersOfTown}
          onSortClick = {onSortClick}
          sortByName = {sortByName}
        />
      );
    } else {
      return (
        <Offer
          currentCity = {currentCity}
          onTitleClick = {this.handleTitleClick}
          placeCards = {offersOfTown}
        />
      );
    }
  }

  handleTitleClick(offerId) {
    this.setState({offer: this.props.offersOfTown.find((card) => card.id === offerId)});
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.city,
  sortByName: state.sortByName,
  offersOfTown: state.offersOfTown,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffersList(city));
  },
  onSortClick(sortByName) {
    dispatch(ActionCreator.changeSortOptions(sortByName));
  },
});

App.propTypes = {
  currentCity: currentCityType,
  offersOfTown: placeCardsType,
  onCityClick: functionClickType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
