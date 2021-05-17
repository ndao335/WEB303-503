import './App.css';
import React, { Component } from "react";
import { products } from "./products";
import Shopcontent from "./displayProducts";
import Nav from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      shoppingItem: products
    };
  }

  increase = (item) => {
    const updatedItem = item.value + 1;
    this.setState({updatedItem});
  }

  decrease = (item) => {
    if(item.value > 0){
      const updatedItem = item.value - 1;
      this.setState({updatedItem});
    }
  }

  render(){
    let ShoppingContent = <Shopcontent shopitems={this.state.shoppingItem} />;
    return ( 
      {},
      (
        <div className="App">
          <Nav/>
          {ShoppingContent}
        </div>
      )
    );
  }
}

export default App;
