import React from "react";
import { Link } from "react-router-dom";

//#5EFC8D
//#06d6a0
//#09E85E

export const Header = () => {
  return (
    <Link to='/'>
      <div className='my-6 text-green-primary items-center justify-center font-header-font text-center text-6xl lg:text-9xl'>
        <div className='font-header-text'>DEAD</div>
        <div className='font-header-text'>WOODS</div>
      </div>
    </Link>
  );
};