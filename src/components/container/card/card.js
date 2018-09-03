import React, { Component } from "react";
import MaterialIcon from "material-icons-react";

import "./card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      quantity: 1,
      price: null,
      volume: null,
      concentration: null,
      valueRating: "Score",
      bar: null,
      active: false
    };

    this._onInputChange = this._onInputChange.bind(this);
    this._onCalculate = this._onCalculate.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this._deactivate);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._deactivate);
  }

  _onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  _onCalculate() {
    let score =
      10 -
      this.state.price /
        (this.state.quantity *
          this.state.volume *
          (this.state.concentration * 0.01));
    if (!!isNaN) {
      this.setState({
        valueRating: score.toFixed(4) * 10,
        bar: score * 10 + "%"
      });
    }
  }

  _onDeleteCard = () => {
    this.props.closeItem(this);
  };

  _activate = () => {
    this.setState({
      active: true
    });
  };

  _deactivate = e => {
    if (e.target.id !== this.props.id || e.target === undefined) {
      this.setState({
        active: false
      });
    }
  };

  render() {
    const itemNumber = this.props.itemNumber;
    const active = this.state.active;
    const id = this.props.id;
    return (
      <div
        onClick={this._activate}
        className={active ? "card active" : "card"}
        id={id}
        deactivate={this._handleDeactivate}
      >
        <button className="card__close" onClick={this._onDeleteCard}>
          <MaterialIcon icon="highlight_off" />
        </button>
        <h3 className="card__title" id={id}>
          Item {itemNumber}
        </h3>
        <input
          className="card__quantity"
          id={id}
          type="option"
          placeholder="quantity"
          name="quantity"
          value={this.state.quantity}
          onChange={this._onInputChange}
        />
        <input
          className="card__price"
          id={id}
          type="text"
          placeholder="price"
          name="price"
          value={this.state.price}
          onChange={this._onInputChange}
        />
        <input
          className="card__volume"
          id={id}
          type="text"
          placeholder="volume"
          name="volume"
          value={this.state.volume}
          onChange={this._onInputChange}
        />
        <input
          className="card__concentration"
          id={id}
          type="text"
          placeholder="concentration"
          name="concentration"
          value={this.state.concentration}
          onChange={this._onInputChange}
        />
        <div className="card__score" id={id}>
          <h3 className="card__score__value" id={id}>
            {this.state.valueRating}
          </h3>
          <div
            className="card__score__bar"
            id={id}
            style={{ width: this.state.bar }}
          />
        </div>
        <button className="card__calculate" id={id} onClick={this._onCalculate}>
          Calculate
        </button>
      </div>
    );
  }
}

export default Card;
