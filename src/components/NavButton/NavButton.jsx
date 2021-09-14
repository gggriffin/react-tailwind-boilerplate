import React from "react";
import { Link } from "react-router-dom";

export const NavButton = (props) => {
  const { link, title } = props;
  return (
    <Link to={link}>
      <button className='rounded text-sm text-bold py-3 px-5 hover:bg-blue-primary hover:text-white min-w-min'>
        {title}
      </button>
    </Link>
  );
};
