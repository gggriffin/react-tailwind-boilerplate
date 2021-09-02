import React from "react";
import { QuestionTile } from "../QuestionView/QuestionTile";

export const VolunteerMain = () => {
  //TODO: Replace "Volunteer possibilities" container w/ InfoHeaderText
  //TODO: Refactor to VolunteerContent
  return (
    <>
      <QuestionTile>
        <p>
          We are a non-profit event, and are staffed entirely by volunteers. Any
          extra help is welcome. Minimum age for volunteering is 16. Interested
          in volunteering? Reach out to admin@deadwoods.org for more
          information.
        </p>
      </QuestionTile>
      <div className='text-center text-3xl font-bold text-green-primary'>
        Volunteer Possibilities:
      </div>
      <QuestionTile>
        <div className='text-left font-bold'>
          <li className='mb-4'>
            Scarer - Dressing in character and acting in a scene, or roaming
            around a corn trail
          </li>
          <li className='mb-4'>
            Go-For - Helping bring supplies or refreshments to volunteers in
            scenes
          </li>
          <li className='mb-4'>
            Front of House - Selling tickets, parking vehicles, helping guests
            with questions, etc.
          </li>
          <li className='mb-4'>
            Working behind the scenes to run props or effects
          </li>
        </div>
      </QuestionTile>
    </>
  );
};
