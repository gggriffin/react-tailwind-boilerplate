import React from "react";
import { Link } from "react-router-dom";

//#5EFC8D
//#06d6a0
//#09E85E

export const Header = () => {
  return (
    <Link to='/'>
      <div className='my-8 text-white items-left font-header-font text-left ml-2 text-6xl lg:text-9xl'>
        <div className='font-header-text'>DEAD</div>
        <div className='font-header-text'>WOODS</div>
      </div>
    </Link>
  );
};
