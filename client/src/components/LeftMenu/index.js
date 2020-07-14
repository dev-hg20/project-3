import React, { Link } from "react";

function LeftMenu(props) {
  return (
    <div>
      <ul className="collection">
        <Link href="#!" className="collection-item">
          {props.name}
        </Link>
      </ul>
    </div>
  );
}

export default LeftMenu;
