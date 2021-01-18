import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <h1>hello</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
