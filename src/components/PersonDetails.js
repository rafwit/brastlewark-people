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
        <Avatar src={person.thumbnail} round={true} size={"10rem"} />
        <div className="person_details__name">{person.name}</div>
        <div className="person_details__details">
          <div className="person_details__details--age"></div>
          <div className="person_details__details--weight"></div>
          <div className="person_details__details--height"></div>
          <div className="person_details__details--hair_color"></div>
        </div>
        <div className="person_details__professions">
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
          <div className="person_details__friends">
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
                      {friend}
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
