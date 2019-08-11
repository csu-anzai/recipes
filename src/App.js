import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RecipesPage from "./components/recipes/RecipesPage";
import PolePage from "./components/pole/PolePage";
import VinylsPage from "./components/vinyls/VinylsPage";
import GigsPage from "./components/gigs/GigsPage";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/pole" component={PolePage} />
        <Route path="/vinyls" component={VinylsPage} />
        <Route path="/gigs" component={GigsPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
