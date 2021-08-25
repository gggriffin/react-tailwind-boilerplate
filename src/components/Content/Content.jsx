import React from "react";
import { FoundationView } from "../FoundationView/FoundationView";
import { TitleView } from "../TitleView/TitleView";
import { QuestionView } from "../QuestionView/QuestionView";
import { VolunteerView } from "../VolunteerView/VolunteerView";
import { Switch, Route } from "react-router-dom";

export const Content = () => {
  return (
      <Switch>
        <Route path="/faq">
          <QuestionView />
        </Route>
        <Route path="/volunteer">
          <VolunteerView />
        </Route>
        <Route path="/foundation">
          <FoundationView />
        </Route>
        <Route path="/">
          <TitleView />
        </Route>
      </Switch>
  );
};
