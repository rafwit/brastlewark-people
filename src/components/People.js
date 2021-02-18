import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { X } from "react-feather";

import {
  clearSearchCriteria,
  getPeople,
  resetItemsOnPageCount,
  saveFilteredPeople,
  showMorePeople,
} from "../store/actions";
import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function People() {
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  let filteredPeopleBeforeDispatch = [];

  const people = useSelector((store) => store.people);
  const itemsOnPageCount = useSelector((store) => store.pagination);
  const searchCriteria = useSelector((store) => store.filter.criteria.search);
  const filteredPeople = useSelector((store) => store.filter.filtered_people);

  const distpach = useDispatch();

  useEffect(() => {
    if (!people.length) {
      distpach(getPeople());
    }

    setTimeout(() => {
      setShowLoadMoreButton(true);
    }, 300);
  }, [people]);

  return (
    <div className="people">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "People" }]} />
      <SearchBar />
      <FilterBar />

      {searchCriteria === null ? (
        <>
          <div className="people__separator">
            Or browse the whole poplulation
          </div>
          <div className="people__list">
            {people
              ? people.slice(0, itemsOnPageCount).map((person) => {
                  return <PersonCard person={person} key={person.id} />;
                })
              : null}
          </div>
          {showLoadMoreButton ? (
            <LoadMoreButton
              active={itemsOnPageCount >= people.length ? false : true}
            />
          ) : null}
        </>
      ) : (
        <>
          <div className="people__search_criteria">
            <div className="people__search_criteria--value">
              Searched for: &quot;{searchCriteria}&quot;
            </div>
            <button
              className="people__search_criteria--clear_button"
              onClick={() => {
                distpach(clearSearchCriteria());
                distpach(resetItemsOnPageCount());
              }}
            >
              <X size="2rem" />
            </button>
          </div>

          <div className="people__list">
            {filteredPeople.length === 0 ? (
              people.map((person) => {
                if (
                  person.name
                    .replaceAll(" ", "")
                    .toLowerCase()
                    .includes(searchCriteria.replaceAll(" ", "").toLowerCase())
                ) {
                  filteredPeopleBeforeDispatch.push(person);
                }
                if (
                  people.indexOf(person) === people.length - 1 &&
                  filteredPeopleBeforeDispatch.length > 0
                ) {
                  distpach(saveFilteredPeople(filteredPeopleBeforeDispatch));
                }
              })
            ) : (
              <>
                <div className="people__list">
                  {filteredPeople.slice(0, itemsOnPageCount).map((person) => {
                    return <PersonCard person={person} key={person.id} />;
                  })}
                </div>
                {showLoadMoreButton ? (
                  <LoadMoreButton
                    active={filteredPeople.length >= itemsOnPageCount}
                  />
                ) : null}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function PersonCard({ person }) {
  const [name, surname] = person.name.split(" ");
  return (
    <Link className="person" to={`/people/${person.id}/${name}${surname}`}>
      <div className="person__name">{person.name}</div>
    </Link>
  );
}

function LoadMoreButton({ active, itemsToDisplay = 50 }) {
  const distpach = useDispatch();
  return (
    <button
      className="load_more_button"
      style={{
        backgroundColor: active ? "#ca5157" : "#c6c5c5",
      }}
      onClick={() => distpach(showMorePeople(itemsToDisplay))}
      disabled={!active ? true : false}
    >
      {active ? "Load more" : "That's all"}
    </button>
  );
}
