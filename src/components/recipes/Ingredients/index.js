import React from "react";

const Ingredients = (props) => {
  let ingredientsHeader = "ingredients";
  if (typeof props.makes !== "undefined") {
    ingredientsHeader += ` (makes ${props.makes})`;
  }

  return (
    <ul>
      {ingredientsHeader}
      {props.ingredients.map((value, index) => {
        return (
          <li key={index}>{value}</li>
        )
      })}
    </ul>
  );
}

export default Ingredients;