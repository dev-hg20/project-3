import React from "react";
import LeftMenu from "../components/LeftMenu";
import Card from "../components/Card";

function homePage() {
  return (
    <div class="container">
      <div class="row">
        <div class="col s4">
          <LeftMenu></LeftMenu>
        </div>
        <div class="col s8">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default homePage;
