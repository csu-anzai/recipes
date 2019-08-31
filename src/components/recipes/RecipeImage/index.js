import React from "react";

const RecipeImage = props => {
  if (!props.id) return null;

  const imageSource = require(`../../../resources/images/recipes/${props.id}.jpg`);
  return <img src={imageSource} className="recipeImage" alt={props.id} />;
};

export default RecipeImage;
