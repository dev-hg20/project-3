import React, { useContext, useEffect, useState } from "react";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import { AuthContext } from "../components/Context/AuthContext";

function profilePage() {
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
    <div class="container">
      <div className="row">
        <div className="col s12">
          <div class="blue-grey-text left-align hidden user-profile-image">
            <ProfileCard fullname={user.dataValues.fullName} />
          </div>
          <h5 class="user-profile-title">My Favourites</h5>
          <div>
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
    </div>
  );
}

export default profilePage;
