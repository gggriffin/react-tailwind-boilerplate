import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <div className="mt-12 items-center justify-center font-header-font text-white text-center text-6xl lg:text-9xl">
        <div className="font-header-text">DEAD</div>
        <div className="font-header-text">WOODS</div>
      </div>
    </Link>
  );
};
