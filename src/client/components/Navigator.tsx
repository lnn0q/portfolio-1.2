import "../styles/Navigator.css";
import React from "react";
const Navigation = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="#">
          &#xf015;<div>Home</div>
        </a>
        <a href="#">
          &#xf68d;<div>Contacts</div>
        </a>
        <a href="#">
          &#xf1b2;<div>Projects</div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
