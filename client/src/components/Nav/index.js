import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./style.css";

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link
            href="#"
            id="small-screen-only-menu"
            className="sidenav-trigger"
            onClick={(e) => (
              <div>
                <ul className="sidenav" id="small-screen-only-menu">
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
            )}
          >
            <i className="material-icons">menu</i>
          </Link>
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

      {/* Small SCREEN */}
      <ul className="sidenav" id="small-screen-only-menu">
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
  );
}

export default Nav;
