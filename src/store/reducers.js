import {
  SAVE_PEOPLE,
  SHOW_MORE_PEOPLE,
  ADD_SEARCH_CRITERIA,
  CLEAR_SEARCH_CRITERIA,
} from "./actions";

let initialState = {
  people: [],
  visible_items: 50,
  search_criteria: null,
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

export function paginationReducer(state = initialState.visible_items, action) {
  switch (action.type) {
    case SHOW_MORE_PEOPLE: {
      return (state += action.payload);
    }
    default: {
      return state;
    }
  }
}

export function searchCriteriaReducer(
  state = initialState.search_criteria,
  action
) {
  switch (action.type) {
    case ADD_SEARCH_CRITERIA: {
      state = action.payload;
      return state;
    }
    case CLEAR_SEARCH_CRITERIA: {
      state = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
}
