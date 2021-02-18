import axios from "axios";
import {
  ADD_FILTER_CRITERIA_PROFFESIONS,
  ADD_SEARCH_CRITERIA,
  CLEAR_FILTER_CRITERIA_PROFFESIONS,
  CLEAR_SEARCH_CRITERIA,
  RESET_MAX_ITEMS_ON_PAGE_COUNT,
  SAVE_FILTERED_PEOPLE,
  SAVE_PEOPLE,
  SHOW_MORE_PEOPLE,
} from "./types";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function getPeople() {
  return (dispatch) => {
    axios
      .get(BASE_URL)
      .then((response) => {
        dispatch({
          type: SAVE_PEOPLE,
          people: response.data.Brastlewark,
        });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };
}

export function showMorePeople(numberOfPeople) {
  return {
    type: SHOW_MORE_PEOPLE,
    payload: numberOfPeople,
  };
}

export function resetItemsOnPageCount() {
  return {
    type: RESET_MAX_ITEMS_ON_PAGE_COUNT,
    payload: 50,
  };
}

export function updateSearchCriteria(searchedString) {
  return {
    type: ADD_SEARCH_CRITERIA,
    payload: searchedString,
  };
}

export function clearSearchCriteria() {
  return {
    type: CLEAR_SEARCH_CRITERIA,
    payload: null,
  };
}

export function saveFilteredPeople(people) {
  return {
    type: SAVE_FILTERED_PEOPLE,
    payload: people,
  };
}

export function addFilterCriteriaProfessions(professions) {
  return {
    type: ADD_FILTER_CRITERIA_PROFFESIONS,
    payload: professions,
  };
}

export function clearFilterCriteriaProfessions() {
  return {
    type: CLEAR_FILTER_CRITERIA_PROFFESIONS,
    payload: [],
  };
}
