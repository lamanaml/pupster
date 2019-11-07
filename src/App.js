import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Discover" component={Discover} />
        <Route path="/Search" component={Search} />
      </div>
    </Router>
  );
}

export default App;

