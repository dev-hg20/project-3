import React from "react";
import SimpleRating from "../SimpleRating";
import AddButton from "../AddButton";
import "./style.css";

function Cards(props) {
  return (
    <div className="row">
      <div className="col s12 m8 l9 wholecard">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{props.name}</span>
            <hr></hr>
            <ul>
              <li>
                <span>Must Try: </span>
                {props.mustHave}
              </li>
              <li>
                <span>Location: </span>
                {props.location}
              </li>
              <li>
                <span>Price: </span>
                {props.price}
              </li>
              {/* <li>Rating:{props.averageRating}</li> */}
              {/* <SimpleRating value={props.averageRating}></SimpleRating> */}
            </ul>
            {/* <AddButton></AddButton> */}
          </div>
          <div className="card-action amber darken-2">
            <SimpleRating value={props.averageRating}></SimpleRating>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
