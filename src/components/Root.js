import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import List from "./List/List";
import Detail from "./Detail/Detail";
import About from "./About/About";

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={List} />
      <Route exact path="/:id" component={Detail} />
      <Route exact path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default Root;
