import React from "react";
import ProfileCard from "../profileCard";

function LeftMenu() {
  return (
    <div>
      <ProfileCard></ProfileCard>
      <div>
        <ul class="collection">
          <a href="#!" class="collection-item">
            Alvin
          </a>
          <a href="#!" class="collection-item active">
            Alvin
          </a>
          <a href="#!" class="collection-item">
            Alvin
          </a>
          <a href="#!" class="collection-item">
            Alvin
          </a>
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
