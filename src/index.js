import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
//import * as serviceWorker from "./serviceWorker";
import reducerManager from "./reducers/reducerManager";
import { createStore } from "redux";
import { Provider } from "react-redux";	

/*

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducerManager);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);*/

const store = createStore(
  reducerManager,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const url = process.env.API_URL;
ReactDOM.render(
  <Provider store={store}>
    <h1>{process.env.API_URL}</h1>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
