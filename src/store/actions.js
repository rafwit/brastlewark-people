import axios from "axios";

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

export const SAVE_PEOPLE = "SAVE_PEOPLE";
export const SHOW_MORE_PEOPLE = "SHOW_MORE_PEOPLE";
export const ADD_SEARCH_CRITERIA = "ADD_SEARCH_CRITERIA";
export const CLEAR_SEARCH_CRITERIA = "CLEAR_SEARCH_CRITERIA";
export const SAVE_FILTERED_PEOPLE = "SAVE_FILTERED_PEOPLE";
export const RESET_MAX_ITEMS_ON_PAGE_COUNT = "RESET_MAX_ITEMS_ON_PAGE_COUNT";
