import React, { useState } from "react";
import SimpleRating from "../SimpleRating";
import AddButton from "../AddButton";
// import Box from "@material-ui/core/Box";

function Cards(props) {
  const [rating] = useState(props.averageRating);

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.name}</span>
            <ul>
              <li>Must Try: {props.mustHave}</li>
              <li>Location: {props.location}</li>
              <li>Price: {props.price}</li>
              {/* <li>Rating:{props.averageRating}</li> */}
              <br></br>
              <SimpleRating value={props.averageRating}></SimpleRating>
            </ul>
            <AddButton></AddButton>
          </div>
          <div className="card-action">
            <a href="value">This is a link to the restaurant</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
