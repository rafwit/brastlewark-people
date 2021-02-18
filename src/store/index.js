import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  paginationReducer,
  peopleReducer,
  filterCriteriaReducer,
} from "./reducers";

const appReducers = combineReducers({
  people: peopleReducer,
  pagination: paginationReducer,
  filter: filterCriteriaReducer,
});

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
