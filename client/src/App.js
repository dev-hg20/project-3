import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loginPage from "./pages/loginPage";
import signinPage from "./pages/signinPage";
import profilePage from "./pages/profilePage";
import homePage from "./pages/homePage";
import Container from "../src/components/Container";
import Nav from "../src/components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <br></br>
        <Container>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/signin" component={signinPage} />
          <Route exact path="/profile" component={profilePage} />
          <Route exact path="/homepage" component={homePage} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
