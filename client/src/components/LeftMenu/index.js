import React from "react";
import "./style.css";

function LeftMenu(props) {
  return (
    <div className="col s12">
      <ul className="collection">
        <a
          href="#!"
          className="collection-item"
          onClick={props.onClick}
          id={props.id}
        >
          {props.name}
        </a>
      </ul>
    </div>
  );
}

export default LeftMenu;
