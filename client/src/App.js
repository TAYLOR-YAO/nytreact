import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/saved" component={Saved}/>
            
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;