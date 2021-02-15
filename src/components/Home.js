import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="homepage">
        <div className="homepage__search_bar">
          <div className="homepage__search_bar--title">Find person by name</div>
          <form className="homepage__search_bar--form">
            <input className="homepage__search_bar--input" type="text" />
            <button className="homepage__search_bar--button" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="homepage__separator">OR</div>
        <Link to="/people" className="homepage__link">
          <div className="homepage__link--title">
            Browse all Brastlewark&apos;s People &rarr;
          </div>
        </Link>
      </div>
    </>
  );
}
