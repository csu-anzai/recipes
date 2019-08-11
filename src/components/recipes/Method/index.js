import React from "react";

const Method = (props) => {
  return (
    <ol>
      method

      {props.method.map((value, index) => {
        return (
          <li key={index}>{value}</li>
        )
      })}
    </ol>
  );
}

export default Method;