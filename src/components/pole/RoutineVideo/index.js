import React from "react";

const RoutineVideo = props => {
  const ajc = "ajc";
  return (
    <video width="270" height="480" controls>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default RoutineVideo;
