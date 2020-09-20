import { createStore, applyMiddleware, compose } from "redux";
import createSaga from "redux-saga";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";
import saga from "./saga";
import reducer from "./reducer";
import { useMemo } from "react";

const sagaMiddleware = createSaga();

function initStore(preloadedState = initialState) {
  const newStore = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(saga);

  return newStore;
}
let store;

export const initializeStore = (preloadedState = {}) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
