import React from "react";
import { Link } from "react-router-dom";

export const TitleMain = () => {
  return (
    <div className='font-main-content-text lg:mt-60 text-white text-4xl text-center'>
      <Link to='/faq'>
        <h1>MORE INFO HERE</h1>
      </Link>
    </div>
  );
};
