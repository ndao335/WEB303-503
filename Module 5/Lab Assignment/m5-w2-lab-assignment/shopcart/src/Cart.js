import './App.css';
import React, { Component } from "react";
import Navigation from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./products";
import Shopcontent from "./displayProducts";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
        shoppingItem: products
        };
    }

    render(){
        return ( 
            <div className="Cart">
            <Navigation 
                totalValue = {this.state.shoppingItem.map(item => item.value).reduce((acc, curr, index)=> acc + curr, 0)} 
                items={this.state.shoppingItem}/>
            <Shopcontent 
                shopitems={this.state.shoppingItem}
            />
            </div>
        );
    }
}
  
export default Cart;