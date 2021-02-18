import {
  SAVE_PEOPLE,
  SHOW_MORE_PEOPLE,
  ADD_SEARCH_CRITERIA,
  CLEAR_SEARCH_CRITERIA,
  SAVE_FILTERED_PEOPLE,
  RESET_MAX_ITEMS_ON_PAGE_COUNT,
} from "./actions";

let initialState = {
  people: [],
  max_items_on_page: 50,
  filter: { criteria: { search: null }, filtered_people: [] },
};

export function peopleReducer(state = initialState.people, action) {
  switch (action.type) {
    case SAVE_PEOPLE: {
      return [...state, ...action.people];
    }
    default: {
      return state;
    }
  }
}

export function paginationReducer(
  state = initialState.max_items_on_page,
  action
) {
  switch (action.type) {
    case SHOW_MORE_PEOPLE: {
      return (state += action.payload);
    }
    case RESET_MAX_ITEMS_ON_PAGE_COUNT: {
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
}

export function filterCriteriaReducer(state = initialState.filter, action) {
  switch (action.type) {
    case ADD_SEARCH_CRITERIA: {
      state.criteria.search = action.payload;
      return state;
    }
    case CLEAR_SEARCH_CRITERIA: {
      state.criteria.search = action.payload;
      state.filtered_people = [];
      return state;
    }
    case SAVE_FILTERED_PEOPLE: {
      state.filtered_people = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
}
