import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPeople, showMorePeople } from "../store/actions";
import Breadcrumbs from "./Breadcrumbs";

export default function People() {
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);

  const people = useSelector((store) => store.people);
  const itemsOnPageCount = useSelector((store) => store.pagination);
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
    <div className="people" id="people">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "People" }]} />
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
