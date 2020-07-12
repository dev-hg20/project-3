import React from "react";
import image from "../Asset/user_avatar.png";

function ProfileCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-content s12 center-align">
          <img
            src={image}
            alt="user avatar"
            className="circle responsive-img avatar-img"
          ></img>
          <div className="title">{props.fullname}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
