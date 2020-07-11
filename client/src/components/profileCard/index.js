import React from "react";

function ProfileCard(props) {
  const { user } = props;

  return (
    <div>
      <div class="card">
        <div class="card-content s12 center-align">
          <img
            src="/assets/images/user_avatar.png"
            alt="user avatar"
            class="circle responsive-img avatar-img"
          ></img>
          <div class="title">{user.fullName}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
