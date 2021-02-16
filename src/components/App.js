import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import People from "./People";
import NavBar from "./NavBar";
import PersonDetails from "./PersonDetails";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/people" component={People}></Route>
        <Route exact path="/people/:personId" component={PersonDetails}></Route>
      </Switch>
    </div>
  );
}
