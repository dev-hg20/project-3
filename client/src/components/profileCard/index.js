import React from "react";

function ProfileCard(props) {
  return (
    <div>
      <div class="card">
        <div class="card-content s12 center-align">
          <img
            src="/assets/images/user_avatar.png"
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
