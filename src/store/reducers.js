import { SAVE_PEOPLE } from "./actions";

let initialState = {
  people: [],
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
