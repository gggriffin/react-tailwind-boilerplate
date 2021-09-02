import React from "react";
import { VolunteerIntro } from "./VolunteerIntro";
import { VolunteerMain } from "./VolunteerMain";

export const VolunteerView = () => {
  return (
    <div className='h-full flex flex-col  text-green-primary mt-6'>
      <VolunteerIntro />
      <VolunteerMain />
    </div>
  );
};
