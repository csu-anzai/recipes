import React, {useState} from "react";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";

import ludovico_einaudi_i_giorni from "../../resources/videos/ludovico_einaudi_i_giorni.mp4";
import sereda_i_got_you from "../../resources/videos/sereda_i_got_you.mp4";
import cruel_youth_devil_in_paradise from "../../resources/videos/cruel_youth_devil_in_paradise.mp4";
import her_focus from "../../resources/videos/her_focus.mp4";
import annie_lennox_i_put_a_spell_on_you from "../../resources/videos/annie_lennox_i_put_a_spell_on_you.mp4";


import HomeButton from "../HomeButton";

import "../../../node_modules/video-react/dist/video-react.css";
// @import "~video-react/styles/scss/video-react";

import './index.css';


const Pole = () => {
  const [video, setVideo] = useState(sereda_i_got_you);


  return (
    <div className="Pole">
      <HomeButton />
      <h2>pole</h2>
      <p>pole is a huge passion in my life</p>
      <p>I have recently loved attending choreography classes</p>
      <p>below are some videos of the routines I have learnt</p><br></br>

  

      <Player 
        // autoPlay 
        playsInline
        src={video}
        fluid={false}
        width='500'
      >
        <BigPlayButton position="center"/>
        <LoadingSpinner />
      </Player>


      <div className="routineButtons">
        <div className="routineButton" onClick={() => setVideo(sereda_i_got_you)}>Sereda - I Got You</div>
        <div className="routineButton" onClick={() => setVideo(cruel_youth_devil_in_paradise)}>Cruel Youth - Devil In Paradise</div>
        <div className="routineButton" onClick={() => setVideo(ludovico_einaudi_i_giorni)}>Ludovico Einuaudi - I Giorni</div>
        <div className="routineButton" onClick={() => setVideo(annie_lennox_i_put_a_spell_on_you)}>Annie Lenox - I Put A Spell On You</div>
        <div className="routineButton" onClick={() => setVideo(her_focus)}>H.E.R. - Focus</div>
      </div>
    </div>
  );
}

export default Pole;