import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
// eslint-disable-next-line react/prop-types

const App = (props) => {
  const {countPlaces} = props;

  return (
    <MainScreen
      countPlaces = {countPlaces} />
  );
};

export default App;

