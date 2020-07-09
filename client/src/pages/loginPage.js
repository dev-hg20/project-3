import React from "react";

function loginPage() {
  // const classes = useStyles();

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
                id="name-input"
                type="text"
                class="validate"
              ></input>
              <label for="name-input">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 ">
              <input
                placeholder="Password"
                id="password-input"
                type="password"
                class="validate"
              ></input>
              <label for="password-input">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 center-align">
              <button
                class="btn waves-effect waves-light rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginPage;
