import React, { Component } from 'react';


import Container from "./components/container/container.js";
import "./app.css";
import "./components/container/container.css";


class App extends Component {
  render() {
    return <div className="App">
        <Container />
      </div>;
  }
}

export default App;
