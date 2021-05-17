import './App.css';
import React from "react";
import Nav from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from 'reactstrap';

function Cart(props){
    return ( 
      {},
      (
        <div className="Cart">
            <Nav/>
            <ListGroup>
                {props.shopitems.map((shopitem) => (
                <ListGroupItem key={shopitem.id} className="GroupItem">
                    <h2>{shopitem.desc}</h2>
                    <div className="itemcontent">
                    <img src={shopitem.image} alt="Shopping" height={150} width={150}/>
                    <div className="quantityDisplay">
                        <p className="quantity">quantity: {shopitem.value}</p>
                    </div>
                    </div>
                </ListGroupItem>
                ))}
            </ListGroup>
        </div>
      )
    );
}

export default Cart;