import React from 'react';
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

function Navbar(props) {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink exact className="navbar-brand" to="/">KB</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink activeStyle={{color:"blue",borderBlock:"2px"}} exact className="nav-link" to="/" >Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact  activeStyle={{color:"blue",borderBlock:"2px"}} className="nav-link" to="/add">ADD</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
                <Route path="/" exact component={Home}></Route>
                <Route path="/add" exact component={Add}></Route>
                <Route path="/edit/:id" exact component={Edit}></Route>
            </div>
        </BrowserRouter>

    );
}

export default Navbar;