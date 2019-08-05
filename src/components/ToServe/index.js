import React from "react";

const ToServe = (props) => {
  if (!props.toServe) return null;

  return (
    <ul>
      to serve
      {props.toServe.map((value, index) => {
        return (<li key={index}>{value}</li>)
      })}
    </ul>
  )
}

export default ToServe;