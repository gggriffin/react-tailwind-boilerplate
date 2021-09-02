import React from "react";
import { QuestionAsked } from "./QuestionAsked";
import { InfoHeaderText } from "../Wrappers/InfoHeaderText";
import { InfoTile } from "../Wrappers/InfoTile";

export const QuestionView = () => {
  return (
    <div className='h-full flex flex-col  text-green-primary mt-8'>
      <InfoHeaderText>Frequently Asked Questions</InfoHeaderText>
      <InfoTile>
        <QuestionAsked>Is The Deadwoods open rain or shine?</QuestionAsked>
        <div>
          No. This attraction is entirely outdoors, and therefore will be
          weather dependent. Light rain or cold weather will not affect this
          event, but heavy downpours or other extreme conditions may. Check here
          in the days leading up to the vent for weather cancellation
          information. November 6th will be our make up day.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>What is the best time to arrive?</QuestionAsked>
        <div>
          Gates open at 7:00pm, with the first groups entering the attraction at
          sundown.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Are there any age restrictions?</QuestionAsked>
        <div>
          We recommend that children under the age of 14 be acommpanied by an
          adult. The attraction is intended to be frightening, so young children
          may become upset or scared. You know your child better than anyone,
          the decision is up to you.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>What is the parking situation?</QuestionAsked>
        <div>
          There is ample parking available, no extra cost. Vehicles will be
          parked on flat, grassy terrain , not on pavement or gravel. Keep this
          in mind if the ground is soggy from rain.
        </div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Will there be restrroms available?</QuestionAsked>
        <div>Yes, we will provide portable toilets for public use.</div>
      </InfoTile>
      <InfoTile>
        <QuestionAsked>Can tickets be purchased in advance?</QuestionAsked>
        <div>No, tickets must be purchased on site.</div>
      </InfoTile>
    </div>
  );
};
