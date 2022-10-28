import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { historyReducer, liveResultReducer, TWODResultReducer } from "./reducers";

const rootReducer = combineReducers({
  liveResultReducer: liveResultReducer,
  TWODResultReducer:TWODResultReducer,
  historyReducer:historyReducer
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
