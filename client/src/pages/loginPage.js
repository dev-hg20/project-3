import React from "react";
import Modal from "../components/Modal";

const axios = require("axios");

function loginPage() {
  //Make a request for a user
  async function loginUser(userData) {
    return axios({
      method: "POST",
      url: "/api/login",
      data: userData,
    });
  }

  // Event handler for login form submit - validate user details and redirect to the homepage
  const { usernameInput } = "#name-input";
  const { passwordInput } = "#password-input";

  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      console.log("clicked2");

      const userData = {
        name: { usernameInput },
        password: { passwordInput },
      };
      console.log({ usernameInput }, { passwordInput });

      if (!userData.name || !userData.password) {
        return "Please enter a user name and password!";
      }

      // const result = await loginUser(userData);
      // if (result) {
      //   window.location.replace("/");
      // }
    } catch (error) {
      if (error.status === 401) {
        return "Incorrect user name or password!";
      }
      // handleError(error);
    }
  }

  return (
    <div className="container">
      <div className="card-panel login-panel">
        <form className="login">
          <div className="row">
            <div className="input-field col s12 ">
              <h5 className="center-left ltc-heading">Sign in</h5>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                placeholder="User Name"
                id={usernameInput}
                type="text"
                className="validate"
              ></input>
              <label htmlFor="name-input">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                placeholder="Password"
                id={passwordInput}
                type="password"
                className="validate"
              ></input>
              <label htmlFor="password-input">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <button
                className="btn waves-effect waves-light rounded"
                type="submit"
                onClick={handleFormSubmit}
              >
                Login
              </button>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <a href="/signin">Don't have an account? Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginPage;
