import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart, faRegistered} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Cart from "./Cart";
import './App.css';

export default function Navigation(props){
    return (
        <div className="navbar">
            <Router>
                <ul className="nav mx-2 mb-4">
                    <li>
                        <h1>
                            <Link to="/">Shop 2 
                            <FontAwesomeIcon
                                icon={faRegistered}
                                className="fas fa-2x my-3 mr-2 text-white"
                            />
                            </Link>
                        </h1>
                        
                    </li>
                    <li className="shoppingCart">
                        <Link to="/Cart">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="fas fa-2x my-3 text-white"
                        />
                        </Link>
                        {/* <span className="itemAmount">{props.totalValue} items</span> */}
                    </li>
                </ul>

                {/* Routes */}
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Cart">
                    <Cart/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}