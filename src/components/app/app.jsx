import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import {countPlacesType, placeCardsType, titleClickType} from "../../types/types";

const titleClickHandler = () => {};

const App = (props) => {
  const {countPlaces, placeCards} = props;

  return (
    <React.Fragment>
      <MainScreen
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
  titleClickHandler: titleClickType,
};

export default App;

