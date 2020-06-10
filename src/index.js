import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {getRandomIntegerNumber} from "./utils/common";

const MAX_COUNT_PLACES = 1000;
const Settings = {
  COUNT_PLACES: getRandomIntegerNumber(0, MAX_COUNT_PLACES),
};

ReactDOM.render(
    <App
      countPlaces = {Settings.COUNT_PLACES} />,
    document.querySelector(`#root`)
);
