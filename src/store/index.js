import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  paginationReducer,
  peopleReducer,
  searchCriteriaReducer,
} from "./reducers";

const appReducers = combineReducers({
  people: peopleReducer,
  pagination: paginationReducer,
  search_criteria: searchCriteriaReducer,
});

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
