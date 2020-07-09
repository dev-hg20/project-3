import React from "react";

function signinPage() {
  // const classes = useStyles();

  return (
    <div className="container">
      <div className="card-panel login-panel">
        <form className="signin">
          <div className="row">
            <div className="input-field col s12 ">
              <h5 class="center-left ltc-heading">Create User Account</h5>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input id="full-name-input" type="text" class="validate"></input>
              <label for="full-name-input">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input id="name-input" type="text" class="validate"></input>
              <label for="name-input">Login / User Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                id="password-input"
                type="password"
                class="validate"
              ></input>
              <label for="password-input">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                id="password-confirm-input"
                type="password"
                class="validate"
              ></input>
              <label for="password-confirm-input">Confirm Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 center-align">
              <button
                class="btn waves-effect waves-light rounded"
                type="submit"
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

export default signinPage;
