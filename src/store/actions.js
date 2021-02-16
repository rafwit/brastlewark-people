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

export const SAVE_PEOPLE = "SAVE_PEOPLE";
