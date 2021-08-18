import React from "react";
import { Link } from "react-router-dom";

export const NavButton = (props) => {
  const { link, title } = props;
  return (
    <Link to={link}>
      <button className="rounded text-xs py-3 px-5  hover:bg-gray-800 hover:text-white min-w-min">
        {title}
      </button>
    </Link>
  );
};
