import React from "react";
// import { Link } from "@material-ui/core";

function LeftMenu(props) {
  return (
    <div>
      <ul className="collection">
        <a className="collection-item" onClick={props.onClick} id={props.id}>
          {props.name}
        </a>
      </ul>
    </div>
  );
}

export default LeftMenu;
