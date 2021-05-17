import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import App from "./App";
import Cart from "./Cart"

export default function Nav(){
    return (
        <div>
            <Router>
                <Link to="/">
                    <h1 className="title">
                        Shop to React
                    </h1>
                </Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="cartIcon">
                        <p>0 items</p>
                    </FontAwesomeIcon>
                </Link>
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>  
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}