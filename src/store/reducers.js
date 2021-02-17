import { SAVE_PEOPLE, SHOW_MORE_PEOPLE } from "./actions";

let initialState = {
  people: [],
  visible_items: 50,
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
