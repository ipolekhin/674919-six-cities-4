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
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  render() {
    const {currentCity, onCityClick, offers} = this.props;

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PageContainer renderContainer = {() => (
                <div className="page page--gray page--main">
                  <Header isMain = {true} />
                  {this._renderOfferScreen(currentCity, onCityClick, offers)}
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
                    onTitleClick = {this.onTitleClick}
                    placeCards = {offers}
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

  _renderOfferScreen(currentCity, onCityClick, offers) {
    if (this.state.offer === null) {
      return (
        <Main
          currentCity = {currentCity}
          onCityClick = {onCityClick}
          onTitleClick = {this.onTitleClick}
          placeCards = {offers}
        />
      );
    } else {
      return (
        <Offer
          currentCity = {currentCity}
          onTitleClick = {this.onTitleClick}
          placeCards = {offers}
        />
      );
    }

  }

  onTitleClick(offerId) {
    this.setState({offer: this.props.offers.find((card) => card.id === offerId)});
  }
}

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffersList(city));
  },
});

App.propTypes = {
  currentCity: currentCityType,
  offers: placeCardsType,
  onCityClick: functionClickType,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
