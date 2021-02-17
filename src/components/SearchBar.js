import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchCriteria } from "../store/actions";

export default function SearchBar() {
  const [searchCriteria, setSearchCriteria] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="search_bar">
      <div className="search_bar--title">Find person by name</div>
      <form
        className="search_bar--form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateSearchCriteria(searchCriteria));
          e.target.reset();
        }}
      >
        <input
          className="search_bar--input"
          type="text"
          onChange={(e) => setSearchCriteria(e.target.value)}
          placeholder="Type name to search for a person..."
        />
        <button className="search_bar--button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
