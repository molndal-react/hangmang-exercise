import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hangman from "./Hangman";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hangman />
      </div>
    );
  }
}

export default App;
