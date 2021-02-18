import React from "react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";

export default function Breadcrumbs({ items }) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        return (
          <div className="breadcrumbs__item" key={item.label}>
            <Link
              className="breadcrumbs__item--link"
              to={!isCurrentPage ? item.to : "#"}
            >
              {item.label}{" "}
              {!isCurrentPage ? (
                <ChevronsRight className="breadcrumbs__item--separator" />
              ) : null}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
