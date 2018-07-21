import React, { Component } from "react";
import uuidv1 from "uuid/v1";
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
         <Card cards={this.state.cards.map(card => card)} key={this.state.cards.length} id={uuidv1()} closeItem={this._closeItem}/>)
      })
    }

  _closeItem = (e) => {
   
     const cards = this.state.cards.filter((card, i) => { return e.props.id !== card.props.id; })
        this.setState({
          cards: cards
    });

    
    
    }
  
  
  
  render() { 

    return ( <div className="container">
        <button className="container__addItem" onClick={this._addItem}>
          New Item
        </button>
      <ul className="container__item" >

          {this.state.cards.map(card => card)}
          
        </ul>
      </div>);
  }
}

export default Container;