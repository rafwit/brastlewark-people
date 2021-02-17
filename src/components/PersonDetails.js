import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Avatar from "react-avatar";

import Breadcrumbs from "./Breadcrumbs";
import useMediaQuery from "../utils/useMediaQuery";

export default function PersonDetails() {
  let { id } = useParams();
  const people = useSelector((store) => store.people);
  const profilePictureToggle = useMediaQuery("(max-width: 1024px)");
  const avatarSizeDecrease = useMediaQuery("(max-width: 700px)");

  useEffect(() => {}, [profilePictureToggle, avatarSizeDecrease]);

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
        {profilePictureToggle ? (
          <Avatar
            className="person_details__avatar"
            name={person.name}
            round={true}
            size={avatarSizeDecrease ? "10rem" : "20rem"}
            alt="avatar"
          />
        ) : (
          <img
            className="person_details__picture"
            src={person.thumbnail}
            alt="profile pic"
          ></img>
        )}

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

        <div className="person_details__other">
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
      </div>
    </>
  );
}
