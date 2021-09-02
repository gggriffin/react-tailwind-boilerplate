import React from "react";
import { TitleIntro } from "./TitleIntro";
import { InfoTile } from "../Wrappers/InfoTile";
export const TitleView = () => {
  return (
    <div className='mt-8'>
      <TitleIntro />
      <InfoTile>
        Welcome to The Deadwoods, where scares come easy and thrills are many.
        The creatures of the night beckon you to take a scream filled tour
        through our haunted corn trail, where you will come face-to-face with
        your worst fears and nightmares. If you have the nerve after, climb on
        board our hayride of terror as it transports you through a dark forest
        filled with creeps, specters, and killers sure to make your insides
        gurgle. We wish you the best of luck clinging to what remains of your
        sanity after your journey through this Hellscape. Come see us, we dare
        you... ˝
      </InfoTile>
    </div>
  );
};
