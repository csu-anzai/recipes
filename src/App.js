import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Recipes from "./components/Recipes";
import Pole from "./components/Pole";
import Vinyls from "./components/Vinyls";
import Gigs from "./components/Gigs";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/recipes" component={Recipes} />
        <Route path="/pole" component={Pole} />
        <Route path="/vinyls" component={Vinyls} />
        <Route path="/gigs" component={Gigs} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
