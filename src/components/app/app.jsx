import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageContainer from "../page-container/page-container.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import {countPlacesType, placeCardsType} from "../../types/types";
import {TownCoordinates, TownType} from "../../const";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {offer: null};
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  render() {
    const {placeCards} = this.props;

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PageContainer renderContainer = {() => (
                <div className="page page--gray page--main">
                  <Header isMain = {true} />
                  {this._renderOfferScreen()}
                </div>
              )}>
              </PageContainer>
            </Route>
            <Route exact path="/dev-offer">
              <PageContainer renderContainer = {() => (
                <div className="page">
                  <Header/>
                  <Offer
                    cityCoordinate = {TownCoordinates[TownType.AMSTERDAM]}
                    offer = {placeCards[0]}
                    placeCards = {placeCards}
                    onTitleClick = {this.onTitleClick}
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

  _renderOfferScreen() {
    const {countPlaces, placeCards} = this.props;
    if (this.state.offer === null) {
      return (
        <Main
          cityCoordinate = {TownCoordinates[TownType.AMSTERDAM]}
          countPlaces = {countPlaces}
          onTitleClick = {this.onTitleClick}
          placeCards = {placeCards}
        />
      );
    } else {
      return (
        <Offer
          cityCoordinate = {TownCoordinates[TownType.AMSTERDAM]}
          offer = {this.state.offer}
          placeCards = {placeCards}
          onTitleClick = {this.onTitleClick}
        />
      );
    }

  }

  onTitleClick(offerId) {
    this.setState({offer: this.props.placeCards.find((card) => card.id === offerId)});
  }
}

App.propTypes = {
  countPlaces: countPlacesType,
  placeCards: placeCardsType,
};
