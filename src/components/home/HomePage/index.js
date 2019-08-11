import React from "react";
import { Link } from "react-router-dom";

import './index.css';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>ajc</h1>

      <div>
        <Link to="/gigs"><div id="homepage-button-gigs" className="rectangle">gigs</div></Link>
        <Link to="/pole"><div id="homepage-button-pole" className="rectangle">pole</div></Link>
        <Link to="/recipes"><div id="homepage-button-recipes" className="rectangle">recipes</div></Link>
        <Link to="/vinyls"><div id="homepage-button-vinyls" className="rectangle">vinyls</div></Link>
      </div>

    </div>
  );
}

export default HomePage;