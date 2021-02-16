import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function PersonDetails() {
  let { personId } = useParams();
  const people = useSelector((store) => store.people);

  const [person] = people.filter((person) => person.id === +personId);

  return (
    <div className="person_details">
      <div className="person__avatar"></div>
      <div className="person__name">{person.name}</div>
      <div className="person__details"></div>
    </div>
  );
}
