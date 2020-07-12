import React, { useContext, useEffect, useState } from "react";
import LeftMenu from "../components/LeftMenu";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import { AuthContext } from "../components/Context/AuthContext";

function homePage() {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/user/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <div>
            <ProfileCard fullname={user.dataValues.fullName}></ProfileCard>
            <LeftMenu></LeftMenu>
          </div>
        </div>
        <div className="col s8">
          {restaurants.map((item) => (
            <Card name={user.dataValues.name}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default homePage;
