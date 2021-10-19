import React from "react";
import { NavButton } from "../NavButton/NavButton";

export const NavBar = () => {
  return (
    <div className='w-100'>
      <div className='flex w-100 h-16 items-center justify-around text-gray-300 text-white font-main-content-text'>
        <NavButton link='/faq' title='Details' />
        <NavButton link='/volunteer' title='Volunteer' />
      </div>
    </div>
  );
};
