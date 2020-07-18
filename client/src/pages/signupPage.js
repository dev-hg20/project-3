import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";

const axios = require("axios");

function signupPage({ history }) {
  const { setUser } = useContext(AuthContext);
  // const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({});

  const handleInputChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value });

  // Event handler for signup form submit - validate user details and redirect to the homepage
  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log("sucess");
    try {
      if (formState.password !== formState.confirmPassword) return;
      // Call API to log the user in
      const response = await axios.post("/api/signup", {
        email: formState.email,
        password: formState.password,
        fullName: formState.fullName,
      });
      console.log(response.data);
      setUser({ dataValues: response.data });
      history.push("/");

      //If successful, we are redirected to the members page
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="card-panel login-panel">
        <form className="signup">
          <div className="row">
            <div className="input-field col s12 ">
              <h5 className="center-left ltc-heading">Create User Account</h5>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={formState.fullName || ""}
                type="text"
                name="fullName"
                className="validate"
                onChange={handleInputChange}
              ></input>
              <label htmlFor="full-name-input">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={formState.email || ""}
                type="text"
                name="email"
                className="validate"
                onChange={handleInputChange}
              ></input>
              <label htmlFor="name-input">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={formState.password || ""}
                type="password"
                name="password"
                className="validate"
                onChange={handleInputChange}
              ></input>
              <label htmlFor="password-input">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={formState.confirmPassword || ""}
                type="password"
                name="confirmPassword"
                className="validate"
                onChange={handleInputChange}
              ></input>
              <label htmlFor="password-confirm-input">Confirm Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <button
                className="btn waves-effect waves-light rounded"
                type="submit"
                onClick={handleFormSubmit}
              >
                Sign in
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(signupPage);
