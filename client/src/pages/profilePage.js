import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "../components/profileCard";
import Card from "../components/RestaurantCard";
import Quote from "../components/Quote";
import { AuthContext } from "../components/Context/AuthContext";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

function profilePage() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantNameInput, setRestaurantNameInput] = useState();
  const [mustTryInput, setMustTryInput] = useState();
  const [locationInput, setLocationInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [cuisines, setCuisines] = useState([]);
  const [cuisineId, setCuisineId] = useState([]);

  //For rendering restaurant cards
  useEffect(() => {
    fetch("http://localhost:8080/api/restaurant")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  //For rendering dropdown cuisine list
  useEffect(() => {
    fetch("http://localhost:8080/api/restaurant/category")
      .then((res) => res.json())
      .then((data) => {
        setCuisines(data);
        console.log("effect");
      });
  }, []);

  // Event handler for adding a restaurant
  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      // console.log(user.dataValues.id);
      console.log(cuisineId);

      //call to post restaurant info
      axios.post("/api/restaurant", {
        name: restaurantNameInput,
        mustHave: mustTryInput,
        location: locationInput,
        price: priceInput,
        CuisineId: cuisineId,
        UserId: user.dataValues.id,
      });
      console.log(
        restaurantNameInput,
        mustTryInput,
        locationInput,
        priceInput,
        cuisineId,
        user.dataValues.id
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="row s12">
        <div className="col s4 center-align">
          <div className="blue-grey-text left-align hidden user-profile-image">
            <ProfileCard
              width="25"
              height="25"
              fullname={user.dataValues.fullName}
            />
          </div>
        </div>
        <div className="col s8 center-align">
          <Quote></Quote>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <h5 className="user-profile-title">My Favourites</h5>
          <div>
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id={restaurantNameInput}
                    type="text"
                    className="validate"
                    onChange={(e) => setRestaurantNameInput(e.target.value)}
                  />
                  <label for="first_name">Restaurant Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id={mustTryInput}
                    type="text"
                    className="validate"
                    onChange={(e) => setMustTryInput(e.target.value)}
                  />
                  <label for="first_name">Must Try</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s4">
                  <input
                    id={locationInput}
                    type="text"
                    className="validate"
                    onChange={(e) => setLocationInput(e.target.value)}
                  />
                  <label for="first_name">Location </label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    CBD/Russell St
                  </span>
                </div>
                <div className="input-field col s4">
                  <input
                    id={priceInput}
                    type="text"
                    className="validate"
                    onChange={(e) => setPriceInput(e.target.value)}
                  />
                  <label for="first_name">Price</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    {" "}
                    $ / $$ / $$$ / $$$$ / $$$$${" "}
                  </span>
                </div>
                <FormControl classes={classes.formControl} variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Cuisine
                  </InputLabel>
                  <Select
                    native
                    label="Cuisine"
                    inputProps={{
                      name: "cuisine",
                      id: "outlined-age-native-simple",
                    }}
                    onChange={(e) => {
                      setCuisineId(e.target.value);
                    }}
                  >
                    <option aria-label="None" value="" />
                    {cuisines.map((cuisine) => {
                      return <option value={cuisine.id}>{cuisine.name}</option>;
                    })}
                  </Select>
                </FormControl>

                <br></br>
              </div>
              <button
                className="btn waves-effect waves-light rounded"
                type="submit"
                onClick={handleFormSubmit}
              >
                ADD A RESTAURANT
              </button>
            </form>
          </div>

          <div>
            {restaurants.map((restaurant) => {
              return (
                <Card
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
    </div>
  );
}

export default profilePage;
