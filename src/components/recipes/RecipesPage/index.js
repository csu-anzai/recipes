import React from "react";

import Recipe from "../Recipe";
import HomeButton from "../../common/HomeButton";

import "./index.css";

import { recipes } from "../../../resources/data.js";

const Recipes = () => {
  return (
    <div className="Recipes">
      {/* <HomeButton /> */}

      <h2>recipes</h2>

      <div id="recipesFlexContainer">
        {recipes.map((value, index) => {
          return !value.hide ? (
            <Recipe
              key={index}
              title={value.title}
              id={value.id}
              makes={value.makes}
              ingredients={value.ingredients}
              method={value.method}
              toServe={value.toServe}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Recipes;
