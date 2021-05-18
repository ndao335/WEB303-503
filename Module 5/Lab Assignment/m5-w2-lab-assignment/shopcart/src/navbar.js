import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart, faRegistered} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import App from "./App";
import Cart from "./Cart";
import './App.css';
// import Shopcontent from "./displayProducts";

export default function Navigation(props){
    return (
        <div className="navbar">
            <Router>
                <h1 className="title">
                    <Link to="/">
                        <span>Shop 2</span>
                        <FontAwesomeIcon icon={faRegistered}>React</FontAwesomeIcon>
                    </Link>
                </h1>
                <p className="shoppingCart">
                    <Link to="/Cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon">
                        </FontAwesomeIcon>
                    </Link>
                    <span>{props.totalValue} items</span>
                </p>
                
                <Switch>
                    <Route exact path="/">
                        
                    </Route>
                    <Route path="/Cart">
                        <Cart shoppingItems={props.items}/>  
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}