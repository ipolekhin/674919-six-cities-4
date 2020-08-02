import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import App from "./components/app/app.jsx";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator as SiteOperation} from "./reducer/site/site.js";
import {createApi} from "./api.js";

const api = createApi(() => {});
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(DataOperation.getOffersList());

ReactDOM.render(
    <Provider
      store = {store}
    >
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
