import React, { Component } from "react";




import "./card.css";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            price: "",
            volume: "",
            concentration: "",
            valueRating: "Score",
            bar: "",
            id: this.id

        };
        this._onInputChange = this._onInputChange.bind(this);
        this._onCalculate = this._onCalculate.bind(this);
    
    }

    _onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    _onCalculate() {
        let score = 10 - this.state.price / (this.state.volume * (this.state.concentration * 0.01));
        if (!!isNaN) {
            this.setState({
                valueRating: score.toFixed(4) * 10,
                bar: score * 10 + "%"
            });

        }
    }

    _onDeleteCard = () => {
        // console.log(e)
        this.props.closeItem(this);
    }


    render() {
        return (
            
                <div className="card" >
                <button className="card__close" onClick={this._onDeleteCard}>X</button>
                    <h3 className="card__title">Item #</h3>
                    <input
                        type="text"
                        placeholder="price"
                        name="price"
                        value={this.state.price}
                        onChange={this._onInputChange}
                        className="card__price"
                    />
                    <input
                        type="text"
                        placeholder="volume"
                        name="volume"
                        value={this.state.volume}
                        onChange={this._onInputChange}
                        className="card__volume"
                    />
                    <input
                        type="text"
                        placeholder="concentration"
                        name="concentration"
                        value={this.state.concentration}
                        onChange={this._onInputChange}
                        className="card__concentration"
                    />
                    <div className="card__score">
                        <h3 className="card__score__value">{this.state.valueRating}</h3>
                        <div className="card__score__bar" style={{ width: this.state.bar }} />
                    </div>
                    <button className="card__calculate" onClick={this._onCalculate}>Calculate</button>
                </div>
            
        );
    }
}

export default Card;