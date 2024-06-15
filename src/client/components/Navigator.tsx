import "../styles/Navigator.css";
import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          &#xf015;<div>Home</div>
        </Link>
        <Link to="/contacts">
          &#xf68d;<div>Contacts</div>
        </Link>
        <Link to="/projects">
          &#xf1b2;<div>Projects</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
