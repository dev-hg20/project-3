import React from "react";

function profilePage() {
  // const classes = useStyles();

  return (
    <div class="container">
      <div class="card">
        <div class="card-content s12 center-align">
          <img
            src="/assets/images/user_avatar.png"
            alt="user avatar"
            class="circle responsive-img avatar-img"
          ></img>
          <div class="title"></div>
        </div>
      </div>
      <div class="blue-grey-text left-align hidden user-profile-image">
        <h5 class="user-profile-title">My Favourites</h5>
      </div>
    </div>
  );
}

export default profilePage;
