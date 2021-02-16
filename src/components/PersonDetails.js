import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

export default function PersonDetails() {
  let { id } = useParams();
  const people = useSelector((store) => store.people);

  const [person] = people.filter((person) => person.id === +id);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "People", to: "/people" },
          { label: person.name },
        ]}
      />

      <div className="person_details">
        <div className="person__avatar"></div>
        <div className="person__name">{person.name}</div>
        <div className="person__details"></div>
      </div>
    </>
  );
}
