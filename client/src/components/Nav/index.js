import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./style.css";

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
          {user ? (
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout" onClick={(e) => setUser(false)}>
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="nav-content">
        <span className="nav-title">Let's Taco'bout Food</span>
      </div>
    </nav>
  );
}

export default Nav;
