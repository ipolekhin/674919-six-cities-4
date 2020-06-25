import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import {countPlacesType, placeCardsType} from "../../types/types";

const titleClickHandler = () => {};

const App = (props) => {
  const {countPlaces, placeCards} = props;

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              countPlaces = {countPlaces}
              placeCards = {placeCards}
              titleClickHandler = {titleClickHandler}
            />
          </Route>
          <Route exact path="/dev-component">
            <Offer />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

App.propTypes = {
  countPlaces: countPlacesType,
  placeCards: placeCardsType,
};

export default App;
