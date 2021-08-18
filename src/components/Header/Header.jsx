import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <div className="h-28 flex items-center justify-center font-mono text-4xl text-white text-center border-8 border-white">
        <h1>Deadwoods</h1>
      </div>
    </Link>
  );
};
