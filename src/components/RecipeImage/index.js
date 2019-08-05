import React from "react";

const Image = (props) => {
  if (!props.id) return null;
  
  const imageSource = require(`../../resources/images/${props.id}.jpg`); 
  return <img src={imageSource} className = "recipeImage" alt={props.id}/>;
}

export default Image;