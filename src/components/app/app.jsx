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
    this.titleClickHandler = this.titleClickHandler.bind(this);
  }

  render() {
    const {placeCards} = this.props;

    return (
      <React.Fragment>
        <PageContainer>
          <Header/>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                {this._renderOfferScreen()}
              </Route>
              <Route exact path="/dev-offer">
                <Offer
                  offer = {placeCards[0]}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </PageContainer>
      </React.Fragment>
    );
  }

  _renderOfferScreen() {
    const {countPlaces, placeCards} = this.props;
    if (this.state.offer === null) {
      return (
        <Main
          countPlaces = {countPlaces}
          placeCards = {placeCards}
          titleClickHandler = {this.titleClickHandler}
          cityCoordinate = {TownCoordinates[TownType.AMSTERDAM]}
        />
      );
    } else {
      return (
        <Offer
          offer = {this.state.offer}
        />
      );
    }

  }

  titleClickHandler(offerId) {
    this.setState({offer: this.props.placeCards.find((card) => card.id === offerId)});
  }
}

App.propTypes = {
  countPlaces: countPlacesType,
  placeCards: placeCardsType,
};
