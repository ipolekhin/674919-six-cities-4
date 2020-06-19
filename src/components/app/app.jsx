import React from "react";
import Main from "../main/main.jsx";
import {countPlacesType, placeCardsType} from "../../types/types";

const titleClickHandler = () => {};

const App = (props) => {
  const {countPlaces, placeCards} = props;

  return (
    <React.Fragment>
      <Main
        countPlaces = {countPlaces}
        placeCards = {placeCards}
        titleClickHandler = {titleClickHandler}
      />
    </React.Fragment>
  );
};

App.propTypes = {
  countPlaces: countPlacesType,
  placeCards: placeCardsType,
};

export default App;

