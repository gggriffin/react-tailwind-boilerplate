import React from "react";
import { TitleIntro } from "./TitleIntro";
import { TitleMain } from "./TitleMain";
export const TitleView = () => {
  return (
    <div className="h-full flex flex-col gap-y-20 mt-10">
      <TitleIntro />
      <TitleMain />
    </div>
  );
};
