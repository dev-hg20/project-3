import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "../src/pages/searchPage";
import SavedPage from "../src/pages/savedPage";
import Wrapper from "../src/components/Wrapper";
import Header from "../src/components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Wrapper>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
