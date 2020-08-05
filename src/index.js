import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import App from "./components/app/app.jsx";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
// import {ActionCreator as SiteOperation} from "./reducer/site/site.js";
import {createAPI} from "./api.js";
import {AuthorizationStatus} from "./const";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};
const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(DataOperation.getOffersList());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider
      store = {store}
    >
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
