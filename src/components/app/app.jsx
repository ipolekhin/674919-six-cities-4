import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import {countPlacesType, placeCardsType} from "../../types/types";

const App = (props) => {
  const {countPlaces, placeCards} = props;

  return (
    <React.Fragment>
      <MainScreen
        countPlaces = {countPlaces}
        placeCards = {placeCards} />
    </React.Fragment>
  );
};

App.propTypes = {
  countPlaces: countPlacesType,
  placeCards: placeCardsType,
};

export default App;

