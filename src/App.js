import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
 
    <Router>
         <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Discover" component={Discover} />
        <Route path="/Search" component={Search} />
        <Route path="/Navbar" component={Navbar} />
      </div>
    </Router>
  );
}

export default App;

