import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import Card from "./card/card.js";

import "./container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      itemNumber: 1
    };

    this._closeItem = this._closeItem.bind(this);
  }

  _addItem = () => {
    const card = (
      <Card
        key={this.state.cards.length}
        index={this.state.cards.length + 1}
        id={uuidv1()}
        closeItem={this._closeItem}
        itemNumber={this.state.itemNumber}
      />
    );
    const cards = [...this.state.cards, card];

    this.setState({
      cards,
      itemNumber: this.state.itemNumber + 1
    });
  };

  _closeItem = e => {
    const cards = this.state.cards.filter(card => {
      return e.props.id !== card.props.id;
    });

    this.setState({
      cards
    });
  };

  render() {
    const cards = this.state.cards.map(card => card);

    return (
      <div className="container">
        <button className="container__addItem" onClick={this._addItem}>
          New Item
        </button>
        <div className="container__item">{cards}</div>
      </div>
    );
  }
}

export default Container;
