import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFilterCriteriaProfessions,
  clearFilterCriteriaProfessions,
} from "../store/actions";

export default function FilterBar() {
  const [showFilterForm, setShowFilterForm] = useState(false);

  const people = useSelector((store) => store.people);
  const filterCriteria = useSelector((store) => store.filter.criteria);
  const dispatch = useDispatch();

  function handleCheck(e) {
    console.log(e.target.checked);
    return !e.target.checked;
  }

  useEffect(() => {
    let professions = [];
    people &&
      people.map((person) => {
        person.professions.map((profession) => {
          if (!professions.includes(profession)) {
            professions.push(profession);
          }
        });
      });
    dispatch(addFilterCriteriaProfessions(professions));

    return () => dispatch(clearFilterCriteriaProfessions);
  }, [people]);

  return (
    <div className="filter_bar">
      <div className="filter_bar__heading">
        <div className="filter_bar__heading--title">Filter people</div>
        <button
          className="filter_bar__heading--button"
          type="submit"
          onClick={() => setShowFilterForm(!showFilterForm)}
        >
          Show filters
        </button>
      </div>
      {console.log(showFilterForm)}
      <div
        className="filter_bar__form--container"
        style={{
          animation: showFilterForm ? "slideIn 0.5s" : "slideOut 0.5s",
          height: showFilterForm ? "20vh" : "0",
          opacity: showFilterForm ? "1" : "0",
        }}
      >
        <form className="filter_bar__form">
          {console.log(filterCriteria.professions)}
          {filterCriteria.professions.map((profession) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={profession}
                  name={profession}
                  value={profession}
                  key={profession}
                  onChange={() => handleCheck()}
                />
                <label htmlFor={profession}>{profession}</label>
              </>
            );
          })}
        </form>
      </div>
    </div>
  );
}
