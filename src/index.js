import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from "./components/app/app.jsx";
// import {generatePlaceCards} from "./mocks/offers";
// import {getRandomIntegerNumber} from "./utils/common";

// const MAX_COUNT_PLACES = 24;
// const placeCards = generatePlaceCards(MAX_COUNT_PLACES);
// const countPlaces = getRandomIntegerNumber(1, MAX_COUNT_PLACES);
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider
      store = {store}
    >
      <App
        // countPlaces = {countPlaces}
        // placeCards = {placeCards}
      />
    </Provider>,
    document.querySelector(`#root`)
);
