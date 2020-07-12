import React, { useContext } from "react";
import ProfileCard from "../components/profileCard";
import { AuthContext } from "../components/Context/AuthContext";
import AddRestaurant from "../components/AddButton";

function profilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div class="container">
      <div></div>
      <div class="blue-grey-text left-align hidden user-profile-image">
        <ProfileCard fullname={user.dataValues.fullName} />
        <h5 class="user-profile-title">My Favourites</h5>
      </div>
    </div>
  );
}

export default profilePage;
