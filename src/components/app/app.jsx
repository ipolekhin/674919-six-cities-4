import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {countPlaces, placeCards} = props;

  return (
    <MainScreen
      countPlaces = {countPlaces}
      placeCards = {placeCards} />
  );
};

App.propTypes = {
  countPlaces: PropTypes.number.isRequired,
  placeCards: PropTypes.array.isRequired,
};

export default App;

