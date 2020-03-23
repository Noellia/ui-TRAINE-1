import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Car'
import Country from '../pages/Country';
import Home from '../pages/Home'
import Instruments from '../pages/Instruments'

export default function BasicExample() {
    return (
        <Router>
            <br/>
            <>
            <h3>
                 <nav>
                    &nbsp;&nbsp;&nbsp;
                     <Link to="/"> Home </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/country">Countries</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/cars">Cars</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/instruments">Instruments</Link>
                </nav>
                <br/>
            </h3>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/instruments" component={Instruments}/>
                </Switch>
            </>
        </Router>
    );
}
