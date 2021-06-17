import Tree from './collapsible-tree/Tree'
import Sphere from "./vertex-sphere/index";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BarChart from './barchart/BarChart';
import data from "./collapsible-tree/data";

export default function Navbar(props){
    return(
        <div className="navbar">
            <Router>
                <ul className="nav mx-2 mb-4">
                    <li>
                        <h1>
                            <Link to="/Barchart">BarChart</Link>
                        </h1>
                    </li>
                    <li>
                        <h1>
                            <Link to="/Tree">Collapsible Tree</Link>
                        </h1>
                    </li>
                    <li>
                        <h1>
                            <Link to="/Sphere">Vertex Sphere</Link>
                        </h1>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Barchart">
                        <BarChart />
                    </Route>
                    <Route path="/Tree">
                        <Tree data={data} width={600} height={500} />
                    </Route>
                    <Route path="/Sphere">
                        <Sphere/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}