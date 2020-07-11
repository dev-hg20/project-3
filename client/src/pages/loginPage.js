import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";
const axios = require("axios");

function loginPage({ history }) {
  const [usernameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const { setUser } = useContext(AuthContext);

  async function loginUser(usernameInput, passwordInput) {
    return axios.post("/api/login", {
      name: usernameInput,
      password: passwordInput,
    });
  }

  // Event handler for login form submit - validate user details and redirect to the homepage
  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      console.log(usernameInput, passwordInput); //reading name and password
      if (!usernameInput || !passwordInput) {
        return;
      }
      const result = await loginUser(usernameInput, passwordInput);
      setUser(result.data);
      history.push("/");
    } catch (error) {
      if (error.status === 401) {
        return "Incorrect user name or password!";
      }
      console.log(error);
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
                onChange={(e) => setUserNameInput(e.target.value)}
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
                onChange={(e) => setPasswordInput(e.target.value)}
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
              <Link to="/signin">Don't have an account? Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(loginPage);
