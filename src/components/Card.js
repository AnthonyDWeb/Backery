//------------------------Library------------------------------------
import React from 'react';
//------------------------style------------------------------------
import '../App.css'

class Card extends React.Component{
    constructor(){
        super();

        this.state ={
            image: "./images/item.png"
        }
    }

    render(){
        return (
            <div style={{marginBottom: 10, display: "flex", alignItems: "center"}}>
                <img className="imgCard" src={this.state.image} alt="item" />
                <p style={{margin: "0 1rem"}}>{this.props.productName}</p>
                <p>{this.props.price * this.props.quantity} €</p>
            </div>
        )
    }
}

export default Card;