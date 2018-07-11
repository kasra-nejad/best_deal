import React, { Component } from "react";


import "./card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "",
            volume: "",
            concentration: "",
            valueRating: "Score",
            bar: ""

        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onCalculate() {
        let score = 10 - this.state.price / (this.state.volume * (this.state.concentration * 0.01));
        if (!!isNaN) {
            this.setState({
                valueRating: score.toFixed(4) * 10,
                bar: score * 10 + "%"
            });

        }
    }

    render() {
        return (
            
                <div className="card">
                    <button className="card__close">X</button>
                    <h3 className="card__title">Item #</h3>
                    <input
                        type="text"
                        placeholder="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.onInputChange}
                        className="card__price"
                    />
                    <input
                        type="text"
                        placeholder="volume"
                        name="volume"
                        value={this.state.volume}
                        onChange={this.onInputChange}
                        className="card__volume"
                    />
                    <input
                        type="text"
                        placeholder="concentration"
                        name="concentration"
                        value={this.state.concentration}
                        onChange={this.onInputChange}
                        className="card__concentration"
                    />
                    <div className="card__score">
                        <h3 className="card__score__value">{this.state.valueRating}</h3>
                        <div className="card__score__bar" style={{ width: this.state.bar }} />
                    </div>
                    <button className="card__calculate" onClick={this.onCalculate}>Calculate</button>
                </div>
            
        );
    }
}

export default Card;