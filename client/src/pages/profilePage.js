import React, { useContext } from "react";
import ProfileCard from "../components/profileCard";
import { AuthContext } from "../components/Context/AuthContext";

function profilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div class="container">
      <ProfileCard fullname={user.dataValues.fullName} />
      <div></div>
      <div class="blue-grey-text left-align hidden user-profile-image">
        <h5 class="user-profile-title">My Favourites</h5>
      </div>
    </div>
  );
}

export default profilePage;
