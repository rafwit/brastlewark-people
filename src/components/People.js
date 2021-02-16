import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getPeople } from "../store/actions";
import Breadcrumbs from "./Breadcrumbs";

export default function People() {
  const people = useSelector((store) => store.people);
  const distpach = useDispatch();

  useEffect(() => {
    if (!people.length) distpach(getPeople());
  }, [people]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "People" }]} />
      <div className="people">
        {people
          ? people.map((person) => {
              return <PersonCard person={person} key={person.id} />;
            })
          : null}
      </div>
    </>
  );
}

function PersonCard({ person }) {
  return (
    <Link className="person" to={`people/${person.id}`}>
      <div className="person__avatar"></div>
      <div className="person__name">{person.name}</div>
      <div className="person__details"></div>
    </Link>
  );
}
