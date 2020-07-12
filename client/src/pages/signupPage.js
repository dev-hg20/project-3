import React, { useState } from "react";
const axios = require("axios");

function signupPage() {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [fullNameInput, setFullNameInput] = useState();
  const [passwordConfirmInput, setPasswordConfirmInput] = useState();

  // Event handler for signup form submit - validate user details and redirect to the homepage
  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      console.log("clicked");
      console.log(emailInput, passwordInput, fullNameInput);

      // Call API to log the user in
      axios.post("/api/signup", {
        email: emailInput,
        password: passwordInput,
        fullName: fullNameInput,
      });

      //If successful, we are redirected to the members page
      if (passwordInput === passwordConfirmInput) {
        window.location.replace("/");
      }
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
                value={fullNameInput}
                type="text"
                className="validate"
                onChange={(e) => setFullNameInput(e.target.value)}
              ></input>
              <label htmlFor="full-name-input">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={emailInput}
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
                value={passwordInput}
                type="password"
                className="validate"
                onChange={(e) => setPasswordInput(e.target.value)}
              ></input>
              <label htmlFor="password-input">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                value={passwordConfirmInput}
                type="password"
                className="validate"
                onChange={(e) => setPasswordConfirmInput(e.target.value)}
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
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signupPage;
