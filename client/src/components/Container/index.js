import React from "react";
import { Container } from "@material-ui/core";

function Containers(props) {
  return <Container maxWidth="lg">{props.children}</Container>;
}

export default Containers;
