import './App.css';
import React, { Component } from "react";
import { products } from "./products";
import Shopcontent from "./displayProducts";
import Navigation from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      shoppingItem: products
    };
  }

  handleIncrease = (item) => {
    const updatedItem = item.value++;
    this.setState({updatedItem});
  }

  handleDecrease = (item) => {
    if(item.value > 0){
      const updatedItem = item.value--;
      this.setState({updatedItem});
    }
  }

  render(){
    return ( 
      <div className="App">
        <Navigation 
          totalValue = {this.state.shoppingItem.map(item => item.value).reduce((acc, curr, index)=> acc + curr, 0)} 
          items={this.state.shoppingItem}/>
        <Shopcontent 
          shopitems={this.state.shoppingItem}
          addItem={this.handleIncrease} 
          removeItem={this.handleDecrease}
        />
      </div>
    );
  }
}

export default App;
