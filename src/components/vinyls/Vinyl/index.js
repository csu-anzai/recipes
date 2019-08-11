import React from "react";

const Vinyl = (props) => {
  return (
    <tr>
      <td>{props.artist}</td>
      <td>{props.album}</td>
      <td>{props.year}</td>
    </tr>
  );
}

export default Vinyl;