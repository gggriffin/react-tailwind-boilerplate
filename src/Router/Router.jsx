import React from "react";
import { FoundationView } from "../components/FoundationView/FoundationView";
import { TitleView } from "../components/TitleView/TitleView";
import { QuestionView } from "../components/QuestionView/QuestionView";
import { VolunteerView } from "../components/VolunteerView/VolunteerView";
import { Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Switch>
      <Route path='/faq'>
        <QuestionView />
      </Route>
      <Route path='/volunteer'>
        <VolunteerView />
      </Route>
      <Route path='/foundation'>
        <FoundationView />
      </Route>
      <Route path='/'>
        <TitleView />
      </Route>
    </Switch>
  );
};
