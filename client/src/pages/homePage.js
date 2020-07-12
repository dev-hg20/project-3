import React, { useContext } from "react";
import LeftMenu from "../components/LeftMenu";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import { AuthContext } from "../components/Context/AuthContext";

function homePage() {
  const { user } = useContext(AuthContext);
  return (
    <div class="container">
      <div class="row">
        <div class="col s4">
          <div>
            <ProfileCard fullname={user.dataValues.fullName}></ProfileCard>
            <LeftMenu></LeftMenu>
          </div>
        </div>
        <div class="col s8">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default homePage;
