import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Nav() {
  const { setUser } = useContext(AuthContext);
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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout" onClick={(e) => setUser(false)}>
              logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-content">
        <span className="nav-title">Let's Taco'bout Food</span>
      </div>
    </nav>
  );
}

export default Nav;
