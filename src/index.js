import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generatePlaceCards} from "./mock/place-card";
import {getRandomIntegerNumber} from "./utils/common";

const MAX_COUNT_PLACES = 10;
const placeCards = generatePlaceCards(MAX_COUNT_PLACES);

const countPlaces = getRandomIntegerNumber(1, MAX_COUNT_PLACES);

ReactDOM.render(
    <App
      countPlaces = {countPlaces}
      placeCards = {placeCards} />,
    document.querySelector(`#root`)
);
