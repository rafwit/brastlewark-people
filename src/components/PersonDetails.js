import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Avatar from "react-avatar";

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
      {console.log(person)}
      <div className="person_details">
        <Avatar
          className="person_details__avatar"
          src={person.thumbnail}
          round={true}
          size={"20rem"}
        />
        <div className="person_details__basic">
          <div className="person_details__name">{person.name}</div>
          <div className="person_details__appearance">
            <div className="person_details__appearance--age">{`Age: ${person.age}`}</div>
            <div className="person_details__appearance--weight">{`Weight: ${
              Math.round(person.weight * 100) / 100
            }`}</div>
            <div className="person_details__appearance--height">{`Height: ${
              Math.round(person.height * 100) / 100
            }`}</div>
            <div className="person_details__appearance--hair_color">{`Hair color: ${person.hair_color}`}</div>
          </div>
        </div>
        <div className="person_details__professions">
          <div className="person_details__professions--header">
            Professions{" "}
          </div>
          {person.professions.map((profession) => {
            return (
              <div
                className="person_details__professions--profession"
                key={`${person.id}${person.height}${profession}`}
              >
                {profession}
              </div>
            );
          })}
        </div>

        <div className="person_details__friends">
          <div className="person_details__friends--header">Friends </div>
          {person.friends
            ? person.friends.map((friend) => {
                const [fullFriendInfo] = people.filter((person) => {
                  if (person.name.includes(friend)) {
                    return true;
                  }
                });
                const name = fullFriendInfo
                  ? fullFriendInfo.name.split(" ")
                  : undefined;

                return (
                  <Link
                    to={
                      fullFriendInfo
                        ? `/people/${fullFriendInfo.id}/${name.join("")}`
                        : "#"
                    }
                    className="person_details__friends--friend"
                    key={`${person.id}${person.height}${friend}`}
                  >
                    {friend} &rarr;
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
