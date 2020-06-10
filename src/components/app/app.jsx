import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {countPlaces} = props;

  return (
    <MainScreen
      countPlaces = {countPlaces} />
  );
};

export default App;

