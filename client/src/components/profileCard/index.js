import React from "react";
import image from "../Asset/user_avatar.png";

function ProfileCard(props) {
  return (
    <div>
      <div class="card">
        <div class="card-content s12 center-align">
          <img
            src={image}
            alt="user avatar"
            class="circle responsive-img avatar-img"
          ></img>
          <div class="title">{props.fullname}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
