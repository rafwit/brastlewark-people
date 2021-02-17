import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="homepage">
        <Link to="/people" className="homepage__link">
          <div className="homepage__link--title">
            Browse all Brastlewark&apos;s People &rarr;
          </div>
        </Link>
      </div>
    </>
  );
}
