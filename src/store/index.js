import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { peopleReducer } from "./reducers";

const appReducers = combineReducers({
  people: peopleReducer,
});

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
