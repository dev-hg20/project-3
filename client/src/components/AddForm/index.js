import React from "react";
// import TextField from "../components/TextField";

function AddForm() {
  return (
    <div className="container">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label for="first_name">Restaurant Name</label>
          </div>
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label for="first_name">Must Try</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label for="first_name">Location </label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              CBD/Russell St
            </span>
          </div>
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
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
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
