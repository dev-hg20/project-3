import React from "react";
import ProfileCard from "../components/profileCard";

function profilePage() {
  const { userState } = this.state;
  return (
    <div class="container">
      {userState.map((user, index) => {
        return <ProfileCard key={index} user={user} />;
      })}

      <div></div>
      <div class="blue-grey-text left-align hidden user-profile-image">
        <h5 class="user-profile-title">My Favourites</h5>
      </div>
    </div>
  );
}

export default profilePage;
