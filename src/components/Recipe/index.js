import React, { useState } from "react";

import RecipeImage from "../RecipeImage";
import Ingredients from "../Ingredients";
import Method from "../Method";
import ToServe from "../ToServe";

const Recipe = (props) => {

  const [clicked, switchClickStatus] = useState(false);

  return (
    <div className="recipe" id={props.id} onClick={() => switchClickStatus(!clicked)}>
      <span className="recipeTitle">{props.title}</span>
      <div className="recipeDetail">
        {clicked ?
        (<>
          <Ingredients makes={props.makes} ingredients={props.ingredients}/>
          <ToServe toServe={props.toServe}/>
          <Method method={props.method}/>
        </>) : null
        }
      </div>
      <RecipeImage id={props.id} />
    </div>
  );
}

export default Recipe;