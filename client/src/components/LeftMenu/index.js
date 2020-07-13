import React from "react";

function LeftMenu(props) {
  return (
    <div>
      <ul className="collection">
        <a href="#!" className="collection-item">
          {props.name}
        </a>
      </ul>
    </div>
  );
}

export default LeftMenu;
