import React, { useContext, useEffect, useState } from "react";
import LeftMenu from "../components/LeftMenu";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import { AuthContext } from "../components/Context/AuthContext";

function homePage() {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurant")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurant/cuisine")
      .then((res) => res.json())
      .then((data) => {
        setCuisines(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <div>
            <ProfileCard fullname={user.dataValues.fullName}></ProfileCard>
            {cuisines.map((cuisine) => {
              return <LeftMenu name={cuisine.Cuisine.name} />;
            })}
          </div>
        </div>
        <div className="col s8">
          {restaurants.map((restaurant) => {
            return (
              <Card
                name={restaurant.name}
                mustHave={restaurant.mustHave}
                location={restaurant.location}
                price={restaurant.price}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default homePage;
