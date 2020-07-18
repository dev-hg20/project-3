import React, { useState, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthContext";
const axios = require("axios");

function loginPage({ history }) {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const { setUser } = useContext(AuthContext);

  async function loginUser(emailInput, passwordInput) {
    return axios.post("/api/login", {
      email: emailInput,
      password: passwordInput,
    });
  }

  // Event handler for login form submit - validate user details and redirect to the homepage
  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      if (!emailInput || !passwordInput) {
        return;
      }
      const result = await loginUser(emailInput, passwordInput);
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
                // placeholder="Email"
                id={emailInput}
                type="text"
                className="validate"
                onChange={(e) => setEmailInput(e.target.value)}
              ></input>
              <label htmlFor="name-input">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                // placeholder="Password"
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
                {/* {handleFormSubmit(false) ? (
                  <div>Sign in Success</div>
                ) : (
                  <div>Maybe try again? Incorrect Password/Email</div>
                )} */}
                Login
              </button>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <Link to="/signup">Don't have an account? Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(loginPage);
