import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);

function SimpleRating() {
  return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
}

export default SimpleRating;
