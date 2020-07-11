import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loginPage from "./pages/loginPage";
import signinPage from "./pages/signinPage";
import profilePage from "./pages/profilePage";
import homePage from "./pages/homePage";
import Container from "../src/components/Container";
import Nav from "../src/components/Nav";
import "./App.css";
import AuthContextProvider from "./components/Context/AuthContext";
import { PrivateRoute } from "./components/Routes/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Nav></Nav>
          <br></br>
          <Container>
            <Route exact path="/login" component={loginPage} />
            <Route exact path="/signin" component={signinPage} />
            <Route exact path="/profile" component={profilePage} />
            <PrivateRoute exact path="/homepage" component={homePage} />
            <PrivateRoute exact path="/" component={homePage} />
          </Container>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
