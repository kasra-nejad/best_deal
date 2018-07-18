import React, { Component } from "react";
import Card from "./card/card.js"

import "./container.css";


class Container extends Component {
  constructor(props){
    super(props)
    this.state = { cards: [] };

    this._closeItem = this._closeItem.bind(this);
    
  }
  
  _addItem = () => {
 
     this.setState ({
       cards: this.state.cards.concat(
       <Card cards={this.state.cards.map((card)=> {return card})} key={this.state.cards.length+1} closeItem={this._closeItem}/>)
      })
    }

  _closeItem = (e) => {
        this.setState({
          cards: this.state.cards.filter((card, i) => { return card !== e[i];})
    });

    console.log(this.state.cards);
    console.log(e);
    }
  
  
  
  render() { 

    return ( <div className="container">
        <button className="container__addItem" onClick={this._addItem}>
          New Item
        </button>
      <ul className="container__item" >

          {this.state.cards.map(card => card )}
          
        </ul>
      </div>);
  }
}

export default Container;