import React from "react";

function Nav() {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="">A link</a>
          </li>
          <li>
            <a href=""> A second link</a>
          </li>
          <li>
            <a href="">A third link</a>
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
// <nav>
//   <div class="nav-wrapper"></div>
// </nav>
