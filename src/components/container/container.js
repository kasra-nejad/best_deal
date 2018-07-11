import React, {Component} from "react";
import Card from "./card/card.js"

import "./container.css";


class Container extends Component {
  
  render() {
    return <div className="container">
        <button className="container__addItem">New Item</button>
        <div className="container__Item">
          <Card />
        </div>
      </div>;
  }
}

export default Container;