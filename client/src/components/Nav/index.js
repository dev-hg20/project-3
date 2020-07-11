import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
        login
      </div>
      <div className="nav-content">
        <span className="nav-title">Let's Taco'bout Food</span>
      </div>
    </nav>
  );
}

export default Nav;
