import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import loginPage from "../src/pages/loginPage";
import Container from "../src/components/Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Route exact path="/" component={loginPage} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
