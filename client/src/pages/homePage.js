import React, { useContext, useEffect, useState } from "react";
import LeftMenu from "../components/LeftMenu";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import { AuthContext } from "../components/Context/AuthContext";

function homePage() {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurant")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setFiltered(data);
        setSearched(data);
      });
    fetch("http://localhost:8080/api/restaurant/category")
      .then((res) => res.json())
      .then((data) => {
        setCuisines(data);
      });
  }, []);

  const handleClick = (event) => {
    try {
      event.preventDefault();
      const filteredRestaurants = restaurants.filter((filter) => {
        return filter.CuisineId === parseInt(event.target.id);
      });
      setFiltered(filteredRestaurants);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (event) => {
    try {
      event.preventDefault();
      const searchedRestaurant = restaurants.filter((filter) => {
        return filter.name.toUpperCase() === searched.toUpperCase();
      });
      setFiltered(searchedRestaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <div>
            <ProfileCard fullname={user.dataValues.fullName}></ProfileCard>

            {/* Search form */}
            <div>
              <form onSubmit={handleSearch}>
                <div class="input-field">
                  <input
                    type="search"
                    required
                    id={searched}
                    placeholder="Search"
                    onChange={(e) => setSearched(e.target.value)}
                  />
                  <label class="label-icon" htmlFor="search">
                    <i class="material-icons">search</i>
                  </label>
                </div>
              </form>
            </div>

            {cuisines.map((cuisine) => {
              return (
                <LeftMenu
                  key={cuisine.id}
                  name={cuisine.name}
                  id={cuisine.id}
                  onClick={handleClick}
                />
              );
            })}
          </div>
        </div>
        <div className="col s8">
          {filtered.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                name={restaurant.name}
                mustHave={restaurant.mustHave}
                location={restaurant.location}
                price={restaurant.price}
                averageRating={restaurant.averageRating}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default homePage;
